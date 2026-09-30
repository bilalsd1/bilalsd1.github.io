(function () {
  'use strict';
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var P = window.PROFILE, SITE = window.SITE, SHOW_ALL = !!SITE.showUnverified;

  /* ---------- safety helpers (all data is escaped; only known file paths / https links allowed) ---------- */
  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fileUrl(u) { return /^(certificates|projects)\/[\w .\-()]+\.(pdf|png|jpe?g|webp)$/i.test(u || '') ? encodeURI(u) : ''; }
  function httpsUrl(u) { return /^https:\/\//i.test(u || '') ? u : ''; }
  function fmtDate(d) {
    if (!d) return '';
    var m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(d); if (!m) return d;
    return ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][+m[2] - 1] + ' ' + (+m[3]) + ', ' + m[1];
  }
  var LV = { project: 'Project', trained: 'Trained', stated: 'On CV', pending: 'Not yet documented' };

  /* ---------- theme ---------- */
  var root = document.documentElement;
  try { var t = localStorage.getItem('theme'); if (t === 'light' || t === 'dark') root.dataset.theme = t; } catch (e) {}
  $('#theme').addEventListener('click', function () {
    var cur = root.dataset.theme || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    var n = cur === 'light' ? 'dark' : 'light'; root.dataset.theme = n;
    try { localStorage.setItem('theme', n); } catch (e) {}
  });

  /* ---------- navigation ---------- */
  var menu = $('#menu'), burger = $('#burger'), mega = $('.has-mega'), tog = $('.mega-toggle');
  function closeAll() { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); mega.classList.remove('open'); tog.setAttribute('aria-expanded', 'false'); }
  burger.addEventListener('click', function () { var o = menu.classList.toggle('open'); burger.setAttribute('aria-expanded', o); });
  tog.addEventListener('click', function (e) { e.stopPropagation(); var o = mega.classList.toggle('open'); tog.setAttribute('aria-expanded', o); });
  document.addEventListener('click', function (e) { if (!mega.contains(e.target)) { mega.classList.remove('open'); tog.setAttribute('aria-expanded', 'false'); } });
  $$('.menu a').forEach(function (a) { a.addEventListener('click', closeAll); });

  /* ---------- hero ---------- */
  var certDocs = window.CERTIFICATES.filter(function (c) { return c.pdf; }).length;
  $('#hero-summary').textContent = P.summary;
  $('#positioning').innerHTML = P.positioning.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('');
  $('#facts').innerHTML = [
    [P.yearsExperience, 'Years of experience'], [P.enterpriseProjects, 'Enterprise IT projects (per CV)'],
    [certDocs, 'Certificates with original PDFs'], [window.EXPERIENCE.length, 'Roles across Saudi Arabia & Pakistan']
  ].map(function (f) { return '<div><b data-n="' + f[0] + '">0</b><span>' + esc(f[1]) + '</span></div>'; }).join('');
  var layers = ['Data & analytics', 'Enterprise software & APIs', 'Network & security', 'Control & automation', 'Field devices & power'];
  $('#hero-layers').innerHTML = layers.map(function (l, i) {
    var y = 20 + i * 66;
    return '<g class="ly" style="animation-delay:' + i * 120 + 'ms"><path d="M210 ' + y + ' L400 ' + (y + 28) + ' L210 ' + (y + 56) + ' L20 ' + (y + 28) + ' Z"/><text x="210" y="' + (y + 32) + '" text-anchor="middle">' + esc(l) + '</text></g>';
  }).join('');

  /* ---------- about ---------- */
  $('#about-copy').innerHTML =
    '<p>I began as an IT technician in Saudi Arabia in 2010 and progressed to IT Manager, independent consultant and now IT Head, delivering <strong>48 enterprise IT projects</strong> across hotels, hospitals, manufacturing, education, energy, telecom and retail.</p>' +
    '<p>My work connects layers that are usually handled by different teams: the network and servers, the Oracle and MySQL databases, the enterprise applications, and the physical devices — turnstiles, scales, handheld terminals and power systems — that feed them.</p>' +
    '<p>In 2025 I extended this into industrial automation and compressor technology, completing PLC programming courses (RealPars) and the full Danfoss Turbocor TT &amp; TG compressor training program and assessment.</p>' +
    '<ul class="facts2"><li><b>Location</b> Karachi, Pakistan</li><li><b>Languages</b> English, Urdu</li><li><b>Studying</b> BSc Computer Science, Virtual University of Pakistan</li></ul>';

  /* ---------- expertise ---------- */
  $('#expertise-grid').innerHTML = window.EXPERTISE.filter(function (x) { return x.verified || SHOW_ALL; }).map(function (x) {
    return '<article class="card ' + (x.verified ? '' : 'pend') + '"><span class="badge">' + esc(x.verified ? x.level : 'Evidence pending') + '</span><h3>' + esc(x.name) + '</h3>' +
      (x.evidence.length ? '<ul class="ev">' + x.evidence.map(function (e) { return '<li>' + esc(e) + '</li>'; }).join('') + '</ul>' : '') +
      (x.note ? '<p class="note">' + esc(x.note) + '</p>' : '') + '</article>';
  }).join('');
  $('#chains').innerHTML = window.SKILL_CHAINS.map(function (c) {
    return '<div class="chain"><div><small>Skill</small>' + esc(c.skill) + '</div><span>→</span><div><small>Technology</small>' + esc(c.tech) + '</div><span>→</span><div><small>Project</small>' + esc(c.project) + '</div><span>→</span><div><small>Evidence</small>' + esc(c.evidence) + '</div></div>';
  }).join('');

  /* ---------- experience ---------- */
  var projById = {}; window.PROJECTS.forEach(function (p) { projById[p.id] = p; });
  $('#timeline').innerHTML = window.EXPERIENCE.map(function (x) {
    return '<li><span class="when">' + esc(x.when) + '</span><h3>' + esc(x.role) + '</h3><p class="org">' + esc(x.company) + (x.place ? ' · ' + esc(x.place) : '') + '</p>' +
      (x.achievements.length ? '<div class="ach"><b>Achievements</b><ul>' + x.achievements.map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('') + '</ul></div>' : '') +
      '<details' + (x === window.EXPERIENCE[0] ? ' open' : '') + '><summary>Responsibilities &amp; work (' + x.points.length + ')</summary><ul class="pts">' + x.points.map(function (p) { return '<li>' + esc(p.t) + '</li>'; }).join('') + '</ul></details>' +
      (x.tech.length ? '<ul class="chips sm">' + x.tech.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('') + '</ul>' : '') +
      (x.projects.length ? '<p class="projlinks">Projects: ' + x.projects.filter(function (id) { return projById[id]; }).map(function (id) { return '<a href="#projects">' + esc(projById[id].title) + '</a>'; }).join(' · ') + '</p>' : '') + '</li>';
  }).join('');

  /* ---------- projects ---------- */
  function listOf(label, arr, cls) { return arr && arr.length ? '<div class="pf ' + (cls || '') + '"><b>' + esc(label) + '</b><ul>' + arr.map(function (a) { return '<li>' + esc(a) + '</li>'; }).join('') + '</ul></div>' : ''; }
  function gallery(arr) { return arr && arr.length ? '<div class="gal">' + arr.map(function (g) { var u = fileUrl(g.src); return u ? '<figure><img src="' + esc(u) + '" alt="' + esc(g.caption || '') + '" loading="lazy"><figcaption>' + esc(g.caption || '') + '</figcaption></figure>' : ''; }).join('') + '</div>' : ''; }
  function projCard(p, feature) {
    var meta = [p.company, p.year, p.role && ('Role: ' + p.role)].filter(Boolean).map(esc).join(' · ');
    return '<article class="' + (feature ? 'feature' : 'card proj') + '"><span class="badge' + (p.status === 'draft' ? ' draftb' : '') + '">' + esc(p.status === 'draft' ? 'Case study in preparation' : p.category) + '</span>' +
      '<h3>' + esc(p.title) + '</h3>' + (meta ? '<p class="meta">' + meta + '</p>' : '') +
      '<p>' + esc(p.solution || p.summary || '') + '</p>' +
      (p.scope ? '<ul class="chips sm">' + p.scope.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' : '') +
      listOf('Results (from CV)', p.results) + listOf('Verified basis', p.verifiedBasis) +
      (p.tech ? '<ul class="chips sm">' + p.tech.map(function (s) { return '<li>' + esc(s) + '</li>'; }).join('') + '</ul>' : '') +
      gallery(p.images) + gallery(p.drawings) + gallery(p.screenshots) +
      (p.missing && (p.status === 'draft' || SHOW_ALL) ? '<p class="note">Awaiting documents: ' + p.missing.map(esc).join('; ') + '.</p>' : '') + '</article>';
  }
  var feat = window.PROJECTS.filter(function (p) { return p.featured; })[0];
  $('#feature').innerHTML = feat ? projCard(feat, true) : '';
  var rest = window.PROJECTS.filter(function (p) { return !p.featured; });
  var pg = $('#projects-grid'), pf = $('#proj-filters');
  var pcats = ['All'].concat(rest.map(function (p) { return p.category; }).filter(function (v, i, a) { return a.indexOf(v) === i; }));
  pf.innerHTML = pcats.map(function (c, i) { return '<button aria-pressed="' + (i === 0) + '">' + esc(c) + '</button>'; }).join('');
  function drawProj(cat) { pg.innerHTML = rest.filter(function (p) { return cat === 'All' || p.category === cat; }).map(function (p) { return projCard(p); }).join(''); }
  pf.addEventListener('click', function (e) { if (e.target.tagName !== 'BUTTON') return; $$('button', pf).forEach(function (b) { b.setAttribute('aria-pressed', b === e.target); }); drawProj(e.target.textContent); });
  drawProj('All');

  /* ---------- interactive diagrams ---------- */
  function diagram(box, nodes, mode) {
    var h = '<div class="flow ' + mode + '" role="list">' + nodes.map(function (n, i) {
      var sep = i < nodes.length - 1 ? '<span class="sep" aria-hidden="true">' + (mode === 'sum' ? '+' : '↓') + '</span>' : '';
      return '<button role="listitem" class="node s-' + n.s + '" data-i="' + i + '" aria-pressed="false"><span>' + esc(n.k) + '</span><small>' + esc(LV[n.s]) + '</small></button>' + sep;
    }).join('') + (mode === 'sum' ? '<span class="sep" aria-hidden="true">=</span><div class="result" role="listitem">Integrated engineering &amp; technology solutions</div>' : '') + '</div><div class="detail" aria-live="polite"><b>Select a node</b><p>Shows the evidence held for that layer.</p></div>';
    box.innerHTML = h;
    box.addEventListener('click', function (e) {
      var b = e.target.closest('.node'); if (!b) return;
      $$('.node', box).forEach(function (x) { x.setAttribute('aria-pressed', x === b); });
      var n = nodes[+b.dataset.i];
      $('.detail', box).innerHTML = '<b>' + esc(n.k) + ' — ' + esc(LV[n.s]) + '</b><p>' + esc(n.d) + '</p>';
    });
  }
  diagram($('#dg-int'), window.DIAGRAM_INTEGRATION, 'sum');
  diagram($('#dg-itot'), window.DIAGRAM_ITOT, 'col');
  var ae = [
    { t: 'PLC programming', b: ['Siemens PLC Basics: Introduction to Programming & Configuration — RealPars, 12 Oct 2025', 'PLC Programming Made Easy (Level 1) — RealPars, 12 Oct 2025'] },
    { t: 'Danfoss Turbocor compressors', b: ['Training Program and Assessment, 28 Aug 2025', 'Operation 1 & 2, cooling, interface, safety, SMT and TurboTool® modules (Mar–May 2025)'] },
    { t: 'Device-to-database integration (CV)', b: ['ZKT turnstiles → Oracle HR', 'DIGI SM100 scales → Oracle', 'Zebra MK3100 handhelds → Oracle 10g'] }
  ];
  $('#auto-evidence').innerHTML = ae.map(function (a) { return '<article class="card"><h3>' + esc(a.t) + '</h3><ul class="ev">' + a.b.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join('') + '</ul></article>'; }).join('');

  /* ---------- IT & infrastructure ---------- */
  var groups = {};
  window.TECHNOLOGIES.forEach(function (t) { if (['Networking', 'Servers', 'Infrastructure', 'Databases & Software'].indexOf(t.g) > -1) (groups[t.g] = groups[t.g] || []).push(t); });
  $('#it-grid').innerHTML = Object.keys(groups).map(function (g) {
    return '<article class="card"><h3>' + esc(g) + '</h3><ul class="tl">' + groups[g].map(function (t) { return '<li><span>' + esc(t.n) + '</span><em class="lv l-' + t.level + '">' + esc(LV[t.level]) + '</em><small>' + esc(t.ev) + '</small></li>'; }).join('') + '</ul></article>';
  }).join('');

  /* ---------- certifications ---------- */
  var C = window.CERTIFICATES, ORDER = ['IT', 'Networking', 'Database', 'Programming', 'Automation', 'PLC', 'SCADA', 'HVAC', 'Refrigeration', 'Mechanical', 'Electrical', 'Safety', 'Management', 'Other'];
  var present = ORDER.filter(function (c) { return C.some(function (x) { return x.category === c; }); });
  $('#cert-cat').innerHTML = '<option value="">All categories</option>' + present.map(function (c) { return '<option>' + esc(c) + '</option>'; }).join('');
  function drawCerts() {
    var q = $('#cert-search').value.toLowerCase().trim(), cat = $('#cert-cat').value, src = $('#cert-src').value;
    var list = C.filter(function (c) {
      return (!cat || c.category === cat) && (!src || c.source === src) &&
        (!q || [c.name, c.issuer, c.course, c.number, c.category, c.date].join(' ').toLowerCase().indexOf(q) > -1);
    });
    $('#cert-count').textContent = list.length + ' of ' + C.length + ' credentials';
    $('#certs-grid').innerHTML = list.map(function (c) {
      var pv = fileUrl(c.preview), pdf = fileUrl(c.pdf), v = httpsUrl(c.verify);
      var rows = [['Issuer', c.issuer], ['Date', fmtDate(c.date)], ['Certificate no.', c.number], ['Expiry', c.expiry], ['Course', c.course]].filter(function (r) { return r[1]; });
      return '<article class="cert"><div class="thumb">' + (pv ? '<img src="' + esc(pv) + '" alt="' + esc(c.name) + ' — preview" loading="lazy">' : '<span>No file uploaded<br><small>Listed on CV</small></span>') + '</div>' +
        '<span class="badge">' + esc(c.category) + '</span><h3>' + esc(c.name) + '</h3><p class="st">' + esc(c.status) + '</p>' +
        '<dl>' + rows.map(function (r) { return '<dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd>'; }).join('') + '</dl>' +
        '<div class="acts">' + (pdf ? '<button class="btn sm view" data-id="' + esc(c.id) + '">Preview</button><a class="btn sm" href="' + esc(pdf) + '" target="_blank" rel="noopener">PDF ↗</a>' : '') + (v ? '<a class="btn sm" href="' + esc(v) + '" target="_blank" rel="noopener noreferrer">Verify ↗</a>' : '') + '</div></article>';
    }).join('') || '<p class="note">No credentials match.</p>';
  }
  ['input', 'change'].forEach(function (ev) { $('.toolbar').addEventListener(ev, drawCerts); });
  drawCerts();

  var modal = $('#modal'), lastFocus = null;
  function openModal(c) {
    lastFocus = document.activeElement; $('#m-title').textContent = c.name;
    var pdf = fileUrl(c.pdf); $('#m-open').href = pdf;
    $('#m-body').innerHTML = '<iframe title="' + esc(c.name) + '" src="' + esc(pdf) + '#toolbar=1&navpanes=0"></iframe>';
    modal.hidden = false; $('#m-close').focus();
  }
  function closeModal() { modal.hidden = true; $('#m-body').innerHTML = ''; if (lastFocus) lastFocus.focus(); }
  $('#certs-grid').addEventListener('click', function (e) { var b = e.target.closest('.view'); if (!b) return; var c = C.filter(function (x) { return x.id === b.dataset.id; })[0]; if (c) openModal(c); });
  $('#m-close').addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') { if (!modal.hidden) closeModal(); closeAll(); } });

  /* ---------- education, technologies, vault, cv ---------- */
  $('#edu').innerHTML = window.EDUCATION.map(function (e) { return '<li><b>' + esc(e.degree) + '</b><span>' + esc(e.inst) + ' · ' + esc(e.place) + '</span><em>' + esc(e.years) + ' · ' + esc(e.status) + '</em></li>'; }).join('');
  $('#training').innerHTML = window.TRAINING.map(function (e) { return '<li><b>' + esc(e.name) + '</b><span>' + esc(e.org) + '</span><em>' + esc(e.when) + '</em></li>'; }).join('');
  var tg = {}; window.TECHNOLOGIES.forEach(function (t) { (tg[t.g] = tg[t.g] || []).push(t); });
  $('#tech').innerHTML = Object.keys(tg).map(function (g) {
    return '<div class="tg"><h4>' + esc(g) + '</h4><ul>' + tg[g].map(function (t) { return '<li title="' + esc(t.ev) + '"><span>' + esc(t.n) + '</span><em class="lv l-' + t.level + '">' + esc(LV[t.level]) + '</em></li>'; }).join('') + '</ul></div>';
  }).join('');
  var AL = { 'public': 'Public', restricted: 'Restricted', 'private': 'Private' };
  $('#vault').innerHTML = window.VAULT.map(function (v) {
    return '<div class="vrow a-' + esc(v.access) + '"><span class="lock" aria-hidden="true">' + (v.access === 'public' ? '◯' : '●') + '</span><div><b>' + esc(v.cat) + '</b><small>' + esc(v.note) + '</small></div><em>' + esc(AL[v.access]) + '</em></div>';
  }).join('');
  $('#cv-cards').innerHTML = Object.keys(P.variants).map(function (k) {
    var v = P.variants[k]; return '<article class="card"><h3>' + esc(v.label) + '</h3><p>' + esc(v.headline) + '</p><a class="btn sm primary" href="cv.html?v=' + esc(k) + '">Open ' + esc(v.label) + '</a></article>';
  }).join('');

  /* ---------- contact (client-side validation, honeypot, throttle; real rate limiting needs the backend) ---------- */
  $('#c-email').innerHTML = '<a href="mailto:' + esc(P.email) + '">' + esc(P.email) + '</a>';
  $('#form').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = e.target, el = f.elements, hint = $('#hint');
    if (el['website'].value) return;
    if (!f.checkValidity()) { hint.textContent = 'Please complete name, a valid email and a message.'; return; }
    try { var last = +sessionStorage.getItem('lastSend') || 0; if (Date.now() - last < 30000) { hint.textContent = 'Please wait a few seconds before sending again.'; return; } sessionStorage.setItem('lastSend', Date.now()); } catch (x) {}
    var clean = function (s) { return String(s).replace(/[\r\n]+/g, ' ').slice(0, 200); };
    var body = 'Name: ' + clean(el['name'].value) + '\nCompany: ' + clean(el['company'].value) + '\nEmail: ' + clean(el['email'].value) + '\n\n' + String(el['msg'].value).slice(0, 1500);
    location.href = 'mailto:' + P.email + '?subject=' + encodeURIComponent('Portfolio enquiry from ' + clean(el['name'].value)) + '&body=' + encodeURIComponent(body);
  });
  $('#yr').textContent = new Date().getFullYear();

  /* ---------- reveal + counters ---------- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        if (!en.isIntersecting) return; var el = en.target; io.unobserve(el);
        if (el.dataset.n) { var end = +el.dataset.n, s = null; requestAnimationFrame(function step(ts) { s = s || ts; var k = Math.min((ts - s) / 1000, 1); el.textContent = Math.round(end * k); if (k < 1) requestAnimationFrame(step); }); }
        else el.classList.add('in');
      });
    }, { threshold: .12 });
    $$('[data-n]').forEach(function (el) { io.observe(el); });
    $$('.card,.cert,.feature,.timeline>li,.chain').forEach(function (el) { el.classList.add('rv'); io.observe(el); });
  } else { $$('[data-n]').forEach(function (el) { el.textContent = el.dataset.n; }); }
})();
