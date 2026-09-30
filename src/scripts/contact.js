import { setupScrollReveal } from './reveal.js';

const copyButton = document.querySelector('.copy-email');
const copyStatus = document.getElementById('copy-status');
const contactCopy = document.querySelector('.contact')?.dataset;
if (copyButton && copyStatus && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('beatrizvidal.dev@gmail.com');
      copyStatus.textContent = contactCopy?.copiedStatus ?? 'E-mail copiado. Até já!';
      copyButton.textContent = contactCopy?.copiedButton ?? 'Copiado';
      window.setTimeout(() => {
        copyButton.textContent = contactCopy?.copyButton ?? 'Copiar';
      }, 3000);
    } catch {
      copyStatus.textContent = contactCopy?.copyFailure ?? 'Não foi possível copiar o endereço.';
    }
  });
}
const tiltQuery = window.matchMedia(
  '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)',
);
document.querySelectorAll('.contact-item').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    if (!tiltQuery.matches) return;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width;
    const y = (event.clientY - bounds.top) / bounds.height;
    card.style.setProperty('--tilt-x', `${((0.5 - y) * 5).toFixed(2)}deg`);
    card.style.setProperty('--tilt-y', `${((x - 0.5) * 6).toFixed(2)}deg`);
    card.style.setProperty('--shine-x', `${(x * 100).toFixed(1)}%`);
    card.style.setProperty('--shine-y', `${(y * 100).toFixed(1)}%`);
  });

  card.addEventListener('pointerleave', () => {
    card.style.setProperty('--tilt-x', '0deg');
    card.style.setProperty('--tilt-y', '0deg');
    card.style.setProperty('--shine-x', '50%');
    card.style.setProperty('--shine-y', '50%');
  });
});

setupScrollReveal(
  [
    ['.contact-invitation', 0],
    ['.contact-links', 120],
  ],
  document.querySelector('.contact'),
);
