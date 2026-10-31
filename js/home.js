// ===== Hero product viewer tabs =====
(function () {
    const tabs = document.querySelectorAll('.tab');
    const shot = document.querySelector('.viewer .shot');
    const img = shot && shot.querySelector('img');
    const title = document.querySelector('.viewer__bar .mono');
    if (!img) return;

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((t) => t.setAttribute('aria-selected', String(t === tab)));
            img.src = tab.dataset.img;
            img.alt = tab.dataset.alt;
            title.textContent = tab.dataset.title;
            shot.classList.toggle('shot--contain', tab.hasAttribute('data-contain'));
        });
    });
})();

// ===== Work filters =====
(function () {
    const buttons = document.querySelectorAll('.fbtn');
    const cards = document.querySelectorAll('#work .card[data-tags]');
    const result = document.querySelector('.work__count');
    if (!buttons.length) return;

    const fits = (id, card) => id === 'all' || card.dataset.tags.split(' ').includes(id);
    const countFor = (id) => [...cards].filter((card) => fits(id, card)).length;

    buttons.forEach((btn) => {
        btn.querySelector('.mono').textContent = countFor(btn.dataset.filter);
        btn.addEventListener('click', () => {
            const id = btn.dataset.filter;
            buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
            cards.forEach((card) => { card.hidden = !fits(id, card); });
            result.textContent = 'Showing ' + countFor(id) + ' of ' + cards.length + ' products';
        });
    });
})();

// ===== Experience accordion =====
(function () {
    const buttons = document.querySelectorAll('.exp-btn');

    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const open = btn.getAttribute('aria-expanded') !== 'true';
            buttons.forEach((b) => {
                const isThis = b === btn && open;
                b.setAttribute('aria-expanded', String(isThis));
                b.querySelector('.exp-ico').textContent = isThis ? '−' : '+';
                document.getElementById(b.getAttribute('aria-controls')).hidden = !isThis;
            });
        });
    });
})();

// ===== More courses toggle =====
(function () {
    const btn = document.querySelector('.certs-toggle');
    if (!btn) return;
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    const total = panel.querySelectorAll('.chip').length;

    btn.addEventListener('click', () => {
        const open = btn.getAttribute('aria-expanded') !== 'true';
        btn.setAttribute('aria-expanded', String(open));
        panel.hidden = !open;
        btn.textContent = open ? 'Hide the other courses' : 'Show ' + total + ' more courses';
    });
})();

// ===== Google Analytics =====
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'G-WF03MQCYHW');
