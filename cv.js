(function () {
  'use strict';
  var P = window.PROFILE, V = P.variants;
  function esc(t) { return String(t == null ? '' : t).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fmt(d) { var m = /^(\d{4})-(\d{2})/.exec(d || ''); return m ? ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][+m[2] - 1] + ' ' + m[1] : ''; }

  function render(key) {
    var v = V[key] || V.full;
    document.title = v.label + ' — ' + P.name;
    var keep = function (pt) { return pt.tags.some(function (t) { return v.bullets.indexOf(t) > -1; }); };

    var exp = window.EXPERIENCE.map(function (x) { return { x: x, pts: x.points.filter(keep) }; }).filter(function (r) { return r.pts.length; });
    var certs = window.CERTIFICATES.filter(function (c) { return !v.certCats || v.certCats.indexOf(c.category) > -1; });
    var docCerts = certs.filter(function (c) { return c.source === 'document'; }), cvCerts = certs.filter(function (c) { return c.source === 'cv'; });
    var skills = v.skills === null ? Object.keys(window.SKILLS) : v.skills.filter(function (g) { return window.SKILLS[g]; });

    var h = '<header><h1>' + esc(P.name) + '</h1><p class="hl">' + esc(v.headline) + '</p><p class="ct">' + esc(P.location) + ' · ' + esc(P.email) + ' · Languages: ' + esc(P.languages.join(', ')) + '</p></header>' +
      '<h2>Profile</h2><p>' + esc(v.summary) + '</p>';
    if (exp.length) h += '<h2>Experience</h2>' + exp.map(function (r) {
      return '<h3><span class="when">' + esc(r.x.when) + '</span>' + esc(r.x.role) + '</h3><p class="org">' + esc(r.x.company) + (r.x.place ? ' · ' + esc(r.x.place) : '') + '</p><ul>' + r.pts.map(function (p) { return '<li>' + esc(p.t) + '</li>'; }).join('') + '</ul>';
    }).join('');
    if (docCerts.length || cvCerts.length) {
      h += '<h2>Certifications &amp; training</h2><ul class="cn">' + docCerts.map(function (c) { return '<li><b>' + esc(c.name) + '</b> — ' + esc(c.issuer) + (c.date ? ', ' + esc(fmt(c.date)) : '') + (c.number ? ' <span>(ID ' + esc(c.number) + ')</span>' : '') + '</li>'; }).join('') +
        cvCerts.map(function (c) { return '<li><b>' + esc(c.name) + '</b> — ' + esc(c.issuer) + ' <span>(' + esc(c.status) + (c.expiry ? ', ' + esc(c.expiry) : '') + ')</span></li>'; }).join('') + '</ul>';
    }
    if (skills.length) h += '<h2>Skills</h2>' + skills.map(function (g) { return '<p class="sk"><b>' + esc(g) + ':</b> ' + window.SKILLS[g].map(esc).join(' · ') + '</p>'; }).join('');
    h += '<h2>Education</h2><ul>' + window.EDUCATION.map(function (e) { return '<li><b>' + esc(e.degree) + '</b>, ' + esc(e.inst) + ' (' + esc(e.years) + ', ' + esc(e.status) + ')</li>'; }).join('') + '</ul>' +
      '<ul>' + window.TRAINING.map(function (e) { return '<li>' + esc(e.name) + ' — ' + esc(e.org) + ' (' + esc(e.when) + ')</li>'; }).join('') + '</ul>';
    document.getElementById('sheet').innerHTML = h;
    Array.prototype.forEach.call(document.querySelectorAll('#vs button'), function (b) { b.setAttribute('aria-selected', b.dataset.k === key); });
  }

  var vs = document.getElementById('vs');
  vs.innerHTML = Object.keys(V).map(function (k) { return '<button role="tab" data-k="' + esc(k) + '">' + esc(V[k].label) + '</button>'; }).join('');
  vs.addEventListener('click', function (e) { var b = e.target.closest('button'); if (!b) return; history.replaceState(null, '', '?v=' + b.dataset.k); render(b.dataset.k); });
  document.getElementById('print').addEventListener('click', function () { window.print(); });
  render(new URLSearchParams(location.search).get('v') || 'full');
})();
