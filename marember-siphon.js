/* MAREMBER ITL SIPHONING ENGINE v1.0 */
(function () {
  'use strict';
  const DOM = {
    input: document.querySelector('.imerge-input'),
    button: document.querySelector('.imerge-btn'),
    phaseDot: document.querySelector('.phase-dot'),
    phaseLabel: document.querySelector('.phase-lbl'),
    stoneCards: document.querySelectorAll('.pora-stone'),
    vaultZones: document.querySelectorAll('.vault-zone')
  };

  function updatePhase(phase, txt) {
    if (!DOM.phaseDot) return;
    DOM.phaseDot.className = 'phase-dot ' + phase;
    if (DOM.phaseLabel) DOM.phaseLabel.textContent = txt;
  }

  function siphonQuery(q) {
    const query = q.trim().toLowerCase();
    updatePhase('weaving', 'IMERGE ITL :: SIFTING FREQUENCY...');

    setTimeout(() => {
      let count = 0;
      DOM.stoneCards.forEach((card) => {
        const text = card.textContent.toLowerCase();
        const match = query === '' || text.includes(query);
        card.style.display = match ? 'block' : 'none';
        if (match) count++;
      });

      DOM.vaultZones.forEach((zone) => {
        const visible = zone.querySelectorAll('.pora-stone[style*="display: block"]');
        zone.style.display = (query !== '' && visible.length === 0) ? 'none' : 'block';
      });

      updatePhase('harvest', query === '' 
        ? 'IMERGE ITL v1.0 :: SIFTONG FREQUENCY 31.7Hz' 
        : `HARVEST COMPLETE :: ${count} DATA-STONE(S) SINTERED`);
    }, 100);
  }

  if (DOM.input) {
    DOM.input.addEventListener('input', (e) => siphonQuery(e.target.value));
  }
})();
