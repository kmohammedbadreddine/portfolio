/* Portfolio – interactions. Les projets se gèrent dans js/projects.js */
(function () {
  'use strict';
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));

  /* Année dynamique */
  $('#year').textContent = new Date().getFullYear();

  /* Menu burger */
  const burger = $('.burger'), menu = $('#menu');
  const setMenu = open => { menu.classList.toggle('open', open); burger.setAttribute('aria-expanded', open); };
  burger.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
  $$('#menu a').forEach(a => a.addEventListener('click', () => setMenu(false)));

  /* Lien actif selon la section visible */
  const links = $$('#menu a');
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-45% 0px -50% 0px' });
  $$('main section[id]').forEach(s => spy.observe(s));

  /* Illustrations de données (si aucune image fournie) */
  const art = k => {
    const bg = '<defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#101B2D"/><stop offset="1" stop-color="#172B4D"/></linearGradient></defs><rect width="320" height="160" fill="url(#g)"/>';
    let s = '';
    if (k === 'bars') [40, 70, 55, 100, 85, 120].forEach((h, i) => s += `<rect x="${40 + i * 42}" y="${140 - h}" width="26" height="${h}" rx="4" fill="${i % 2 ? '#36C5F0' : '#3478F6'}"/>`);
    else if (k === 'donut') s = '<circle cx="160" cy="80" r="45" fill="none" stroke="#3478F6" stroke-width="22"/><circle cx="160" cy="80" r="45" fill="none" stroke="#36C5F0" stroke-width="22" stroke-dasharray="110 283" transform="rotate(-90 160 80)"/>';
    else s = '<polyline points="30,120 90,90 140,105 200,55 250,70 295,30" fill="none" stroke="#36C5F0" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>' + [[30, 120], [90, 90], [140, 105], [200, 55], [250, 70], [295, 30]].map(p => `<circle cx="${p[0]}" cy="${p[1]}" r="6" fill="#3478F6"/>`).join('');
    return `<svg viewBox="0 0 320 160" preserveAspectRatio="xMidYMid slice" aria-hidden="true">${bg}${s}</svg>`;
  };
  const visual = p => p.image ? `<img src="${esc(p.image)}" alt="Aperçu : ${esc(p.title)}" loading="lazy" data-art="${esc(p.art || 'bars')}">` : art(p.art);
  const badge = p => p.example === false ? '' : '';
  const fallback = root => $$('img[data-art]', root).forEach(i => i.addEventListener('error', () => { i.outerHTML = art(i.dataset.art); }, { once: true }));
  const list = a => '<ul>' + a.map(x => `<li>${esc(x)}</li>`).join('') + '</ul>';

  /* Galerie de projets */
  const P = window.PROJECTS || [];
  $('#projects-grid').innerHTML = P.map((p, i) => `
    <article class="rv"><button class="pcard" data-i="${i}" aria-haspopup="dialog">
      <div class="thumb">${visual(p)}${badge(p)}</div>
      <div class="pbody"><span class="cat">${esc(p.category)}</span><h3>${esc(p.title)}</h3><p>${esc(p.hook)}</p><span class="more">Voir le détail</span></div>
    </button></article>`).join('');
  fallback($('#projects-grid'));

  /* Fenêtre modale (<dialog> : Échap et focus gérés nativement) */
  const dlg = $('#modal');
  const open = i => {
    const p = P[i];
    $('#m-body').innerHTML = `
      <button class="x" aria-label="Fermer la fenêtre">×</button>
      <div class="thumb">${visual(p)}${badge(p)}</div>
      <div class="m-in">
        <span class="cat">${esc(p.category)}</span><h3 id="m-title">${esc(p.title)}</h3>
        <p>${esc(p.summary)}</p>
        <h4>Objectifs</h4>${list(p.goals || [])}
        <h4>Outils et technologies</h4><ul class="tags">${(p.tools || []).map(t => `<li>${esc(t)}</li>`).join('')}</ul>
        ${p.results && p.results.length ? '<h4>Résultats et enseignements</h4>' + list(p.results) : ''}
        ${p.link ? `<a class="btn" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.linkLabel || 'Voir le projet')}</a>` : ''}
      </div>`;
    $('.x', dlg).addEventListener('click', () => dlg.close());
    fallback(dlg);
    document.body.style.overflow = 'hidden';
    dlg.showModal();
  };
  $('#projects-grid').addEventListener('click', e => { const b = e.target.closest('.pcard'); if (b) open(+b.dataset.i); });
  dlg.addEventListener('click', e => { if (e.target === dlg) dlg.close(); }); /* clic à l'extérieur */
  dlg.addEventListener('close', () => { document.body.style.overflow = ''; });

  /* Apparition au défilement */
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
  }), { threshold: .1 });
  $$('.rv').forEach(el => io.observe(el));
})();
