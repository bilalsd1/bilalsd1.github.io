#!/usr/bin/env node
/* Project data quality check. Run after adding or importing project records:   node tools/check-projects.js
   - validates required fields, taxonomy and ids
   - keeps career position and project role separate
   - flags POSSIBLE DUPLICATES (never merges or deletes anything)
   - blocks private contact data (emails, phone numbers, street addresses) from public fields
   Exit code 1 when there are errors. */
'use strict';
const fs = require('fs'), path = require('path'), vm = require('vm');
const root = path.join(__dirname, '..');
const ctx = { window: {} }; vm.createContext(ctx);
['experience', 'projects', 'certificates'].forEach(f => vm.runInContext(fs.readFileSync(path.join(root, 'data', f + '.js'), 'utf8'), ctx));
const P = ctx.window.PROJECTS, EXP = ctx.window.EXPERIENCE, CERT = ctx.window.CERTIFICATES;

const TAXONOMY = ['Engineering', 'HVAC & Refrigeration', 'Industrial Automation', 'IT Infrastructure', 'Networking', 'Software Engineering', 'Database', 'Cloud', 'DevOps', 'Enterprise Systems', 'ERP / POS', 'Security', 'IoT', 'Systems Integration', 'Other / Unclassified'];
const VERIF = ['verified', 'partial', 'review', 'duplicate'];
const PM = ['initiating', 'planning', 'executing', 'monitoring', 'closing'];
const errors = [], warns = [], info = [];
const E = (id, m) => errors.push(`ERROR  ${id}: ${m}`), W = (id, m) => warns.push(`WARN   ${id}: ${m}`);

/* ---- per-record checks ---- */
const seen = new Set();
const PRIVATE = [[/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i, 'email address'], [/(\+?\d[\d\s().-]{8,}\d)/, 'phone-like number'], [/\b(p\.?o\.?\s*box|street|st\.|road|rd\.)\s*\d*/i, 'street / postal address']];
const publicText = p => JSON.stringify({ ...p, sources: undefined });
P.forEach(p => {
  const id = p.id || '(no id)';
  ['id', 'title', 'cat', 'type', 'oneLine'].forEach(k => { if (!p[k]) E(id, `missing required field "${k}"`); });
  if (seen.has(p.id)) E(id, 'duplicate id'); seen.add(p.id);
  if (p.cat && !TAXONOMY.includes(p.cat)) E(id, `category "${p.cat}" is not in the controlled taxonomy`);
  if (!VERIF.includes(p.verification)) E(id, `verification must be one of ${VERIF.join(' | ')}`);
  if (!p.sources || !p.sources.length) E(id, 'no source record (every project needs at least one source)');
  (p.sources || []).forEach((s, i) => { if (!s.type || !s.ref) E(id, `sources[${i}] needs type and ref`); });
  (p.experience || []).forEach(e => { if (!EXP.some(x => x.id === e)) E(id, `experience id "${e}" does not exist`); });
  (p.certifications || []).forEach(c => { if (!CERT.some(x => x.id === c)) E(id, `certification id "${c}" does not exist`); });
  if (p.start && !/^\d{4}$/.test(p.start)) E(id, `start must be a 4-digit year, got "${p.start}"`);
  if (p.end && !/^\d{4}$/.test(p.end)) E(id, `end must be a 4-digit year, got "${p.end}"`);
  if (p.start && p.end && +p.end < +p.start) E(id, 'end year is before start year');
  if (p.pm) PM.forEach(k => { if (p.pm[k] != null && !(typeof p.pm[k] === 'number' && p.pm[k] >= 0)) E(id, `pm.${k} must be a non-negative number of hours`); });
  if (p.careerPosition && p.projectRole && p.careerPosition === p.projectRole) W(id, 'careerPosition and projectRole are identical. Confirm they are separate facts, not a copy.');
  if (p.company && !EXP.some(x => x.company === p.company) && !(p.sources || []).some(s => s.type === 'PMI project record')) W(id, `organization "${p.company}" is not an employer in experience.js (fine for client organizations)`);
  if (p.location && !p.sources.length) W(id, 'location without a source');
  if (p.verification === 'verified' && !(p.sources || []).some(s => s.original)) W(id, 'verified, but no original source wording is preserved');
  if (p.status !== 'draft' && !p.outcome.length) info.push(`INFO   ${id}: no documented outcome (nothing will be displayed, which is correct unless the source documents one)`);
  const txt = publicText(p);
  PRIVATE.forEach(([re, what]) => { const m = re.exec(txt); if (m) E(id, `possible ${what} in a public field: "${m[0].trim()}". Move it out; contact details must never be published.`); });
});

/* ---- duplicate detection (distinctive title words + description + organization + start month + type) ---- */
const GENERIC = new Set('new wireless network installation installing install link servicing service upgrade upgrading configuration configuring system systems hotel hotels resorts atlas company project of to from with and the for ap cabling load balancing p2p router routers switch switches existing old'.split(' '));
const tok = (s, filter) => new Set(String(s).toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter(w => w.length > 1 && (!filter || !GENERIC.has(w))));
const jac = (a, b) => { const i = [...a].filter(x => b.has(x)).length, u = new Set([...a, ...b]).size; return u ? i / u : 0; };
const pairs = [];
for (let i = 0; i < P.length; i++) for (let j = i + 1; j < P.length; j++) {
  const a = P[i], b = P[j];
  const t = jac(tok(a.title, true), tok(b.title, true)), d = jac(tok(a.oneLine), tok(b.oneLine));
  const sameOrg = a.company && a.company === b.company, sameType = a.type === b.type, sameStart = a.startYM && a.startYM === b.startYM;
  const score = t * 0.45 + d * 0.2 + (sameOrg ? 0.12 : 0) + (sameType ? 0.08 : 0) + (sameStart ? 0.15 : 0);
  if (score >= 0.6) pairs.push([a, b, score]);
}
pairs.sort((x, y) => y[2] - x[2]).forEach(([a, b, s]) => warns.push(`POSSIBLE DUPLICATE (${Math.round(s * 100)}%): "${a.title}" [${a.id}] ~ "${b.title}" [${b.id}]. Not merged. If confirmed, keep one primary record and add the other as a second entry in its sources[].`));

/* ---- report ---- */
const by = k => P.reduce((m, p) => (m[p[k] || '(none)'] = (m[p[k] || '(none)'] || 0) + 1, m), {});
console.log(`Project records: ${P.length}   verified: ${P.filter(p => p.verification === 'verified').length}   organizations: ${new Set(P.map(p => p.company).filter(Boolean)).size}`);
console.log('By category:', JSON.stringify(by('cat')));
[...errors, ...warns, ...info].forEach(l => console.log(l));
console.log(errors.length ? `\nFAILED: ${errors.length} error(s), ${warns.length} warning(s)` : `\nOK: 0 errors, ${warns.length} warning(s)`);
process.exit(errors.length ? 1 : 0);
