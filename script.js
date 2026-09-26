'use strict';
const copyButton = document.querySelector('.copy-email');
const copyStatus = document.getElementById('copy-status');
if (copyButton && copyStatus && navigator.clipboard && window.isSecureContext) {
  copyButton.hidden = false;
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('beatrizvidal.dev@gmail.com');
      copyStatus.textContent = 'E-mail copiado. Até já!';
      copyButton.textContent = 'Copiado';
      window.setTimeout(() => { copyButton.textContent = 'Copiar'; }, 3000);
    } catch {
      copyStatus.textContent = 'Não foi possível copiar. O endereço está logo acima para você selecionar.';
    }
  });
}

const workTabs = Array.from(document.querySelectorAll('.work-tab'));
const workPanels = Array.from(document.querySelectorAll('.work-panel'));

function activateWorkTab(tab, moveFocus = false) {
  const panelId = tab.getAttribute('aria-controls');
  workTabs.forEach((item) => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    item.classList.toggle('is-active', selected);
  });
  workPanels.forEach((panel) => {
    panel.hidden = panel.id !== panelId;
  });
  if (moveFocus) tab.focus();
}

workTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateWorkTab(tab));
  tab.addEventListener('keydown', (event) => {
    let nextIndex = index;
    if (event.key === 'ArrowRight') nextIndex = (index + 1) % workTabs.length;
    else if (event.key === 'ArrowLeft') nextIndex = (index - 1 + workTabs.length) % workTabs.length;
    else if (event.key === 'Home') nextIndex = 0;
    else if (event.key === 'End') nextIndex = workTabs.length - 1;
    else return;
    event.preventDefault();
    activateWorkTab(workTabs[nextIndex], true);
  });
});

const eventCarousel = document.querySelector('#event-carousel');
if (eventCarousel && typeof window.Splide === 'function' && window.splide?.Extensions?.AutoScroll) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const toggleButton = document.querySelector('.gallery-toggle');
  const splide = new window.Splide(eventCarousel, {
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
      520: { perPage: 2, gap: '12px' },
    },
  });

  splide.mount(window.splide.Extensions);
  toggleButton?.closest('.gallery-pagination')?.removeAttribute('hidden');
  const autoScroll = splide.Components.AutoScroll;
  const syncToggle = () => {
    if (!toggleButton) return;
    const isPaused = autoScroll.isPaused();
    toggleButton.setAttribute('aria-pressed', String(isPaused));
    toggleButton.setAttribute('aria-label', isPaused ? 'Retomar carrossel' : 'Pausar carrossel');
    const label = toggleButton.querySelector('.gallery-toggle-label');
    if (label) label.textContent = isPaused ? 'Retomar' : 'Pausar';
  };

  toggleButton?.addEventListener('click', () => {
    if (autoScroll.isPaused()) autoScroll.play();
    else autoScroll.pause();
    syncToggle();
  });
  syncToggle();
}
const motionPreviews = Array.from(document.querySelectorAll('.motion-preview'));
if (motionPreviews.length && 'IntersectionObserver' in window) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const previewObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (entry.isIntersecting && !reducedMotion.matches) video.play().catch(() => {});
      else video.pause();
    });
  }, { threshold: 0.25 });
  motionPreviews.forEach((video) => previewObserver.observe(video));
}

const timelineShell = document.querySelector('.timeline-track-shell');
if (timelineShell && 'IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const timelineItems = Array.from(timelineShell.querySelectorAll('.timeline-item'));
  const progressFill = timelineShell.querySelector('.trajectory-rail-fill');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  document.documentElement.classList.add('scroll-motion-ready');
  timelineItems.forEach((item) => observer.observe(item));

  let progressFrame = 0;
  const updateTimelineProgress = () => {
    progressFrame = 0;
    if (!progressFill) return;
    const rect = timelineShell.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.58 - rect.top) / rect.height));
    progressFill.style.height = String(progress * 100) + '%';
  };
  const queueTimelineProgress = () => {
    if (progressFrame) return;
    progressFrame = window.requestAnimationFrame(updateTimelineProgress);
  };
  window.addEventListener('scroll', queueTimelineProgress, { passive: true });
  window.addEventListener('resize', queueTimelineProgress);
  updateTimelineProgress();
} else if (timelineShell) {
  timelineShell.querySelectorAll('.timeline-item').forEach((item) => item.classList.add('is-visible'));
}
