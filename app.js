(function () {
  'use strict';
  const W = window, P = W.PROFILE, EXP = W.EXPERIENCE, PROJ = W.PROJECTS, CERT = W.CERTIFICATES, TECH = W.TECH_DB, CATS = W.TECH_CATS;
  const $ = (s, r = document) => r.querySelector(s), $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  /* ---------- helpers ---------- */
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const md = s => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const ym = s => { const m = /^(\d{4})-(\d{2})/.exec(s || ''); return m ? MON[+m[2] - 1] + ' ' + m[1] : ''; };
  const period = x => ym(x.start) + ' — ' + (x.end ? ym(x.end) : 'Present');
  const fileUrl = u => /^(certificates|projects)\/[\w .\-()]+\.(pdf|png|jpe?g|webp)$/i.test(u || '') ? encodeURI(u) : '';
  const bl = (a, cls) => a && a.length ? `<ul class="bl ${cls || ''}">${a.map(t => `<li>${md(t)}</li>`).join('')}</ul>` : '';
  const chips = (a, cls) => (a || []).map(t => `<span class="chip ${cls || ''}">${esc(t)}</span>`).join('');
  const LVL = { project: 'Project', trained: 'Trained', stated: 'On CV', draft: 'In preparation', Delivered: 'Delivered' };
  const lv = k => `<span class="lv ${esc(k)}">${esc(LVL[k] || k)}</span>`;
  const tyClass = t => ({ 'Official certification': 'o', 'Course completion': 'c', 'Course and professional experience': 'c', 'Learning path': 'l', 'Expired certification': 'e' }[t] || 'c');
  const ICONS = {
    dashboard: '<rect x="3" y="3" width="7" height="9"/><rect x="14" y="3" width="7" height="5"/><rect x="14" y="12" width="7" height="9"/><rect x="3" y="16" width="7" height="5"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21v-1a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v1"/>',
    briefcase: '<rect x="3" y="7" width="18" height="13" rx="1"/><path d="M8 7V4h8v3M3 13h18"/>',
    folder: '<path d="M3 6h6l2 2h10v11H3z"/>', star: '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
    thermo: '<path d="M14 14V5a2 2 0 0 0-4 0v9a4 4 0 1 0 4 0z"/>', gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
    code: '<path d="M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16"/>', cloud: '<path d="M7 18a4 4 0 0 1-.5-8A6 6 0 0 1 18 9a4.5 4.5 0 0 1-.5 9z"/>',
    server: '<rect x="3" y="4" width="18" height="7" rx="1"/><rect x="3" y="13" width="18" height="7" rx="1"/><path d="M7 7.5h.01M7 16.5h.01"/>',
    db: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
    network: '<circle cx="12" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><path d="M12 7v5M12 12l-6 5M12 12l6 5"/>',
    cert: '<rect x="3" y="4" width="18" height="13" rx="1"/><circle cx="12" cy="11" r="3"/><path d="M9 21l3-3 3 3"/>',
    grad: '<path d="M2 9l10-5 10 5-10 5z"/><path d="M6 11v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/>', file: '<path d="M6 3h8l4 4v14H6z"/><path d="M14 3v4h4"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="1"/><path d="M3 7l9 6 9-6"/>', search: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',
    chip: '<rect x="6" y="6" width="12" height="12"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>', menu: '<path d="M4 7h16M4 12h16M4 17h16"/>'
  };
  const ic = n => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${ICONS[n] || ''}</svg>`;

  /* ---------- modes (one data set, two professional views) ---------- */
  const MODES = {
    hvac: { label: 'HVAC / Engineering', tags: ['eng', 'auto'], cv: 'hvac', sub: 'HVAC / Engineering', blurb: 'Compressor technology, PLC training, device-to-ERP integration and power systems.', projCats: ['HVAC and Automation', 'Automation and Integration'] },
    it: { label: 'Advanced IT / Software', tags: ['it', 'dev'], cv: 'it', sub: 'Advanced IT / Software', blurb: 'Enterprise infrastructure, networking, databases, APIs and application development.', projCats: ['IT Infrastructure', 'Data and Enterprise Systems', 'Software and Mobile'] }
  };
  let mode = 'it';
  try { const q = new URLSearchParams(location.search).get('mode'); const s = localStorage.getItem('mode'); mode = MODES[q] ? q : (MODES[s] ? s : 'it'); } catch (e) {}

  /* ---------- relations between records ---------- */
  const roleText = x => [x.focus, ...x.tech, ...x.responsibilities.map(r => r.l + ' ' + r.t), ...x.contributions].join(' ');
  const projText = p => [p.title, p.oneLine, ...p.tech, ...p.myRole, ...p.solution, ...p.objective, ...p.outcome, ...Object.values(p.scope || {}).flat()].join(' ');
  const techOfRole = x => TECH.filter(t => t.re.test(roleText(x)));
  const techOfProj = p => TECH.filter(t => t.re.test(projText(p)));
  const rolesOf = t => EXP.filter(x => t.re.test(roleText(x)));
  const projsOf = t => PROJ.filter(p => t.re.test(projText(p)));
  const certsOf = t => CERT.filter(c => t.re.test([c.name, c.course].join(' ')));
  const techById = id => TECH.find(t => t.id === id);
  const projById = id => PROJ.find(p => p.id === id);
    const techLink = t => `<a class="chip t" href="#/technology/${t.id}">${esc(t.n)}</a>`;
  const projRank = p => { const i = MODES[mode].projCats.indexOf(p.category); return i < 0 ? 9 : i; };
  const CAT_ICON = { Automation: 'gear', HVAC: 'thermo', Programming: 'code', Database: 'db', Cloud: 'cloud', DevOps: 'chip', Networking: 'network', Infrastructure: 'server', Security: 'cert', Enterprise: 'briefcase' };

  /* ---------- navigation model ---------- */
  const NAV = {
    workspace: { t: 'Workspace', items: [['/dashboard', 'Dashboard', 'dashboard'], ['/profile', 'Profile', 'user']] },
    career: { t: 'Career', items: [['/experience', 'Experience', 'briefcase'], ['/projects', 'Projects', 'folder'], ['/expertise', 'Expertise', 'star']] },
    engineering: { t: 'Engineering', items: [['/hvac', 'HVAC & Refrigeration', 'thermo'], ['/automation', 'Automation & PLC', 'gear']] },
    technology: { t: 'Technology', items: [['/it', 'Advanced IT View', 'chip'], ['/technology?cat=Programming', 'Software', 'code'], ['/technology?cat=Cloud,DevOps', 'Cloud & DevOps', 'cloud'], ['/technology?cat=Infrastructure', 'Infrastructure', 'server'], ['/technology?cat=Database', 'Database', 'db'], ['/technology?cat=Networking', 'Networking', 'network'], ['/technology', 'All technologies', 'search']] },
    credentials: { t: 'Credentials', items: [['/certifications', 'Certifications', 'cert'], ['/education', 'Education', 'grad'], ['/documents', 'Documents', 'file']] },
    tools: { t: 'Career tools', items: [['/cv', 'CV Workspace', 'file'], ['/contact', 'Contact', 'mail']] }
  };
  const ORDER = { hvac: ['workspace', 'engineering', 'career', 'technology', 'credentials', 'tools'], it: ['workspace', 'career', 'technology', 'engineering', 'credentials', 'tools'] };
  const cur = () => { const h = location.hash.replace(/^#/, '') || '/dashboard'; return h; };
  function renderNav() {
    const now = cur();
    $('#side').innerHTML = `<div class="ng only-m"><h5>Career mode</h5><div class="mm">${Object.keys(MODES).map(k => `<button data-mode="${k}" aria-pressed="${k === mode}">${esc(MODES[k].label)}</button>`).join('')}</div></div>` + ORDER[mode].map(k => { const g = NAV[k]; return `<div class="ng"><h5>${g.t}</h5>${g.items.map(([r, l, i]) => `<a class="ni" href="#${r}" ${now === r || (now.split('?')[0] === r.split('?')[0] && !r.includes('?') && r !== '/technology') ? 'aria-current="page"' : ''}>${ic(i)}<span>${esc(l)}</span></a>`).join('')}</div>`; }).join('');
    $('#modes').innerHTML = Object.keys(MODES).map(k => `<button data-mode="${k}" aria-pressed="${k === mode}" title="${esc(MODES[k].blurb)}">${esc(MODES[k].label)}</button>`).join('');
    const b = [['/dashboard', 'Home', 'dashboard'], ['/experience', 'Career', 'briefcase'], ['/projects', 'Projects', 'folder']];
    $('#bottomnav').innerHTML = b.map(([r, l, i]) => `<a href="#${r}" ${now.split('?')[0] === r ? 'aria-current="page"' : ''}>${ic(i)}${l}</a>`).join('') + `<button data-act="focus-search">${ic('search')}Search</button><button data-act="menu">${ic('menu')}Menu</button>`;
  }

  /* ---------- shared view pieces ---------- */
  const head = (title, intro, crumb, actions) => `<div class="phead"><div>${crumb ? `<p class="crumb"><a href="#/dashboard">Dashboard</a> / ${crumb}</p>` : ''}<h1>${esc(title)}</h1>${intro ? `<p>${intro}</p>` : ''}</div>${actions ? `<div>${actions}</div>` : ''}</div>`;
  const pn = (title, body, link, flush) => `<section class="pn"><div class="ph"><h2>${esc(title)}</h2>${link || ''}</div><div class="pb ${flush ? 'flush' : ''}">${body}</div></section>`;
  const levelCounts = () => ['project', 'trained', 'stated'].map(k => [k, TECH.filter(t => t.lvl === k).length]);
  const docCerts = CERT.filter(c => c.pdf);

  function projCard(p) {
    const scopeKeys = Object.keys(p.scope || {}).filter(k => p.scope[k].length);
    return `<article class="pcard"><div class="top"><span class="cat">${esc(p.category)}</span>${lv(p.status === 'draft' ? 'draft' : 'Delivered')}</div>
    <h3><a href="#/projects/${p.id}">${esc(p.title)}</a></h3>
    <p class="meta">${[p.period, p.careerPosition && 'Position: ' + p.careerPosition].filter(Boolean).map(esc).join(' · ') || 'Documentation in preparation'}</p>
    <p class="desc">${esc(p.oneLine)}</p>
    ${p.objective.length ? `<div><span class="lbl">Objective</span>${md(p.objective[0])}</div>` : ''}
    ${p.outcome.length ? `<div><span class="lbl">Result</span>${md(p.outcome[0])}</div>` : ''}
    ${scopeKeys.length ? `<div><span class="lbl">Scope</span>${chips(scopeKeys)}</div>` : ''}
    <div>${chips(p.tech.slice(0, 7), 't')}</div><a class="go" href="#/projects/${p.id}">View project →</a></article>`;
  }

  const projLinks = ids => `<div class="dlist">${ids.map(projById).filter(Boolean).map(p => `<a href="#/projects/${p.id}">${esc(p.title)}<span>${esc(p.category)} · ${esc(p.period || 'Documentation in preparation')}</span></a>`).join('')}</div>`;
  /* ---------- views ---------- */
  function vDashboard() {
    const m = MODES[mode], lc = levelCounts(), tot = TECH.length, col = { project: 'var(--ok)', trained: 'var(--accent)', stated: 'var(--warn)' };
    const feat = PROJ.filter(p => p.featured).sort((a, b) => projRank(a) - projRank(b)).slice(0, 3);
    const recent = CERT.filter(c => c.date).sort((a, b) => b.date.localeCompare(a.date)).slice(0, 5);
    return { title: 'Dashboard', html: `
    <div class="pn mb"><div class="pb ident"><img src="photo.jpg" alt="Portrait of Syed Bilal Ali" width="300" height="400" fetchpriority="high"><div>
      <p class="lbl">Professional profile</p><h1>SYED BILAL ALI</h1><p class="ttl">Multidisciplinary Engineering &amp; Technology Professional</p><p class="sub">${esc(m.sub)}</p>
      <p>${esc(P.summary)}</p><div class="acts"><a class="btn primary" href="#/experience">View experience</a><a class="btn" href="#/projects">View projects</a><a class="btn" href="#/certifications">View certifications</a><a class="btn" href="#/cv">Open CV workspace</a></div></div></div></div>
    <div class="grid g5 mb">
      <div class="kpi"><b>14+</b><span>Years of experience*</span></div><div class="kpi"><b>48</b><span>Enterprise IT projects*</span></div>
      <div class="kpi"><b>${PROJ.filter(p => p.kind !== 'summary').length}</b><span>Project records</span></div><div class="kpi"><b>${docCerts.length}</b><span>Certificates on file</span></div><div class="kpi"><b>${TECH.length}</b><span>Technologies indexed</span></div></div>
    <div class="grid g-main mb">
      ${pn('Capability domains', `<div class="grid g3">
        <a class="dom" href="#/hvac"><h3>Engineering</h3><p>HVAC compressor technology, refrigeration cycle, power systems.</p></a>
        <a class="dom" href="#/it"><h3>IT</h3><p>Infrastructure, networking, servers, enterprise systems.</p></a>
        <a class="dom" href="#/technology?cat=Database"><h3>Database</h3><p>Oracle, MySQL, PL/SQL, data integration.</p></a>
        <a class="dom" href="#/automation"><h3>Automation</h3><p>PLC programming, device-to-ERP integration.</p></a>
        <a class="dom" href="#/technology?cat=Programming"><h3>Software</h3><p>C#, ASP.NET, APIs, Windows CE applications.</p></a>
        <a class="dom" href="#/expertise"><h3>Integration</h3><p>ERP, e-commerce, devices, booking channels.</p></a></div>`)}
      ${pn('Evidence base', `<p class="mut small">How the ${tot} indexed technologies are supported.</p><div class="bar">${lc.map(([k, n]) => `<i data-w="${(n / tot * 100).toFixed(1)}" data-c="${col[k]}"></i>`).join('')}</div>
        ${lc.map(([k, n]) => `<p class="mb u-mb6">${lv(k)} <b class="mono">${n}</b> <span class="mut small">${k === 'project' ? 'used in delivered work' : k === 'trained' ? 'completed training or certificate' : 'listed on the CV'}</span></p>`).join('')}
        <p class="mut small">* As stated on the CV (Aug 2024).</p>`)}
    </div>
    <div class="grid g-main mb">
      ${pn('Featured projects — ' + m.label, `<div class="grid g3 u-gap12">${feat.map(projCard).join('')}</div>`, '<a href="#/projects">Project registry →</a>')}
      ${pn('Career timeline', `<ol class="tlm">${EXP.map(x => `<li><span class="p">${period(x)}</span><div><b>${esc(x.role)}</b><span>${esc(x.company)}</span></div></li>`).join('')}</ol>`, '<a href="#/experience">Full record →</a>', true)}
    </div>
    ${pn('Recent credentials', `<div class="tw"><table class="dt"><thead><tr><th>Credential</th><th>Issuer</th><th>Date</th><th>Type</th></tr></thead><tbody>${recent.map(c => `<tr><td><b>${esc(c.name)}</b></td><td>${esc(c.issuer)}</td><td class="mono">${ym(c.date)}</td><td><span class="ty ${tyClass(c.type)}">${esc(c.type)}</span></td></tr>`).join('')}</tbody></table></div>`, '<a href="#/certifications">All credentials →</a>', true)}`, after() { $$('.bar i').forEach(i => { i.style.width = i.dataset.w + '%'; i.style.background = i.dataset.c; }); } };
  }

  function vProfile() {
    return { title: 'Profile', html: head('Professional profile', 'Executive summary, career progression and facts.', 'Profile') + `
    <div class="grid g-main mb">
      ${pn('Executive summary', `<p class="u-lead">${esc(P.summary)}</p><div class="u-mt14">${bl([
        '**Enterprise IT:** leads IT for a multi-branch supermarket: infrastructure, Oracle ERP, e-commerce integration and in-store devices.',
        '**Project delivery:** managed 45 IT infrastructure projects across Saudi Arabia for hotels, hospitals, manufacturers, schools, energy and telecom clients.',
        '**Integration:** connects ERP, databases, APIs and physical devices (turnstiles, scales, handheld terminals).',
        '**Engineering training (2025):** PLC programming (RealPars) and the full Danfoss Turbocor TT & TG compressor program.',
        '**Academic:** BSc Computer Science in progress, Virtual University of Pakistan.'])}</div>`)}
      ${pn('Facts', `<dl class="kv"><dt>Location</dt><dd>Karachi, Pakistan</dd><dt>Languages</dt><dd>English, Urdu</dd><dt>Experience</dt><dd>14+ years (per CV, Aug 2024)</dd><dt>Current role</dt><dd>IT Head, The Big Buy Super Market</dd><dt>Industries</dt><dd>Retail · Hospitality · Healthcare · Manufacturing · Education · Energy · Telecom</dd><dt>Availability</dt><dd>Remote and on-site</dd></dl>`)}
    </div>
    ${pn('Career progression', `<div class="flow">${EXP.slice().reverse().map((x, i, a) => `<div class="n"><span class="lbl">${esc(ym(x.start).slice(-4))}</span>${esc(x.role)}</div>${i < a.length - 1 ? '<span class="a">→</span>' : ''}`).join('')}</div>`)}
    <div class="grid g3 u-mt14">${pn('Engineering', '<p class="mut">Compressor and refrigeration technology, power systems and equipment integration.</p>')}${pn('Automation', '<p class="mut">PLC programming and integration of field devices with enterprise systems.</p>')}${pn('Information technology', '<p class="mut">Networks, servers, databases and enterprise applications.</p>')}</div>
    <div class="u-mt14">${pn('Professional approach', bl(['Report progress, resource availability and budget to stakeholders.', 'Record lessons learned to speed up later projects.', 'Take on client challenges and deliver to agreed deadlines.']))}</div>` };
  }

  function roleBlock(x, open, hl) {
    const tags = MODES[mode].tags, techs = techOfRole(x), rpAll = PROJ.filter(p => (p.experience || []).includes(x.id) && p.kind !== 'summary'), rp = x.projects.map(projById).filter(Boolean).concat(rpAll.filter(p => !x.projects.includes(p.id))).filter((p, i, arr) => arr.indexOf(p) === i).slice(0, 5), cats = [...new Set(techs.map(t => t.cat))];
    const ind = { bigbuy: 'Retail (supermarket)', inetwork: 'IT consulting', aqmar: 'IT solutions and services; clients in hospitality, healthcare, manufacturing, education, energy and telecom', daralzeer: 'IT solutions and services', almada: 'IT solutions and services' }[x.id];
    return `<div class="role ${x.end ? '' : 'cur'}" id="r-${x.id}"><div class="pn"><button class="rh" data-act="toggle" aria-expanded="${open}"><div><h3>${esc(x.role)}</h3><p class="org"><b>${esc(x.company)}</b>${x.place ? ' · ' + esc(x.place) : ''}</p></div><div class="dt2">${period(x)}<small>${x.end ? '' : 'Current role'}</small></div></button>
    <div class="rbody" ${open ? '' : 'hidden'}>
      <div class="ovr"><span class="lbl">Overview</span>${esc(x.focus)}</div>
      ${ind ? `<div><span class="lbl">Industry</span>${esc(ind)}</div>` : ''}
      <div class="rgrid"><div><span class="lbl">Key responsibilities</span><ul class="bl">${x.responsibilities.map(r => `<li class="${hl && r.tags.some(t => tags.includes(t)) ? 'hi' : ''}"><strong>${esc(r.l)}:</strong> ${esc(r.t)}</li>`).join('')}</ul></div>
      ${x.contributions.length ? `<div><span class="lbl">Key contributions</span>${bl(x.contributions, 'ok')}</div>` : ''}</div>
      ${x.tech.length ? `<div><span class="lbl">Systems and technologies</span>${chips(x.tech, 't')}</div>` : ''}
      ${techs.length ? `<div><span class="lbl">Related skills</span>${cats.map(c => `<span class="chip">${esc(c)}</span>`).join('')}<div class="u-mt4">${techs.map(techLink).join('')}</div></div>` : ''}
      ${rp.length ? `<div><span class="lbl">Project connections (${Math.max(rpAll.length, rp.length)})</span><div class="dlist">${rp.map(p => `<a href="#/projects/${p.id}">${esc(p.title)}<span>${esc(p.category)}</span></a>`).join('')}<a href="#/projects?exp=${x.id}">Open all ${Math.max(rpAll.length, rp.length)} in the project registry →<span>Filtered by ${esc(x.role)}</span></a></div></div>` : ''}
      <div><span class="lbl">Documents</span><a class="chip t" href="#/cv">CV workspace</a></div>
    </div></div></div>`;
  }
  function vExperience(q) {
    const open = q.get('open'), hl = q.get('hl') !== '0';
    return { title: 'Experience', html: head('Experience', `Five roles, 2010 to present, from IT technician to IT Head. Highlighting responsibilities relevant to <b>${esc(MODES[mode].label)}</b>.`, 'Experience',
      `<button class="btn sm" data-act="expand">Expand all</button> <button class="btn sm" data-act="collapse">Collapse all</button> <a class="btn sm" href="#/experience?hl=${hl ? 0 : 1}">${hl ? 'Hide' : 'Show'} mode highlight</a>`) +
      `<div class="timeline">${EXP.map((x, i) => roleBlock(x, open ? open === x.id : i === 0, hl)).join('')}</div>`,
      after() { if (open && $('#r-' + open)) $('#r-' + open).scrollIntoView(); } };
  }

  /* ---------- project intelligence registry ---------- */
  const NOW = new Date().getFullYear();
  const TAXONOMY = ['Engineering', 'HVAC & Refrigeration', 'Industrial Automation', 'IT Infrastructure', 'Networking', 'Software Engineering', 'Database', 'Cloud', 'DevOps', 'Enterprise Systems', 'ERP / POS', 'Security', 'IoT', 'Systems Integration', 'Other / Unclassified'];
  const ENG_CATS = ['Engineering', 'HVAC & Refrigeration', 'Industrial Automation', 'IoT'];
  const PMP = [['initiating', 'Initiate'], ['planning', 'Plan'], ['executing', 'Execute'], ['monitoring', 'Monitor & control'], ['closing', 'Close']];
  const EVL = { photos: 'Photos', drawings: 'Drawings', plc: 'PLC screenshots', hmi: 'HMI screenshots', diagrams: 'Architecture diagrams', documents: 'Documents' };
  const enc = encodeURIComponent;
  const pYears = p => { if (!p.start) return []; const s = +p.start, e = p.end ? +p.end : NOW, a = []; for (let y = s; y <= e; y++) a.push(y); return a; };
  const pDate = p => !p.start ? '—' : p.end ? (p.end === p.start ? p.start : p.start + '–' + p.end) : p.start + ' – Present';
  const pStatus = p => p.status === 'draft' ? 'In preparation' : 'Delivered';
  const pCerts = p => (p.certifications || []).map(id => CERT.find(c => c.id === id)).filter(Boolean);
  const pExp = p => (p.experience || []).map(id => EXP.find(x => x.id === id)).filter(Boolean);
  const evEntries = p => Object.entries(p.evidence || {}).filter(([, v]) => v && v.length);
  const srcLabel = p => (p.verification === 'verified' ? 'Documented project' : 'Record in preparation') + ' · ' + [...new Set((p.sources || []).map(s => s.type))].join(' + ');
  const ymn = s => s ? +String(s).replace('-', '') : 0;
  const dkey = p => p.start ? ((p.end ? (p.endYM ? ymn(p.endYM) : +p.end * 100 + 12) : 999999) * 1000000 + (p.startYM ? ymn(p.startYM) : +p.start * 100 + 1)) : null;
  let REG = null;
  const registryAll = () => REG || (REG = PROJ.map(p => {
    const techs = techOfProj(p), exps = pExp(p), certs = pCerts(p);
    const blob = [p.title, p.company, p.location, p.oneLine, p.type, p.cat, p.category, p.careerPosition, p.projectRole, p.period, ...(p.disciplines || []), ...(p.industry || []), ...(p.skills || []), ...p.tech,
      ...p.myRole, ...p.objective, ...(p.need || []), ...p.challenge, ...(p.deliverables || []), ...p.solution, ...p.outcome, ...(p.architecture || []), ...Object.values(p.scope || {}).flat(), ...Object.values(p.details || {}).flat(), ...(p.basis || []),
      ...techs.map(t => t.n + ' ' + t.m.join(' ')), ...exps.map(x => x.role + ' ' + x.company), ...certs.map(c => c.name), ...(p.sources || []).map(s => s.type),
      ...evEntries(p).flatMap(([k, v]) => [EVL[k] || k, ...v.map(g => g.caption || '')])].join(' ').toLowerCase();
    return { p, techs, exps, certs, blob };
  }));
  const registry = () => registryAll().filter(r => r.p.kind !== 'summary');
  const regById = id => registryAll().find(r => r.p.id === id);
  const techGroups = r => { const g = {}; r.techs.forEach(t => (g[t.cat] = g[t.cat] || []).push(t)); const res = Object.entries(g).map(([k, v]) => [k, v.map(techLink).join('')]); const rest = r.p.tech.filter(n => !r.techs.some(t => t.re.test(n))); if (rest.length) res.push(['Equipment and systems', chips(rest, 't')]); return res; };
  const pmFlow = pm => pm ? `<div class="pmf">${PMP.filter(([k]) => pm[k] != null).map(([k, l], i, a) => `<div class="pmp"><span class="lbl">${l}</span><b class="mono">${esc(pm[k])} h</b></div>${i < a.length - 1 ? '<span class="a">→</span>' : ''}`).join('')}</div><p class="mut small u-mt6">Project management activity in documented hours. The hours show activity, not project duration.</p>` : '';
  const metaRows = r => { const p = r.p; return [['Organization', p.company && `<a class="u-acc" href="#/projects?company=${enc(p.company)}">${esc(p.company)}</a>`], ['Location', esc(p.location)], ['Career position', esc(p.careerPosition)], ['Project role', esc(p.projectRole)], ['Type', esc(p.type)], ['Category', esc(p.cat)], ['Industry', (p.industry || []).map(esc).join(', ')], ['Date', p.start ? esc(p.dateLabel || pDate(p)) : ''], ['Source', esc(srcLabel(p))]].filter(([, v]) => v); };
  const metaDl = r => `<dl class="kv kv-s">${metaRows(r).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl>`;
  const detailsHtml = p => Object.entries(p.details || {}).filter(([, v]) => v && v.length).map(([k, v]) => `<span class="lbl u-mt12">${esc(k)}</span>${bl(v)}`).join('');
  const scopeHtml = p => { const sc = Object.entries(p.scope || {}).filter(([, v]) => v.length); return sc.length ? sc.map(([k, v]) => `<p class="small"><b>${esc(k)}:</b> ${v.map(esc).join(' · ')}</p>`).join('') : ''; };
  const relBlock = r => `<div><span class="lbl">Experience</span>${r.exps.length ? r.exps.map(x => `<a class="chip t" href="#/experience?open=${x.id}">${esc(x.role)} · ${esc(x.company)}</a>`).join('') : '<span class="mut small">Not linked</span>'}</div>
      <div><span class="lbl">Skills</span>${chips([...new Set([...(r.p.skills || []), ...r.techs.map(t => t.cat)])])}</div>
      <div><span class="lbl">Certifications</span>${r.certs.length ? r.certs.slice(0, 4).map(c => `<a class="chip t" href="#/certifications?q=${enc(c.name)}">${esc(c.name.length > 42 ? c.name.slice(0, 40) + '…' : c.name)}</a>`).join('') + (r.certs.length > 4 ? `<span class="chip">+${r.certs.length - 4} more</span>` : '') : '<span class="mut small">None linked</span>'}</div>`;
  function xrow(r) {
    const p = r.p, ev = evEntries(p), L = (t, h, first) => h ? `<span class="lbl ${first ? '' : 'u-mt12'}">${t}</span>${h}` : '';
    let n = 0; const sec = (t, h) => { if (!h) return ''; return L(t, h, !n++); };
    return `<div class="xin"><div class="xgrid2"><div class="xleft">
        ${sec('Project overview', `<p>${esc(p.oneLine)}</p>`)}${sec('Objective', bl(p.objective))}${sec('Business / technical need', bl(p.need))}${sec('Project role', (p.projectRole ? `<p><b>${esc(p.projectRole)}</b></p>` : '') + bl(p.myRole) + ((p.responsibilities || []).length ? `<span class="lbl u-mt8">Responsibilities, as recorded</span>${bl(p.responsibilities)}` : ''))}${sec('Deliverables', bl(p.deliverables))}
        ${sec('Technical scope', scopeHtml(p))}${p.architecture && p.architecture.length ? sec('System / architecture', `<div class="flow">${p.architecture.map((a, i) => `<div class="n">${esc(a)}</div>${i < p.architecture.length - 1 ? '<span class="a">→</span>' : ''}`).join('')}</div><p class="mut small u-mt6">Components as defined by the owner; diagram pending.</p>`) : ''}
        ${detailsHtml(p)}${sec('Solution / implementation', bl(p.solution))}${p.pm ? sec('Project management', pmFlow(p.pm)) : ''}${sec('Outcome', bl(p.outcome, 'ok'))}
        ${p.status === 'draft' ? '<p class="note u-mt12">Documentation in preparation: photos, drawings, PLC and HMI screenshots and commissioning records will be added.</p>' : ''}
      </div><div class="xright">
        <span class="lbl">Project information</span>${metaDl(r)}
        <span class="lbl u-mt12">Technologies</span>${techGroups(r).map(([g, h]) => `<p class="tg2"><b>${esc(g)}</b>${h}</p>`).join('') || chips(p.tech, 't')}
        ${relBlock(r)}
        ${ev.length ? `<span class="lbl u-mt12">Documents / evidence</span>${ev.map(([k, v]) => `<span class="chip">${esc(EVL[k] || k)} (${v.length})</span>`).join('')}` : ''}
      </div></div><p class="xgo"><a class="btn primary sm" href="#/projects/${p.id}">Open full project →</a></p></div>`;
  }
  const uniq = a => [...new Set(a.filter(Boolean))];
  function orgProfile(name) {
    const rs = registry().filter(r => r.p.company === name), ex = uniq(rs.flatMap(r => r.p.experience || [])).map(id => EXP.find(x => x.id === id)).filter(Boolean).concat(EXP.filter(x => x.company === name)).filter((x, i, a) => a.indexOf(x) === i), ys = uniq(rs.flatMap(r => pYears(r.p))).sort();
    const tl = [...new Map(rs.flatMap(r => r.techs).map(t => [t.id, t])).values()];
    return pn('Organization profile — ' + name, `<div class="grid g3"><div><span class="lbl">Projects</span><b class="mono big22">${rs.length}</b></div><div><span class="lbl">Years</span>${ys.length ? ys[0] + '–' + (ys[ys.length - 1] === NOW && rs.some(r => !r.p.end) ? 'Present' : ys[ys.length - 1]) : '—'}</div><div><span class="lbl">Industries</span>${chips(uniq(rs.flatMap(r => r.p.industry || []))) || '—'}</div></div>
      <div class="grid g3 u-mt12"><div><span class="lbl">Project types</span>${chips(uniq(rs.map(r => r.p.type)))}</div><div><span class="lbl">Roles</span>${chips(uniq([...rs.map(r => r.p.careerPosition), ...rs.map(r => r.p.projectRole)].filter(Boolean)))}</div><div><span class="lbl">Experience</span>${ex.map(x => `<a class="chip t" href="#/experience?open=${x.id}">${esc(x.role)} · ${period(x)}</a>`).join('') || '—'}</div></div>
      <div class="u-mt12"><span class="lbl">Technologies</span>${tl.map(techLink).join('') || '<span class="mut small">—</span>'}</div>`);
  }
  function techIntel(t) {
    const rs = registry().filter(r => r.techs.some(x => x.id === t.id)), ys = uniq(rs.flatMap(r => pYears(r.p))).sort(), ex = rolesOf(t);
    return pn(t.n + ' — used across ' + rs.length + ' project' + (rs.length === 1 ? '' : 's'), `<p>${lv(t.lvl)} <span class="mut small">${esc(t.ev)}</span></p><div class="grid g3 u-mt12"><div><span class="lbl">Organizations</span>${chips(uniq(rs.map(r => r.p.company))) || '—'}</div><div><span class="lbl">Years</span>${ys.length ? ys[0] + '–' + ys[ys.length - 1] : '—'}</div><div><span class="lbl">Project types</span>${chips(uniq(rs.map(r => r.p.type)))}</div></div>
      <div class="u-mt12"><span class="lbl">Related experience</span>${ex.map(x => `<a class="chip t" href="#/experience?open=${x.id}">${esc(x.role)} · ${period(x)}</a>`).join('') || '—'} <a class="chip t" href="#/technology/${t.id}">Open technology record</a></div>`);
  }
  const FILT = [
    ['company', 'Organization', r => r.p.company], ['type', 'Project type', r => r.p.type], ['cat', 'Category', r => r.p.cat, TAXONOMY], ['industry', 'Industry', r => r.p.industry || []],
    ['prole', 'Project role', r => r.p.projectRole], ['role', 'Career position', r => r.p.careerPosition], ['exp', 'Experience (employer)', r => r.exps.map(x => x.id)], ['tech', 'Technology', null], ['location', 'Location', r => r.p.location], ['source', 'Source', r => (r.p.sources || []).map(s => s.type)]
  ];
  const SORTS = [['date-desc', 'Newest first'], ['date-asc', 'Oldest first'], ['name-asc', 'Project name'], ['company-asc', 'Organization'], ['type-asc', 'Project type'], ['cat-asc', 'Category'], ['prole-asc', 'Project role']];
  const sortVal = (r, k) => { const p = r.p; switch (k) { case 'name': return p.title.toLowerCase(); case 'company': return (p.company || '~').toLowerCase(); case 'type': return (p.type || '~').toLowerCase(); case 'cat': return (p.cat || '~').toLowerCase(); case 'tech': return (p.tech[0] || '~').toLowerCase(); case 'prole': return (p.projectRole || '~').toLowerCase(); } };
  function vProjects(q) {
    const R = registry();
    const PS = { q: '', yfrom: '', yto: '', sort: 'date', dir: 'desc', page: 1, rows: 20, view: 'table', open: new Set() }; FILT.forEach(f => PS[f[0]] = '');
    ['q', 'yfrom', 'yto', 'sort', 'dir', 'view', ...FILT.map(f => f[0])].forEach(k => { if (q.get(k)) PS[k] = q.get(k); });
    if (q.get('year')) PS.yfrom = PS.yto = q.get('year');
    if ([20, 50, 100].includes(+q.get('rows'))) PS.rows = +q.get('rows');
    (q.get('open') || '').split(',').filter(Boolean).forEach(i => PS.open.add(i));
    const featured = PROJ.filter(p => p.featured && p.kind !== 'summary').sort((a, b) => projRank(a) - projRank(b)).slice(0, 6);
    const years = uniq(R.flatMap(r => pYears(r.p))).sort((a, b) => b - a);
    const verified = R.filter(r => r.p.verification === 'verified').length, itN = R.filter(r => !ENG_CATS.includes(r.p.cat)).length, engN = R.length - itN;
    const orgs = uniq(R.map(r => r.p.company)), ptypes = uniq(R.map(r => r.p.type)), inds = uniq(R.flatMap(r => r.p.industry || [])), techIds = uniq(R.flatMap(r => r.techs.map(t => t.id)));
    const catCounts = TAXONOMY.map(c => [c, R.filter(r => r.p.cat === c).length]).filter(([, n]) => n);
    const opts = f => {
      const [key, , get, order] = f, m = new Map();
      if (key === 'tech') R.forEach(r => r.techs.forEach(t => m.set(t.id, [t.n, (m.get(t.id) || [0, 0])[1] + 1])));
      else R.forEach(r => [].concat(get(r)).filter(Boolean).forEach(v => m.set(v, [key === 'exp' ? (EXP.find(x => x.id === v) || {}).role + ' · ' + (EXP.find(x => x.id === v) || {}).company : v, (m.get(v) || [0, 0])[1] + 1])));
      return [...m.entries()].map(([v, [l, n]]) => [v, l, n]).sort((a, b) => order ? order.indexOf(a[0]) - order.indexOf(b[0]) : a[1].localeCompare(b[1]));
    };
    const OPT = Object.fromEntries(FILT.map(f => [f[0], opts(f)]));
    const selHtml = f => { const o = OPT[f[0]]; return `<select data-f="${f[0]}" aria-label="${esc(f[1])}" ${o.length ? '' : 'disabled'}><option value="">${esc(o.length ? 'All — ' + f[1] : f[1] + ' (none documented)')}</option>${o.map(([v, l, n]) => `<option value="${esc(v)}">${esc(l)} (${n})</option>`).join('')}</select>`; };
    const yrSel = (id, label) => `<select data-f="${id}" aria-label="${label}"><option value="">${label}</option>${years.map(y => `<option>${y}</option>`).join('')}</select>`;
    const th = (k, l) => `<th data-col="${k}" aria-sort="none"><button class="sort" data-sort="${k}">${l}<span class="si"></span></button></th>`;
    const yMin = years.length ? years[years.length - 1] : '', yMaxTxt = R.some(r => r.p.start && !r.p.end) ? 'Present' : (years.length ? years[0] : '');
    return { title: 'Projects', html: `
      <div class="phead"><div><p class="crumb"><a href="#/dashboard">Dashboard</a> / Projects</p><h1>Projects</h1><p class="subt"><b>Professional Project Portfolio</b><br><span class="mono">Enterprise Technology • Infrastructure • Engineering • Automation</span></p><p>Explore the documented projects, technical implementations, infrastructure deployments and engineering work across the career.</p></div><span class="pcount mono" id="pcount"></span></div>
      <div class="grid g-main mb">
        ${pn('Executive project summary', `<p class="exs">${R.length} project record${R.length === 1 ? '' : 's'} across ${ptypes.length} project type${ptypes.length === 1 ? '' : 's'} and ${orgs.length} organization${orgs.length === 1 ? '' : 's'}${yMin ? ', ' + yMin + '–' + yMaxTxt : ''}.</p>
          <div class="grid g4 u-gap12 u-mt12"><div class="kpi"><b>${R.length}</b><span>Total project records</span></div><div class="kpi"><b>${itN}</b><span>IT / technology</span></div><div class="kpi"><b>${engN}</b><span>Engineering</span></div><div class="kpi"><b>${orgs.length}</b><span>Organizations</span></div></div>
          <div class="grid g4 u-gap12 u-mt12"><div class="kpi sm"><b>${ptypes.length}</b><span>Project types</span></div><div class="kpi sm"><b>${inds.length}</b><span>Industries</span></div><div class="kpi sm"><b>${techIds.length}</b><span>Technologies</span></div><div class="kpi sm"><b>${years.length}</b><span>Years active</span></div></div>
          <div class="u-mt12"><span class="lbl">By category · select to filter</span>${catCounts.map(([c, n]) => `<button class="chip t qc" data-quick="cat" data-v="${esc(c)}">${esc(c)} · ${n}</button>`).join('')}</div>`)}
        ${pn('Source-documented career metrics', `<p class="mut small">Figures reported in the CV. They are career claims and are <b>not</b> the number of project records in the registry.</p><div class="grid g2 u-gap12 u-mt12"><div class="kpi"><b>${P.enterpriseProjects}</b><span>Enterprise IT projects reported in CV</span></div><div class="kpi"><b>${P.saudiProjects}</b><span>IT infrastructure projects reported in CV (Saudi Arabia)</span></div></div>
          <p class="u-mt12"><span class="lbl">Project registry</span><b class="mono big22">${R.length}</b> <span class="mut small">unique project records (${verified} verified, ${R.length - verified} in preparation)</span></p>`)}
      </div>
      <div class="fstrip mb"><span class="lbl">Featured projects · ${featured.length} of ${R.length}</span><div class="grid g4 u-gap12">${featured.map(p => `<a class="pmini" href="#/projects/${p.id}"><span class="cat">${esc(p.cat)}</span><b>${esc(p.title)}</b><span class="mono small mut">${esc(pDate(p))}</span></a>`).join('')}</div></div>
      <div class="pn mb"><div class="pb"><div class="rtool"><input id="rq" type="search" placeholder="Search projects, organizations, technologies…" aria-label="Search the project registry" maxlength="80" value="${esc(PS.q)}">
        <div class="rsel">${yrSel('yfrom', 'From year')}${yrSel('yto', 'To year')}${FILT.map(selHtml).join('')}<select id="rsort" aria-label="Sort order">${SORTS.map(([v, l]) => `<option value="${v}">Sort: ${l}</option>`).join('')}</select></div>
        <div id="rchips" class="chipbar"></div>
        <div class="rbar"><span class="mono small" id="rinfo" aria-live="polite"></span><span class="rbtns"><span class="seg" role="group" aria-label="View"><button data-view="table" aria-pressed="true">Table</button><button data-view="timeline" aria-pressed="false">Timeline</button></span> <button class="btn sm" id="rclear">Clear all</button></span></div></div></div></div>
      <div id="rctx"></div>
      <section class="pn" id="tblwrap"><div class="tw"><table class="dt reg" id="reg"><thead><tr><th class="c-tog"><span class="sr">Expand</span></th>${th('date', 'Date')}${th('name', 'Project')}${th('type', 'Type')}${th('company', 'Organization')}${th('cat', 'Category')}${th('tech', 'Technology')}</tr></thead><tbody id="rb"></tbody></table></div>
      <div class="pager"><label class="small mut">Rows per page <select id="rrows" aria-label="Rows per page">${[20, 50, 100].map(n => `<option ${n === PS.rows ? 'selected' : ''}>${n}</option>`).join('')}</select></label><span class="mono small" id="rrange"></span><span><button class="btn sm" id="rprev">‹ Prev</button> <button class="btn sm" id="rnext">Next ›</button></span></div></section>
      <section class="pn" id="tlwrap" hidden><div class="pb" id="tl"></div></section>`,
      after() {
        const rb = $('#rb');
        FILT.forEach(f => { const s = $(`[data-f="${f[0]}"]`); if (PS[f[0]]) s.value = PS[f[0]]; if (s.value !== PS[f[0]]) PS[f[0]] = ''; });
        ['yfrom', 'yto'].forEach(k => { const s = $(`[data-f="${k}"]`); if (PS[k]) s.value = PS[k]; if (s.value !== PS[k]) PS[k] = ''; });
        const setSortSel = () => { const v = PS.sort + '-' + PS.dir, s = $('#rsort'); s.value = [...s.options].some(o => o.value === v) ? v : ''; }; setSortSel();
        const toks = () => PS.q.toLowerCase().split(/\s+/).filter(Boolean);
        const inYears = p => { if (!PS.yfrom && !PS.yto) return true; const ys = pYears(p); if (!ys.length) return false; const a = +PS.yfrom || 0, b = +PS.yto || 9999; return ys.some(y => y >= a && y <= b); };
        const filtered = () => {
          const tk = toks();
          const list = R.filter(r => { const p = r.p; return inYears(p) && (!PS.company || p.company === PS.company) && (!PS.type || p.type === PS.type) && (!PS.cat || p.cat === PS.cat) && (!PS.industry || (p.industry || []).includes(PS.industry)) && (!PS.prole || p.projectRole === PS.prole) && (!PS.role || p.careerPosition === PS.role) && (!PS.exp || r.exps.some(x => x.id === PS.exp)) && (!PS.tech || r.techs.some(t => t.id === PS.tech)) && (!PS.location || p.location === PS.location) && (!PS.source || (p.sources || []).some(s => s.type === PS.source)) && tk.every(t => r.blob.includes(t)); });
          const d = PS.dir === 'asc' ? 1 : -1;
          return list.sort((a, b) => { if (PS.sort === 'date') { const x = dkey(a.p), y = dkey(b.p); if (x === null || y === null) return x === y ? a.p.title.localeCompare(b.p.title) : (x === null ? 1 : -1); return (x - y) * d || a.p.title.localeCompare(b.p.title); } const x = sortVal(a, PS.sort), y = sortVal(b, PS.sort); return (x < y ? -1 : x > y ? 1 : 0) * d || a.p.title.localeCompare(b.p.title); });
        };
        const chipDefs = () => { const c = []; if (PS.q) c.push(['q', 'Search: ' + PS.q]); if (PS.yfrom || PS.yto) c.push(['yrs', PS.yfrom && PS.yto ? (PS.yfrom === PS.yto ? PS.yfrom : PS.yfrom + '–' + PS.yto) : PS.yfrom ? 'From ' + PS.yfrom : 'To ' + PS.yto]); FILT.forEach(f => PS[f[0]] && c.push([f[0], f[1] + ': ' + (f[0] === 'tech' ? techById(PS.tech).n : f[0] === 'exp' ? ((EXP.find(x => x.id === PS.exp) || {}).role || PS.exp) : PS[f[0]])])); return c; };
        const sync = () => {
          const qs = new URLSearchParams(); ['q', 'yfrom', 'yto', ...FILT.map(f => f[0])].forEach(k => PS[k] && qs.set(k, PS[k]));
          if (PS.sort !== 'date' || PS.dir !== 'desc') { qs.set('sort', PS.sort); qs.set('dir', PS.dir); } if (PS.rows !== 20) qs.set('rows', PS.rows); if (PS.view !== 'table') qs.set('view', PS.view);
          history.replaceState(null, '', '#/projects' + (qs.toString() ? '?' + qs : ''));
        };
        const ctx = () => { let h = ''; if (PS.company) h += orgProfile(PS.company); if (PS.tech) h += techIntel(techById(PS.tech)); if (PS.prole) { const n = R.filter(r => r.p.projectRole === PS.prole).length; h += pn('Project role — ' + PS.prole, `<p><b class="mono big22">${n}</b> project${n === 1 ? '' : 's'} performed in this role.</p>`); } $('#rctx').innerHTML = h ? `<div class="mb grid">${h}</div>` : ''; };
        const timeline = list => { const g = new Map(); list.forEach(r => { const y = r.p.start || 'Undated'; if (!g.has(y)) g.set(y, []); g.get(y).push(r); }); const keys = [...g.keys()].sort((a, b) => a === 'Undated' ? 1 : b === 'Undated' ? -1 : b - a);
          return keys.map(k => `<div class="tly"><h3 class="mono">${k}</h3><ul>${g.get(k).map(r => `<li><a href="#/projects/${r.p.id}"><b>${esc(r.p.title)}</b></a><span class="mut small"> ${esc([r.p.type, r.p.company, pDate(r.p) !== String(k) ? pDate(r.p) : ''].filter(Boolean).join(' · '))}</span></li>`).join('')}</ul></div>`).join('') || '<p class="mut">No projects match.</p>'; };
        const draw = () => {
          const list = filtered(), total = R.length, pages = Math.max(1, Math.ceil(list.length / PS.rows)); PS.page = Math.min(PS.page, pages);
          const a = (PS.page - 1) * PS.rows, rows = list.slice(a, a + PS.rows), cd = chipDefs();
          $('#pcount').textContent = cd.length ? list.length + ' MATCHING PROJECTS' : total + ' PROJECTS';
          $('#rinfo').textContent = `Showing ${cd.length ? list.length : (list.length ? (a + 1) + '–' + (a + rows.length) : 0)} of ${total} projects`;
          $('#rchips').innerHTML = cd.length ? `<span class="lbl">Filtered projects</span>${cd.map(([k, l]) => `<button class="chip t xc" data-rm="${k}">${esc(l)} ×</button>`).join('')}` : '';
          $('#rrange').textContent = list.length ? `Showing ${a + 1}–${a + rows.length} of ${list.length} projects · page ${PS.page}/${pages}` : 'No projects';
          $('#rprev').disabled = PS.page <= 1; $('#rnext').disabled = PS.page >= pages;
          $$('[data-view]').forEach(b => b.setAttribute('aria-pressed', b.dataset.view === PS.view)); $('#tblwrap').hidden = PS.view !== 'table'; $('#tlwrap').hidden = PS.view !== 'timeline';
          $$('th[data-col]').forEach(h => { const s = h.dataset.col === PS.sort; h.setAttribute('aria-sort', s ? (PS.dir === 'asc' ? 'ascending' : 'descending') : 'none'); $('.si', h).textContent = s ? (PS.dir === 'asc' ? ' ▲' : ' ▼') : ''; });
          rb.innerHTML = rows.map(r => { const p = r.p, o = PS.open.has(p.id);
            return `<tr class="row ${o ? 'open' : ''}" data-id="${p.id}"><td class="c-tog"><button class="tgb" data-open="${p.id}" aria-expanded="${o}" aria-controls="x-${p.id}" aria-label="${o ? 'Collapse' : 'Expand'} ${esc(p.title)}"><span class="tg">${o ? '−' : '+'}</span><span class="tgl">${o ? 'Hide details' : 'View details'}</span></button></td>
            <td class="c-date mono">${esc(pDate(p))}</td><td class="c-name"><b>${esc(p.title)}</b>${p.status === 'draft' ? ' <span class="lv draft">In preparation</span>' : ''}</td><td class="c-type">${esc(p.type || '—')}</td><td class="c-co">${esc(p.company || '—')}</td><td class="c-cat">${esc(p.cat || '—')}</td><td class="c-tech small">${p.tech.slice(0, 4).map(esc).join(' • ')}</td></tr>
            ${o ? `<tr class="xrow" id="x-${p.id}"><td colspan="7">${xrow(r)}</td></tr>` : ''}`; }).join('') || '<tr><td colspan="7" class="mut u-p14">No projects match these filters. <button class="btn sm" data-act="clearf">Clear all</button></td></tr>';
          $('#tl').innerHTML = timeline(list); ctx(); sync();
        };
        const reset = () => { PS.page = 1; draw(); };
        const clear = () => { FILT.forEach(f => { PS[f[0]] = ''; $(`[data-f="${f[0]}"]`).value = ''; }); ['yfrom', 'yto'].forEach(k => { PS[k] = ''; $(`[data-f="${k}"]`).value = ''; }); PS.q = ''; $('#rq').value = ''; reset(); };
        $('#rq').addEventListener('input', e => { PS.q = e.target.value; reset(); });
        $$('[data-f]').forEach(s => s.addEventListener('change', () => { PS[s.dataset.f] = s.value; reset(); }));
        $('#rsort').addEventListener('change', e => { const [k, d] = e.target.value.split('-'); if (k) { PS.sort = k; PS.dir = d; reset(); } });
        $('#rclear').addEventListener('click', clear);
        $('#rchips').addEventListener('click', e => { const b = e.target.closest('[data-rm]'); if (!b) return; const k = b.dataset.rm; if (k === 'q') { PS.q = ''; $('#rq').value = ''; } else if (k === 'yrs') { PS.yfrom = PS.yto = ''; $('[data-f="yfrom"]').value = $('[data-f="yto"]').value = ''; } else { PS[k] = ''; $(`[data-f="${k}"]`).value = ''; } reset(); });
        document.querySelector('.qc') && $$('.qc').forEach(b => b.addEventListener('click', () => { const k = b.dataset.quick; PS[k] = b.dataset.v; $(`[data-f="${k}"]`).value = b.dataset.v; reset(); $('#rq').scrollIntoView({ behavior: 'smooth', block: 'center' }); }));
        $$('[data-view]').forEach(b => b.addEventListener('click', () => { PS.view = b.dataset.view; draw(); }));
        $('#rrows').addEventListener('change', e => { PS.rows = +e.target.value; reset(); });
        $('#rprev').addEventListener('click', () => { PS.page--; draw(); }); $('#rnext').addEventListener('click', () => { PS.page++; draw(); });
        $('#reg thead').addEventListener('click', e => { const b = e.target.closest('[data-sort]'); if (!b) return; const k = b.dataset.sort; if (PS.sort === k) PS.dir = PS.dir === 'asc' ? 'desc' : 'asc'; else { PS.sort = k; PS.dir = k === 'date' ? 'desc' : 'asc'; } setSortSel(); reset(); });
        rb.addEventListener('click', e => {
          if (e.target.closest('a,.btn')) { if (e.target.closest('[data-act="clearf"]')) clear(); return; }
          const row = e.target.closest('tr.row'); if (!row) return; const id = row.dataset.id; PS.open.has(id) ? PS.open.delete(id) : PS.open.add(id); draw();
          const nb = $(`[data-open="${id}"]`); if (nb) nb.focus({ preventScroll: true });
        });
        draw();
      } };
  }

  function vProject(id) {
    const r = regById(id); if (!r) return vNotFound();
    const p = r.p, ev = evEntries(p), S = [], ord = registry().slice().sort((a, b) => (dkey(b.p) === null) - (dkey(a.p) === null) || (dkey(b.p) || 0) - (dkey(a.p) || 0) || a.p.title.localeCompare(b.p.title)), ix = ord.indexOf(r);
    const ident = [p.start ? (p.dateLabel || pDate(p)) : '', p.company, p.projectRole || '', p.location].filter(Boolean).map(esc).join(' · ');
    S.push(['Overview', `<p class="big2">${esc(p.oneLine)}</p><div class="u-mt12">${metaDl(r)}</div>`]);
    if (p.objective.length || (p.need || []).length) S.push(['Objective', (p.objective.length ? bl(p.objective) : '') + ((p.need || []).length ? `<span class="lbl u-mt12">Business / technical need</span>${bl(p.need)}` : '') + (p.challenge.length ? `<span class="lbl u-mt12">Challenge</span>${bl(p.challenge)}` : '')]);
    if (scopeHtml(p) || (p.disciplines || []).length) S.push(['Scope', (scopeHtml(p) ? `${p.status === 'draft' ? '<p class="mut small u-mb8">Scope as defined by the owner. Detailed documentation is pending.</p>' : ''}<div class="scope">${Object.entries(p.scope).filter(([, v]) => v.length).map(([k, v]) => `<div><span class="lbl">${esc(k)}</span>${bl(v)}</div>`).join('')}</div>` : '') + ((p.disciplines || []).length ? `<div class="u-mt12"><span class="lbl">Disciplines</span>${chips(p.disciplines)}</div>` : '')]);
    S.push(['Role', `<dl class="kv kv-s"><dt>Career position</dt><dd>${esc(p.careerPosition || 'Not documented')}</dd><dt>Project role</dt><dd>${esc(p.projectRole || 'Not documented')}</dd></dl>${p.myRole.length ? `<span class="lbl u-mt12">Responsibilities on this project</span>${bl(p.myRole)}` : ''}${(p.responsibilities || []).length ? `<span class="lbl u-mt12">Responsibilities, as recorded</span>${bl(p.responsibilities)}` : ''}`]);
    if ((p.deliverables || []).length) S.push(['Deliverables', bl(p.deliverables)]);
    if (p.pm) S.push(['Project management', pmFlow(p.pm)]);
    const tech = (p.architecture && p.architecture.length ? `<span class="lbl">System / architecture</span><div class="flow">${p.architecture.map((a, i) => `<div class="n">${esc(a)}</div>${i < p.architecture.length - 1 ? '<span class="a">→</span>' : ''}`).join('')}</div><p class="mut small u-mt6 u-mb8">Components as defined by the owner; diagram pending.</p>` : '') + detailsHtml(p) + (p.solution.length ? `<span class="lbl u-mt12">Solution / implementation</span>${bl(p.solution)}` : '');
    if (tech) S.push(['Technical details', tech]);
    S.push(['Technologies', techGroups(r).map(([g, h]) => `<p class="tg2"><b>${esc(g)}</b>${h}</p>`).join('') || chips(p.tech, 't')]);
    if (p.outcome.length) S.push(['Outcome', bl(p.outcome, 'ok')]);
    if (ev.length) S.push(['Evidence', ev.map(([k, v]) => `<span class="lbl">${EVL[k] || esc(k)}</span><div class="gal">${v.map(g => fileUrl(g.src) ? `<figure><img src="${fileUrl(g.src)}" alt="${esc(g.caption || '')}" loading="lazy"><figcaption>${esc(g.caption || '')}</figcaption></figure>` : '').join('')}</div>`).join('')]);
    else if (p.status === 'draft') S.push(['Evidence', '<p class="note">In preparation: photos, drawings, PLC and HMI screenshots, architecture diagrams and commissioning records will be added.</p>']);
    const sameOrg = p.company ? ord.filter(o => o.p.company === p.company && o.p.id !== p.id) : [], sameCat = ord.filter(o => o.p.cat === p.cat && o.p.id !== p.id), simTech = ord.filter(o => o.p.id !== p.id && o.techs.some(t => r.techs.some(x => x.id === t.id)));
    const link = (lbl, list, href) => `<a class="rel" href="${href}"><b class="mono">${list.length}</b><span>${lbl}</span></a>`;
    S.push(['Related', `<div class="grid g3 u-gap12">${relBlock(r)}</div>
      <div class="grid g3 u-gap12 u-mt16">${link('Projects with similar technology', simTech, '#/projects?tech=' + (r.techs[0] ? r.techs[0].id : ''))}${link('Projects for the same organization', sameOrg, '#/projects?company=' + enc(p.company || ''))}${link('Projects in the same category', sameCat, '#/projects?cat=' + enc(p.cat))}</div>
      <div class="pnav u-mt16">${ix > 0 ? `<a href="#/projects/${ord[ix - 1].p.id}">← ${esc(ord[ix - 1].p.title)}</a>` : '<span></span>'}${ix < ord.length - 1 ? `<a href="#/projects/${ord[ix + 1].p.id}">${esc(ord[ix + 1].p.title)} →</a>` : ''}</div>`]);
    S.push(['Source', `<p><span class="lv ${p.verification === 'verified' ? 'Delivered' : 'draft'}">${p.verification === 'verified' ? 'Documented project' : 'Record in preparation'}</span> <span class="mut">Source: ${esc([...new Set((p.sources || []).map(s => s.type))].join(' + '))}</span></p>${p.basis ? `<span class="lbl u-mt12">Verified basis</span>${bl(p.basis)}` : ''}`]);
    return { title: p.title, html: `<div class="phead"><div><p class="crumb"><a href="#/dashboard">Dashboard</a> / <a href="#/projects">Projects</a> / ${esc(p.title)}</p><span class="lbl">Project</span><h1>${esc(p.title)}</h1>${ident ? `<p class="mono small u-mt6">${ident}</p>` : ''}</div><div>${lv(p.status === 'draft' ? 'draft' : 'Delivered')}</div></div>
    <div class="pdet"><nav class="outline" aria-label="Project sections">${S.map(([t], i) => `<a href="#/projects/${id}" data-jump="s${i}">${String(i + 1).padStart(2, '0')} ${esc(t)}</a>`).join('')}</nav>
    <div class="grid">${S.map(([t, b], i) => `<section class="pn psec" id="s${i}"><h2><span>${String(i + 1).padStart(2, '0')}</span>${esc(t)}</h2><div class="pb">${b}</div></section>`).join('')}</div></div>` };
  }

  const CAPS = [
    { k: 'Engineering', s: 'Compressor and refrigeration-cycle technology, Danfoss Turbocor systems, power systems and equipment integration.', b: ['Refrigeration cycle and compressor fundamentals', 'Danfoss Turbocor TT & TG: operation, cooling, interface and safety', 'Power backup design: 6 kVA UPS, 7 hours of runtime'], e: 'Danfoss Learning, 14 certificates (2025) · CV' },
    { k: 'Automation', s: 'PLC programming (Siemens) and integration of turnstiles, scales and handheld terminals with enterprise systems.', b: ['Siemens PLC programming and configuration (introductory)', 'Device-to-ERP integration: ZKT turnstiles, DIGI SM100 scales', 'Windows CE handheld applications'], e: 'RealPars, 2 certificates (Oct 2025) · CV' },
    { k: 'Information technology', s: 'Enterprise networking, secure multi-site connectivity, Windows Server, Active Directory, firewalls and IP telephony.', b: ['IKEv2 IPsec connectivity between branches', 'Windows Server, Active Directory, redundancy clusters', 'Cisco and MikroTik networking, IP telephony, IPTV'], e: 'Cisco Networking Academy CCNA (2026) · 14 years of CV experience' },
    { k: 'Data and software', s: 'Oracle and MySQL databases, PL/SQL, C# and ASP.NET applications, and API-based integration.', b: ['Oracle 10g, PL/SQL, Forms and Reports', 'Oracle ⇄ MySQL synchronisation through the WooCommerce API', 'C# and ASP.NET applications'], e: 'CV: IT Head, The Big Buy (2021 – present)' },
    { k: 'Systems integration', s: 'Connecting equipment, controls, networks, software and data into working business systems.', b: ['ERP, e-commerce and device integration', 'Front-desk to booking-channel API integration for hotels', 'Stakeholder reporting on scope, resources and budget'], e: 'CV: IT Head, IT Manager' }
  ];
  function vExpertise(q) {
    const t = q.get('t') || '0';
    const ch = (W.SKILL_CHAINS || []).map(c => `<tr><td><b>${esc(c.skill)}</b></td><td>${esc(c.tech)}</td><td>${esc(c.project)}</td><td class="mut">${esc(c.evidence)}</td></tr>`).join('');
    return { title: 'Expertise', html: head('Expertise', 'Five capability areas, each with the work, training or certificates behind it.', 'Expertise') +
      `<div class="pn mb"><div class="tabs" role="tablist">${CAPS.map((c, i) => `<button role="tab" data-tab="${i}" aria-selected="${String(i) === t}">${esc(c.k)}</button>`).join('')}</div><div class="pb" id="capbody"></div></div>` +
      pn('Evidence map — skill → technology → project → evidence', `<div class="tw"><table class="dt"><thead><tr><th>Skill</th><th>Technology</th><th>Project</th><th>Evidence</th></tr></thead><tbody>${ch}</tbody></table></div>`, '', true) +
      `<div class="u-mt14">${pn('Skills listed on the CV', Object.entries(W.SKILLS).map(([g, a]) => `<span class="lbl">${esc(g)}</span><div class="u-mb10">${chips(a)}</div>`).join(''))}</div>`,
      after() { const show = i => { const c = CAPS[i]; $$('[data-tab]').forEach(b => b.setAttribute('aria-selected', b.dataset.tab == i)); $('#capbody').innerHTML = `<div class="grid g2"><div><h3 class="u-h18">${esc(c.k)}</h3><p class="mut">${esc(c.s)}</p><p class="small u-mt14"><span class="lbl">Evidence</span>${esc(c.e)}</p></div><div>${bl(c.b)}</div></div>`; }; $$('[data-tab]').forEach(b => b.addEventListener('click', () => show(+b.dataset.tab))); show(+t); } };
  }

  function archView(nodes, id) {
    return `<div class="grid g2"><div class="arch" id="${id}">${nodes.map((n, i) => `<button class="nd ${n.l ? '' : 'ref'}" data-node="${i}" aria-pressed="false"><span>${esc(n.k)}</span>${n.l ? lv(n.l) : '<span class="dim small">reference stage</span>'}</button>${i < nodes.length - 1 ? '<span class="ar">↓</span>' : ''}`).join('')}</div><div class="detail" id="${id}-d"><span class="lbl">Stage detail</span><p class="mut">Select a stage to see the evidence held for it.</p></div></div>`;
  }
  function archWire(nodes, id) {
    const box = $('#' + id); if (!box) return;
    box.addEventListener('click', e => { const b = e.target.closest('[data-node]'); if (!b) return; $$('[data-node]', box).forEach(x => x.setAttribute('aria-pressed', x === b)); const n = nodes[+b.dataset.node]; $('#' + id + '-d').innerHTML = `<span class="lbl">${esc(n.k)}</span><p>${esc(n.d)}</p>${n.l ? `<p class="u-mt8">${lv(n.l)}</p>` : '<p class="mut small u-mt8">No project evidence published for this stage.</p>'}`; });
  }
  const HV = [
    { k: 'Mechanical', d: 'Equipment layer of the chiller system.' },
    { k: 'Refrigeration', l: 'trained', d: 'Refrigeration cycle and compressor fundamentals: Danfoss Learning, Basic Compressors (Mar 2025).' },
    { k: 'Compressor', l: 'trained', d: 'Danfoss Turbocor TT & TG: operation, cooling, interface and safety (Mar to Aug 2025). Centrifugal compression principles.' },
    { k: 'Control system', l: 'trained', d: 'Turbocor compressor interface and operation modules; service tools SMT and TurboTool®.' },
    { k: 'PLC', l: 'trained', d: 'RealPars: PLC Programming Made Easy (Level 1) and Siemens PLC Basics (12 Oct 2025).' },
    { k: 'HMI / SCADA', d: 'Reference stage of the architecture.' },
    { k: 'IoT', d: 'Reference stage of the architecture.' },
    { k: 'Data', l: 'project', d: 'Enterprise data integration in IT roles: Oracle, MySQL and API-based synchronisation.' },
    { k: 'Analytics', d: 'Reference stage of the architecture.' }
  ];
  function certTable(list) {
    return `<div class="tw"><table class="dt"><thead><tr><th>Module / credential</th><th>Issuer</th><th>Date</th><th>Category</th><th></th></tr></thead><tbody>${list.map(c => `<tr><td><b>${esc(c.name)}</b></td><td>${esc(c.issuer)}</td><td class="mono">${ym(c.date)}</td><td>${esc(c.category)}</td><td>${c.pdf ? `<button class="btn sm" data-pdf="${esc(fileUrl(c.pdf))}" data-title="${esc(c.name)}">View</button>` : ''}</td></tr>`).join('')}</tbody></table></div>`;
  }
  function vHvac() {
    const tr = CERT.filter(c => ['HVAC', 'Refrigeration', 'Mechanical', 'Safety'].includes(c.category)).sort((a, b) => a.date.localeCompare(b.date));
    const tiles = ['refrig', 'turbocor', 'smt'].map(techById);
    return { title: 'HVAC & Refrigeration', html: head('HVAC & refrigeration', 'Compressor and refrigeration-cycle technology, Danfoss Turbocor, and the control architecture around a chiller.', 'Engineering / HVAC') +
      `<div class="grid g3 mb">${tiles.map(t => pn(t.n, `<p class="mb u-mb8">${lv(t.lvl)}</p>${bl(t.cap)}<p class="mut small u-mt10">${esc(t.ev)}</p><p class="u-mt8"><a class="chip t" href="#/technology/${t.id}">Open in explorer</a></p>`)).join('')}</div>` +
      pn('Engineering integration chain', archView(HV, 'hv')) +
      `<div class="u-mt14">${pn('Project record', `${projLinks(['turbocor-retrofit', 'power-isp'])}`)}</div>` +
      `<div class="u-mt14">${pn('Training record — Danfoss Learning (' + tr.length + ' modules)', certTable(tr), '', true)}</div>`, after() { archWire(HV, 'hv'); } };
  }
  function vAutomation() {
    const pl = CERT.filter(c => c.category === 'PLC');
    return { title: 'Automation & PLC', html: head('Automation and PLC', 'PLC programming training and integration of field devices with enterprise systems.', 'Engineering / Automation') +
      pn('PLC training', certTable(pl), '', true) +
      `<div class="u-mt14">${pn('Device-to-enterprise integration projects', `${projLinks(['turnstile-hr', 'digi-scale', 'handheld-apps'])}`)}</div>` +
      `<div class="grid g2 u-mt14">${pn('Technologies', TECH.filter(t => t.cat === 'Automation').map(techLink).join('') + '<p class="mut small u-mt10">Select a technology for capabilities, usage and related records.</p>')}${pn('Integration pattern', `<div class="flow"><div class="n">Field device</div><span class="a">→</span><div class="n">Network</div><span class="a">→</span><div class="n">Application / API</div><span class="a">→</span><div class="n">Oracle database</div><span class="a">→</span><div class="n">ERP</div></div><p class="mut small u-mt12">Pattern used for the turnstile, scale and handheld projects (CV, IT Head role).</p>`)}</div>` };
  }
  function vIt() {
    const lc = levelCounts();
    return { title: 'Advanced IT View', html: head('Advanced IT view', 'Technology capabilities grouped by engineering domain. Open a domain for technologies, usage and evidence.', 'Technology / Advanced IT', `<a class="btn sm" href="#/technology">Technology explorer</a>`) +
      `<div class="grid g3 mb">${lc.map(([k, n]) => `<div class="kpi"><b>${n}</b><span>${lv(k)} ${k === 'project' ? 'used in delivered work' : k === 'trained' ? 'training or certificate' : 'listed on the CV'}</span></div>`).join('')}</div>` +
      W.IT_DOMAINS.map((d, i) => { const ts = d.ids.map(techById).filter(Boolean); return `<details class="acc" ${i < 2 ? 'open' : ''}><summary><span>${esc(d.k)} <span class="mut small">· ${ts.length} technologies</span></span></summary><div><div class="tw"><table class="dt"><thead><tr><th>Technology</th><th>Evidence</th><th>Level</th><th>Used in</th></tr></thead><tbody>${ts.map(t => `<tr><td><a href="#/technology/${t.id}"><b>${esc(t.n)}</b></a></td><td class="mut">${esc(t.ev)}</td><td>${lv(t.lvl)}</td><td class="mono small">${rolesOf(t).length} roles · ${projsOf(t).length} projects</td></tr>`).join('')}</tbody></table></div></div></details>`; }).join('') };
  }

  function vTechnology(id, q) {
    const catQ = (q.get('cat') || '').split(',').filter(Boolean), sel = techById(id) || null;
    return { title: sel ? sel.n : 'Technology explorer', html: head('Technology explorer', 'Select a technology to see where it was used, related projects, capabilities and related technologies.', 'Technology') + `
    <div class="tx"><section class="pn"><div class="ph"><h2>Technologies</h2><span class="mono small mut" id="tc"></span></div><div class="pb flush"><div class="u-p10"><input class="tsearch" id="tq" type="search" placeholder="Search technology…" aria-label="Search technologies"></div><div class="tlist" id="tl"></div></div></section><div id="td"></div></div>`,
      after() {
        const drawList = () => {
          const s = $('#tq').value.toLowerCase().trim(); let n = 0;
          $('#tl').innerHTML = CATS.map(c => { if (catQ.length && !catQ.includes(c)) return ''; const ts = TECH.filter(t => t.cat === c && (!s || (t.n + ' ' + t.m.join(' ')).toLowerCase().includes(s))); n += ts.length; return ts.length ? `<div class="tl-g">${esc(c)}</div>${ts.map(t => `<button class="tl-i" data-tid="${t.id}" aria-current="${sel && sel.id === t.id}"><span>${esc(t.n)}</span>${lv(t.lvl)}</button>`).join('')}` : ''; }).join('') || '<p class="mut u-p14">No technologies match.</p>';
          $('#tc').textContent = n + ' shown';
        };
        const detail = t => {
          if (!t) { $('#td').innerHTML = pn('Select a technology', '<p class="mut">Choose an item from the list. Each record links to roles, projects, capabilities and related technologies.</p>'); return; }
          const rs = rolesOf(t), ps = projsOf(t), cs = certsOf(t);
          $('#td').innerHTML = `<div class="fade">` + pn(t.n, `<dl class="kv"><dt>Category</dt><dd>${esc(t.cat)}</dd><dt>Evidence level</dt><dd>${lv(t.lvl)} <span class="mut small">${esc(t.ev)}</span></dd></dl>
            <div class="grid g2 u-mt16"><div><span class="lbl">Capabilities</span>${bl(t.cap)}</div>
            <div><span class="lbl">Used in</span>${rs.length ? `<div class="dlist">${rs.map(x => `<a href="#/experience?open=${x.id}">${esc(x.role)}<span>${esc(x.company)} · ${period(x)}</span></a>`).join('')}</div>` : '<p class="mut small">Listed on the CV; no role record yet.</p>'}</div></div>
            <div class="grid g2 u-mt16"><div><span class="lbl">Projects (${ps.length})</span>${ps.length ? `<div class="dlist">${ps.map(p => `<a href="#/projects/${p.id}">${esc(p.period || 'In preparation')} · ${esc(p.title)}<span>${esc(p.category)}</span></a>`).join('')}<a href="#/projects?tech=${t.id}">Open in project registry →<span>Filtered by ${esc(t.n)}</span></a></div>` : '<p class="mut small">No project record yet.</p>'}</div>
            <div><span class="lbl">Related technologies</span>${(t.rel || []).map(techById).filter(Boolean).map(techLink).join('') || '<span class="mut small">None listed</span>'}${cs.length ? `<span class="lbl u-mt12">Certifications</span><div class="dlist">${cs.slice(0, 5).map(c => `<a href="#/certifications?q=${encodeURIComponent(c.name)}">${esc(c.name)}<span>${esc(c.issuer)}</span></a>`).join('')}</div>` : ''}</div></div>`) + `<div class="u-mt14">${techIntel(t)}</div></div>`;
        };
        $('#tq').addEventListener('input', drawList);
        $('#tl').addEventListener('click', e => { const b = e.target.closest('[data-tid]'); if (!b) return; const t = techById(b.dataset.tid); $$('.tl-i').forEach(x => x.setAttribute('aria-current', x === b)); detail(t); history.replaceState(null, '', '#/technology/' + t.id + (catQ.length ? '?cat=' + catQ.join(',') : '')); });
        drawList(); detail(sel); const cs = $('.tl-i[aria-current="true"]'); if (cs) cs.scrollIntoView({ block: 'center' });
      } };
  }

  function vCerts(q) {
    const cats = [...new Set(CERT.map(c => c.category))], orgs = [...new Set(CERT.map(c => c.issuer))].sort(), types = [...new Set(CERT.map(c => c.type))], years = [...new Set(CERT.map(c => (c.date || '').slice(0, 4)).filter(Boolean))].sort().reverse();
    const tc = types.map(t => [t, CERT.filter(c => c.type === t).length]);
    return { title: 'Certifications', html: head('Certifications', 'Credential records. The type column separates official certifications from course completions and learning paths.', 'Credentials / Certifications') +
      `<div class="grid g4 mb">${tc.map(([t, n]) => `<div class="kpi"><b>${n}</b><span class="ty ${tyClass(t)}">${esc(t)}</span></div>`).join('')}</div>
      <div class="filters"><input id="cq" type="search" placeholder="Search credentials…" value="${esc(q.get('q') || '')}" aria-label="Search credentials"><select id="cc" aria-label="Category"><option value="">All categories</option>${cats.map(c => `<option>${esc(c)}</option>`).join('')}</select><select id="co" aria-label="Organisation"><option value="">All organisations</option>${orgs.map(c => `<option>${esc(c)}</option>`).join('')}</select><select id="ct" aria-label="Type"><option value="">All types</option>${types.map(c => `<option>${esc(c)}</option>`).join('')}</select><select id="cy" aria-label="Year"><option value="">All years</option>${years.map(c => `<option>${c}</option>`).join('')}</select></div>
      <p class="mut small" id="cn"></p><section class="pn"><div class="tw"><table class="dt"><thead><tr><th>Credential</th><th>Issuer</th><th>Date</th><th>Type</th><th>Category</th><th>Credential ID</th><th>Related technologies</th><th></th></tr></thead><tbody id="cb"></tbody></table></div></section>
      <p class="mut small u-mt12">No official (exam-based) certification is currently active. CCNA Routing &amp; Switching expired in 2018; AWS and PMP were course and experience only (exams not taken).</p>`,
      after() {
        const draw = () => {
          const s = $('#cq').value.toLowerCase().trim(), c = $('#cc').value, o = $('#co').value, t = $('#ct').value, y = $('#cy').value;
          const list = CERT.filter(x => (!c || x.category === c) && (!o || x.issuer === o) && (!t || x.type === t) && (!y || (x.date || '').slice(0, 4) === y) && (!s || [x.name, x.issuer, x.course, x.category, x.type].join(' ').toLowerCase().includes(s))).sort((a, b) => (b.date || '').localeCompare(a.date || ''));
          $('#cn').textContent = list.length + ' of ' + CERT.length + ' credentials';
          $('#cb').innerHTML = list.map(x => `<tr><td><b>${esc(x.name)}</b>${x.expiry ? `<br><span class="small mut">${esc(x.expiry)}</span>` : ''}</td><td>${esc(x.issuer)}</td><td class="mono">${ym(x.date) || '—'}</td><td><span class="ty ${tyClass(x.type)}">${esc(x.type)}</span></td><td>${esc(x.category)}</td><td class="mono small">${esc(x.number || '—')}</td><td>${TECH.filter(tt => tt.re.test([x.name, x.course].join(' '))).slice(0, 3).map(techLink).join('')}</td><td>${x.pdf ? `<button class="btn sm" data-pdf="${esc(fileUrl(x.pdf))}" data-title="${esc(x.name)}">View</button>` : '<span class="small dim">Per CV</span>'}</td></tr>`).join('') || '<tr><td colspan="8" class="mut">No credentials match.</td></tr>';
        };
        ['input', 'change'].forEach(ev => $$('.filters').forEach(f => f.addEventListener(ev, draw))); draw();
      } };
  }

  function vEducation() {
    return { title: 'Education', html: head('Education', 'Academic qualifications and professional training, as stated on the CV.', 'Credentials / Education') +
      `<div class="grid g2">${pn('Academic qualifications', `<ol class="tlm">${W.EDUCATION.map(e => `<li><span class="p">${esc(e.years)}</span><div><b>${esc(e.degree)}</b><span>${esc(e.inst)} · ${esc(e.place)}</span><br><span class="lv ${e.status === 'In progress' ? 'draft' : 'Delivered'}">${esc(e.status)}</span></div></li>`).join('')}</ol>`, '', true)}
      ${pn('Professional training', `<ol class="tlm">${W.TRAINING.map(e => `<li><span class="p">${esc(e.when)}</span><div><b>${esc(e.name)}</b><span>${esc(e.org)}</span></div></li>`).join('')}</ol><p class="mut small u-p12">Certificates and learning paths are listed under <a class="u-acc" href="#/certifications">Certifications</a>.</p>`, '', true)}</div>` };
  }

  function docList() {
    const cvs = Object.keys(P.variants).map(k => ({ name: P.variants[k].label, cat: 'CV', kind: 'Generated', who: 'Syed Bilal Ali', date: '', href: '#/cv?v=' + k }));
    const cs = docCerts.map(c => ({ name: c.name, cat: 'Certificates', kind: 'PDF', who: c.issuer, date: c.date, pdf: fileUrl(c.pdf) }));
    return cvs.concat(cs);
  }
  function vDocuments(q) {
    const docs = docList(), cats = ['CV', 'Certificates', 'Education', 'Engineering', 'Projects', 'Technical documentation', 'Other'];
    return { title: 'Documents', html: head('Document centre', 'Public documents only. Private and restricted records (degrees, letters, identity documents, client files) are not published and are shared on request after verification.', 'Credentials / Documents') +
      `<div class="grid g4 mb u-autofit">${cats.map(c => `<div class="kpi"><b>${docs.filter(d => d.cat === c).length}</b><span>${c}</span></div>`).join('')}</div>
      <div class="filters"><input id="dq" type="search" placeholder="Search documents…" value="${esc(q.get('q') || '')}" aria-label="Search documents"><select id="dc" aria-label="Category"><option value="">All categories</option>${cats.filter(c => docs.some(d => d.cat === c)).map(c => `<option>${c}</option>`).join('')}</select></div>
      <section class="pn"><div class="tw"><table class="dt"><thead><tr><th>Document</th><th>Category</th><th>Type</th><th>Source</th><th>Date</th><th></th></tr></thead><tbody id="db"></tbody></table></div></section>`,
      after() {
        const draw = () => { const s = $('#dq').value.toLowerCase().trim(), c = $('#dc').value; const l = docs.filter(d => (!c || d.cat === c) && (!s || (d.name + ' ' + d.who).toLowerCase().includes(s)));
          $('#db').innerHTML = l.map(d => `<tr><td><b>${esc(d.name)}</b></td><td>${esc(d.cat)}</td><td>${esc(d.kind)}</td><td>${esc(d.who)}</td><td class="mono">${ym(d.date) || '—'}</td><td>${d.pdf ? `<button class="btn sm" data-pdf="${esc(d.pdf)}" data-title="${esc(d.name)}">Preview</button> <a class="btn sm" href="${esc(d.pdf)}" download>Download</a>` : `<a class="btn sm" href="${esc(d.href)}">Open</a>`}</td></tr>`).join('') || '<tr><td colspan="6" class="mut">No documents match.</td></tr>'; };
        $$('.filters input,.filters select').forEach(el => { el.addEventListener('input', draw); el.addEventListener('change', draw); }); draw();
      } };
  }

  /* CV workspace: same data, three versions, selectable sections */
  function cvSheet(key, secs) {
    const v = P.variants[key], full = v.bullets.length > 4, keep = r => r.tags.some(t => v.bullets.includes(t));
    const exp = EXP.map(x => ({ x, rs: x.responsibilities.filter(keep) })).filter(r => r.rs.length);
    const certs = CERT.filter(c => !v.certCats || v.certCats.includes(c.category)), docs = certs.filter(c => c.source === 'document'), cvs = certs.filter(c => c.source === 'cv');
    const projs = PROJ.filter(p => p.status !== 'draft' && (key === 'hvac' ? ['HVAC & Refrigeration', 'Systems Integration'].includes(p.cat) || p.id === 'power-isp' : p.featured)).slice(0, 8);
    const tcats = key === 'hvac' ? ['HVAC', 'Automation', 'Infrastructure'] : key === 'it' ? CATS.filter(c => !['HVAC', 'Automation'].includes(c)) : CATS;
    let h = `<header><h1>${esc(P.name)}</h1><p class="hl">${esc(v.headline)}</p><p class="ct">${esc(P.location)} · ${esc(P.email)} · Languages: ${esc(P.languages.join(', '))}</p></header>`;
    if (secs.profile) h += `<h2>Profile</h2><p>${esc(v.summary)}</p>`;
    if (secs.experience) h += '<h2>Experience</h2>' + exp.map(r => `<h3><span class="when">${period(r.x)}</span>${esc(r.x.role)}</h3><p class="org">${esc(r.x.company)}${r.x.place ? ' · ' + esc(r.x.place) : ''}</p><ul>${r.rs.map(p => `<li><strong>${esc(p.l)}:</strong> ${esc(p.t)}</li>`).join('')}${full ? r.x.contributions.map(c => `<li>${md(c)}</li>`).join('') : ''}</ul>`).join('');
    if (secs.projects && projs.length) h += `<h2>Selected projects</h2><ul>${projs.map(p => `<li><strong>${esc(p.title)}</strong> (${esc(p.dateLabel || p.period || '')}): ${esc(p.oneLine)}</li>`).join('')}</ul><p>The full project registry (${PROJ.filter(p => p.kind !== 'summary').length} records) is available on the portfolio website.</p>`;
    if (secs.technologies) h += '<h2>Technologies</h2>' + tcats.map(c => { const ts = TECH.filter(t => t.cat === c); return ts.length ? `<p><strong>${esc(c)}:</strong> ${ts.map(t => esc(t.n)).join(' · ')}</p>` : ''; }).join('');
    if (secs.certifications && (docs.length || cvs.length)) h += `<h2>Certifications and training</h2><ul class="cn">${docs.map(c => `<li><strong>${esc(c.name)}</strong>, ${esc(c.issuer)}${c.date ? ', ' + esc(ym(c.date)) : ''} <span>(${esc(c.type)})</span></li>`).join('')}${cvs.map(c => `<li><strong>${esc(c.name)}</strong>, ${esc(c.issuer)} <span>(${esc(c.type)}${c.expiry ? ', ' + esc(c.expiry) : ''})</span></li>`).join('')}</ul>`;
    if (secs.education) h += `<h2>Education</h2><ul>${W.EDUCATION.map(e => `<li><strong>${esc(e.degree)}</strong>, ${esc(e.inst)} (${esc(e.years)}, ${esc(e.status)})</li>`).join('')}</ul><ul>${W.TRAINING.map(e => `<li>${esc(e.name)}, ${esc(e.org)} (${esc(e.when)})</li>`).join('')}</ul>`;
    return h;
  }
  function vCv(q) {
    let key = P.variants[q.get('v')] ? q.get('v') : MODES[mode].cv;
    const secs = { profile: true, experience: true, projects: true, technologies: true, certifications: true, education: true }, names = { profile: 'Profile', experience: 'Experience', projects: 'Projects', technologies: 'Technologies', certifications: 'Certifications', education: 'Education' };
    return { title: 'CV workspace', html: head('CV workspace', 'Three versions generated from one verified data source. Choose sections, then print or save as PDF.', 'Career tools / CV', '<button class="btn primary" data-act="print">Print / Save as PDF</button>') +
      `<div class="pn mb"><div class="tabs" role="tablist">${Object.keys(P.variants).map(k => `<button role="tab" data-ver="${k}" aria-selected="${k === key}">${esc(P.variants[k].label)}</button>`).join('')}</div><div class="pb cvtools">${Object.keys(secs).map(s => `<label><input type="checkbox" data-sec="${s}" checked> ${names[s]}</label>`).join('')}</div></div><article class="sheet" id="sheet"></article>`,
      after() { const draw = () => { $('#sheet').innerHTML = cvSheet(key, secs); $$('[data-ver]').forEach(b => b.setAttribute('aria-selected', b.dataset.ver === key)); };
        $$('[data-ver]').forEach(b => b.addEventListener('click', () => { key = b.dataset.ver; history.replaceState(null, '', '#/cv?v=' + key); draw(); }));
        $$('[data-sec]').forEach(c => c.addEventListener('change', () => { secs[c.dataset.sec] = c.checked; draw(); })); draw(); } };
  }

  function vContact() {
    return { title: 'Contact', html: head('Contact', 'Tell me about the project or role. Phone and other details are shared on request.', 'Career tools / Contact') +
      `<div class="grid g2">${pn('Details', `<dl class="kv"><dt>Email</dt><dd><a class="u-acc" href="mailto:${esc(P.email)}">${esc(P.email)}</a></dd><dt>Location</dt><dd>Karachi, Pakistan (UTC+5)</dd><dt>Languages</dt><dd>English, Urdu</dd><dt>Availability</dt><dd>Remote and on-site engagements</dd></dl>`)}
      ${pn('Send a message', `<form id="form" class="form" novalidate autocomplete="on"><label>Name<input name="name" required maxlength="80" autocomplete="name"></label><label>Email<input name="email" type="email" required maxlength="120" autocomplete="email"></label><label>Company<input name="company" maxlength="100" autocomplete="organization"></label><label>Message<textarea name="msg" rows="5" required maxlength="1500"></textarea></label><input name="website" class="hp" tabindex="-1" autocomplete="off" aria-hidden="true"><button class="btn primary" type="submit">Send message</button><p class="mut small" id="hint">Opens your email app with the message pre-filled.</p></form>`)}</div>`,
      after() { $('#form').addEventListener('submit', e => { e.preventDefault(); const f = e.target, el = f.elements, hint = $('#hint'); if (el['website'].value) return; if (!f.checkValidity()) { hint.textContent = 'Please complete name, a valid email and a message.'; return; }
        try { const l = +sessionStorage.getItem('lastSend') || 0; if (Date.now() - l < 30000) { hint.textContent = 'Please wait a few seconds before sending again.'; return; } sessionStorage.setItem('lastSend', Date.now()); } catch (x) {}
        const c = s => String(s).replace(/[\r\n]+/g, ' ').slice(0, 200); const body = 'Name: ' + c(el['name'].value) + '\nCompany: ' + c(el['company'].value) + '\nEmail: ' + c(el['email'].value) + '\n\n' + String(el['msg'].value).slice(0, 1500);
        location.href = 'mailto:' + P.email + '?subject=' + encodeURIComponent('Portfolio enquiry from ' + c(el['name'].value)) + '&body=' + encodeURIComponent(body); }); } };
  }
  function vNotFound() { return { title: 'Not found', html: head('Page not found', 'That record does not exist.') + '<a class="btn" href="#/dashboard">Back to dashboard</a>' }; }

  /* ---------- global search ---------- */
  const IDX = [];
  EXP.forEach(x => IDX.push({ g: 'Experience', t: x.role + ' — ' + x.company, s: period(x), r: '/experience?open=' + x.id, x: roleText(x) }));
  PROJ.forEach(p => IDX.push({ g: 'Projects', t: p.title, s: p.category + (p.period ? ' · ' + p.period : ''), r: '/projects/' + p.id, x: projText(p) + ' ' + p.category }));
  TECH.forEach(t => IDX.push({ g: 'Technologies', t: t.n, s: t.cat + ' · ' + (LVL[t.lvl]), r: '/technology/' + t.id, x: t.m.join(' ') + ' ' + t.cap.join(' ') + ' ' + t.ev }));
  Object.entries(W.SKILLS).forEach(([g, a]) => a.forEach(s => IDX.push({ g: 'Skills', t: s, s: g, r: '/expertise', x: g })));
  CERT.forEach(c => IDX.push({ g: 'Certifications', t: c.name, s: c.issuer + (c.date ? ' · ' + ym(c.date) : ''), r: '/certifications?q=' + encodeURIComponent(c.name), x: [c.course, c.category, c.type, c.number].join(' ') }));
  W.EDUCATION.forEach(e => IDX.push({ g: 'Education', t: e.degree, s: e.inst + ' · ' + e.years, r: '/education', x: e.inst }));
  docList().forEach(d => IDX.push({ g: 'Documents', t: d.name, s: d.cat + ' · ' + d.kind, r: '/documents?q=' + encodeURIComponent(d.name), x: d.who }));
  [['Dashboard', '/dashboard'], ['Profile', '/profile'], ['HVAC and refrigeration', '/hvac'], ['Automation and PLC', '/automation'], ['Advanced IT view', '/it'], ['CV workspace', '/cv'], ['Contact', '/contact']].forEach(([t, r]) => IDX.push({ g: 'Pages', t, s: 'Open page', r, x: '' }));
  IDX.forEach(i => { i.lt = i.t.toLowerCase(); i.lx = (i.t + ' ' + i.s + ' ' + i.x).toLowerCase(); });
  const GORDER = ['Experience', 'Projects', 'Technologies', 'Skills', 'Certifications', 'Education', 'Documents', 'Pages'];
  function search(q) {
    const toks = q.toLowerCase().split(/\s+/).filter(Boolean); if (!toks.length) return [];
    return IDX.map(i => { if (!toks.every(t => i.lx.includes(t))) return null; const sc = toks.reduce((a, t) => a + (i.lt.startsWith(t) ? 4 : i.lt.includes(t) ? 3 : 1), 0); return { i, sc }; }).filter(Boolean).sort((a, b) => b.sc - a.sc).map(o => o.i);
  }
  const groupRes = list => GORDER.map(g => [g, list.filter(i => i.g === g)]).filter(([, l]) => l.length);
  function vSearch(q) {
    const s = q.get('q') || '', res = groupRes(search(s));
    return { title: 'Search', html: head('Search results', `${res.reduce((a, [, l]) => a + l.length, 0)} results for <b>${esc(s)}</b> across experience, projects, technologies, skills, certifications, education and documents.`, 'Search') +
      (res.map(([g, l]) => pn(g + ' (' + l.length + ')', `<div class="dlist">${l.slice(0, 30).map(i => `<a href="#${i.r}">${esc(i.t)}<span>${esc(i.s)}</span></a>`).join('')}</div>`)).join('<div class="u-h14"></div>') || '<p class="mut">No results. Try a technology, employer or certificate name.</p>') };
  }
  const gq = $('#gq'), gres = $('#gres'); let gsel = -1;
  function showRes() {
    const q = gq.value.trim(); if (!q) { gres.hidden = true; gq.setAttribute('aria-expanded', 'false'); return; }
    const res = groupRes(search(q)); gsel = -1;
    gres.innerHTML = res.length ? res.map(([g, l]) => `<h4>${g} · ${l.length}</h4>${l.slice(0, 4).map(i => `<a href="#${i.r}" role="option"><b>${esc(i.t)}</b><span>${esc(i.s)}</span></a>`).join('')}`).join('') + `<a href="#/search?q=${encodeURIComponent(q)}"><b>See all results for “${esc(q)}” →</b></a>` : '<div class="none">No results. Try a technology, employer or certificate name.</div>';
    gres.hidden = false; gq.setAttribute('aria-expanded', 'true');
  }
  gq.addEventListener('input', showRes); gq.addEventListener('focus', showRes);
  gq.addEventListener('keydown', e => {
    const items = $$('a', gres);
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); if (!items.length) return; gsel = (gsel + (e.key === 'ArrowDown' ? 1 : -1) + items.length) % items.length; items.forEach((a, i) => a.classList.toggle('on', i === gsel)); items[gsel].scrollIntoView({ block: 'nearest' }); }
    else if (e.key === 'Enter') { e.preventDefault(); if (gsel >= 0 && items[gsel]) items[gsel].click(); else if (gq.value.trim()) { location.hash = '#/search?q=' + encodeURIComponent(gq.value.trim()); closeRes(); } }
    else if (e.key === 'Escape') closeRes();
  });
  const closeRes = () => { gres.hidden = true; gq.setAttribute('aria-expanded', 'false'); };
  gres.addEventListener('click', () => { closeRes(); gq.blur(); gq.value = ''; });
  document.addEventListener('click', e => { if (!e.target.closest('.search')) closeRes(); });
  document.addEventListener('keydown', e => { if ((e.key === '/' && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)) || (e.key === 'k' && (e.ctrlKey || e.metaKey))) { e.preventDefault(); gq.focus(); gq.select(); } });

  /* ---------- router ---------- */
  function route() {
    const raw = location.hash.replace(/^#/, '') || '/dashboard', [path, qs] = raw.split('?'), q = new URLSearchParams(qs || ''), seg = path.split('/').filter(Boolean);
    let v;
    switch (seg[0] || 'dashboard') {
      case 'dashboard': v = vDashboard(); break; case 'profile': v = vProfile(); break; case 'experience': v = vExperience(q); break;
      case 'projects': v = seg[1] ? vProject(seg[1]) : vProjects(q); break; case 'expertise': v = vExpertise(q); break;
      case 'hvac': v = vHvac(); break; case 'automation': v = vAutomation(); break; case 'it': v = vIt(); break;
      case 'technology': v = vTechnology(seg[1], q); break; case 'certifications': v = vCerts(q); break; case 'education': v = vEducation(); break;
      case 'documents': v = vDocuments(q); break; case 'cv': v = vCv(q); break; case 'contact': v = vContact(); break; case 'search': v = vSearch(q); break;
      default: v = vNotFound();
    }
    const view = $('#view'); view.innerHTML = `<div class="fade">${v.html}</div>`; document.title = v.title + ' | Syed Bilal Ali';
    renderNav(); closeDrawer(); if (v.after) v.after(); if (!(seg[0] === 'experience' && q.get('open'))) window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', route);

  /* ---------- global interactions ---------- */
  const root = document.documentElement;
  try { const t = localStorage.getItem('theme'); if (t === 'light' || t === 'dark') root.dataset.theme = t; } catch (e) {}
  $('#theme').addEventListener('click', () => { const c = root.dataset.theme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'), n = c === 'light' ? 'dark' : 'light'; root.dataset.theme = n; try { localStorage.setItem('theme', n); } catch (e) {} });
  const openDrawer = () => { $('#side').classList.add('open'); $('#scrim').hidden = false; $('#menuBtn').setAttribute('aria-expanded', 'true'); };
  function closeDrawer() { $('#side').classList.remove('open'); $('#scrim').hidden = true; $('#menuBtn').setAttribute('aria-expanded', 'false'); }
  $('#menuBtn').addEventListener('click', () => $('#side').classList.contains('open') ? closeDrawer() : openDrawer());
  $('#scrim').addEventListener('click', closeDrawer);
  const modal = $('#modal'); let lastFocus = null;
  const closeModal = () => { modal.hidden = true; $('#m-body').innerHTML = ''; if (lastFocus) lastFocus.focus(); };
  document.addEventListener('click', e => {
    const m = e.target.closest('[data-mode]'); if (m) { mode = m.dataset.mode; try { localStorage.setItem('mode', mode); } catch (x) {} route(); return; }
    const pdf = e.target.closest('[data-pdf]'); if (pdf) { lastFocus = pdf; $('#m-title').textContent = pdf.dataset.title; $('#m-open').href = pdf.dataset.pdf; const f = document.createElement('iframe'); f.title = pdf.dataset.title; f.src = pdf.dataset.pdf + '#toolbar=1&navpanes=0'; $('#m-body').innerHTML = ''; $('#m-body').appendChild(f); modal.hidden = false; $('#m-close').focus(); return; }
    const a = e.target.closest('[data-act]'); if (a) {
      const act = a.dataset.act;
      if (act === 'toggle') { const b = a.nextElementSibling, o = b.hidden; b.hidden = !o; a.setAttribute('aria-expanded', o); }
      else if (act === 'expand' || act === 'collapse') $$('.rh').forEach(h => { h.nextElementSibling.hidden = act === 'collapse'; h.setAttribute('aria-expanded', act === 'expand'); });
      else if (act === 'print') window.print();
      else if (act === 'focus-search') { gq.focus(); }
      else if (act === 'menu') openDrawer();
      return;
    }
    const j = e.target.closest('[data-jump]'); if (j) { e.preventDefault(); const t = document.getElementById(j.dataset.jump); if (t) t.scrollIntoView({ behavior: 'smooth' }); }
  });
  $('#m-close').addEventListener('click', closeModal); modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') { if (!modal.hidden) closeModal(); closeDrawer(); } });

  route();
})();
