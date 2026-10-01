(function () {
  function fail(msg) {
    var v = document.getElementById('view');
    if (v && /Loading/.test(v.textContent || '')) {
      v.innerHTML = '<div class="nojs"><h1>Syed Bilal Ali</h1><p>Multidisciplinary engineering and technology professional. The interactive profile could not start in this browser (' + String(msg).replace(/[<>&]/g, '') + ').</p><p>Please hard-refresh the page (Ctrl+F5, or Cmd+Shift+R on Mac) or update your browser. Contact: Bilalsd1@live.com</p></div>';
    }
  }
  window.addEventListener('error', function (e) { fail(e && e.message ? e.message : 'script error'); });
  setTimeout(function () { fail('start-up timeout'); }, 8000);
})();
