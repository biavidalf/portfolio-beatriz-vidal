import { setupScrollReveal } from './reveal.js';

const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const aboutSlideshow = document.querySelector('.about-slideshow');
if (aboutSlideshow) {
  const slides = Array.from(aboutSlideshow.querySelectorAll('.about-slide'));
  const controls = aboutSlideshow.parentElement.querySelector('.about-slide-controls');
  const counter = controls?.querySelector('.about-slide-count');
  const pauseButton = controls?.querySelector('[data-about-pause]');
  let current = 0;
  let timer = null;
  let inView = false;
  let paused = reducedMotionQuery.matches;
  const pauseLabel = pauseButton?.dataset.labelPause ?? 'Pausar';
  const playLabel = pauseButton?.dataset.labelPlay ?? 'Reproduzir';

  const stopTimer = () => {
    if (timer !== null) window.clearTimeout(timer);
    timer = null;
  };
  const updatePauseButton = () => {
    if (!pauseButton) return;
    pauseButton.textContent = paused ? playLabel : pauseLabel;
    pauseButton.setAttribute('aria-pressed', String(paused));
  };
  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    if (counter)
      counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  };
  const scheduleSlide = () => {
    stopTimer();
    if (!inView || paused || document.hidden || slides.length < 2) return;
    timer = window.setTimeout(() => {
      showSlide(current + 1);
      scheduleSlide();
    }, 3000);
  };

  controls?.removeAttribute('hidden');
  updatePauseButton();
  controls?.querySelector('[data-about-prev]')?.addEventListener('click', () => {
    showSlide(current - 1);
    scheduleSlide();
  });
  controls?.querySelector('[data-about-next]')?.addEventListener('click', () => {
    showSlide(current + 1);
    scheduleSlide();
  });
  pauseButton?.addEventListener('click', () => {
    paused = !paused;
    updatePauseButton();
    scheduleSlide();
  });
  document.addEventListener('visibilitychange', scheduleSlide);
  reducedMotionQuery.addEventListener('change', () => {
    if (reducedMotionQuery.matches) paused = true;
    updatePauseButton();
    scheduleSlide();
  });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.intersectionRatio >= 0.35;
        scheduleSlide();
      },
      { threshold: 0.35 },
    );
    observer.observe(aboutSlideshow);
  } else {
    const updateVisibility = () => {
      const bounds = aboutSlideshow.getBoundingClientRect();
      const visible =
        bounds.bottom > window.innerHeight * 0.2 && bounds.top < window.innerHeight * 0.8;
      if (visible === inView) return;
      inView = visible;
      scheduleSlide();
    };
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);
    updateVisibility();
  }
}

setupScrollReveal(
  [
    ['.about-image', 0],
    ['.about-copy', 120],
  ],
  document.querySelector('.about'),
);
