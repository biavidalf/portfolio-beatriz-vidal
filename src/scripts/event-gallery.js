import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { setupScrollReveal } from './reveal.js';

const eventCarousel = document.querySelector('#event-carousel');
if (eventCarousel) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const toggleButton = document.querySelector('.gallery-toggle');
  const pauseLabel = toggleButton?.dataset.labelPause ?? 'Pausar';
  const playLabel = toggleButton?.dataset.labelPlay ?? 'Retomar';
  const splide = new Splide(eventCarousel, {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '18px',
    drag: 'free',
    snap: false,
    arrows: false,
    pagination: false,
    keyboard: 'focused',
    autoScroll: {
      speed: 0.45,
      autoStart: !prefersReducedMotion.matches,
      pauseOnHover: true,
      pauseOnFocus: true,
    },
    breakpoints: {
      1100: { perPage: 3, gap: '16px' },
      800: { perPage: 2, gap: '14px' },
      520: { perPage: 1, gap: '12px' },
    },
  });

  splide.mount({ AutoScroll });
  toggleButton?.closest('.gallery-pagination')?.removeAttribute('hidden');
  const autoScroll = splide.Components.AutoScroll;
  const syncToggle = () => {
    if (!toggleButton) return;
    const isPaused = autoScroll.isPaused();
    toggleButton.setAttribute('aria-pressed', String(isPaused));
    toggleButton.setAttribute('aria-label', isPaused ? playLabel : pauseLabel);
    const label = toggleButton.querySelector('.gallery-toggle-label');
    if (label) label.textContent = isPaused ? playLabel : pauseLabel;
  };

  toggleButton?.addEventListener('click', () => {
    if (autoScroll.isPaused()) autoScroll.play();
    else autoScroll.pause();
    syncToggle();
  });
  syncToggle();
}

setupScrollReveal([['.gallery-heading', 0]], document.querySelector('.event-gallery'));
