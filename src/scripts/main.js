import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

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

const accordionHoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
const workAccordions = Array.from(document.querySelectorAll('.work-accordion'));

function accordionMotionId(details) {
  const nextId = Number(details.dataset.motionId || 0) + 1;
  details.dataset.motionId = String(nextId);
  return nextId;
}

function expandAccordion(details, contentSelector = ':scope > .accordion-content') {
  const content = details.querySelector(contentSelector);
  if (!content || (details.open && !details.classList.contains('is-closing'))) return;

  if (reducedMotionQuery.matches) {
    details.open = true;
    details.classList.remove('is-closing', 'is-opening');
    content.style.height = 'auto';
    return;
  }

  const motionId = accordionMotionId(details);
  const currentHeight = content.getBoundingClientRect().height;
  details.open = true;
  details.classList.remove('is-closing');
  details.classList.add('is-opening');
  content.style.height = `${currentHeight}px`;

  window.requestAnimationFrame(() => {
    if (Number(details.dataset.motionId) !== motionId) return;
    content.style.height = `${content.scrollHeight}px`;
  });

  const finishOpening = (event) => {
    if (event.propertyName !== 'height') return;
    content.removeEventListener('transitionend', finishOpening);
    if (Number(details.dataset.motionId) !== motionId) return;
    content.style.height = 'auto';
    details.classList.remove('is-opening');
  };
  content.addEventListener('transitionend', finishOpening);
}

function collapseAccordion(details, contentSelector = ':scope > .accordion-content') {
  const content = details.querySelector(contentSelector);
  if (!content || !details.open) return;

  if (reducedMotionQuery.matches) {
    content.style.height = '0px';
    details.open = false;
    details.classList.remove('is-closing', 'is-opening');
    return;
  }

  const motionId = accordionMotionId(details);
  content.style.height = `${content.getBoundingClientRect().height}px`;
  details.classList.remove('is-opening');
  details.classList.add('is-closing');
  content.getBoundingClientRect();

  window.requestAnimationFrame(() => {
    if (Number(details.dataset.motionId) !== motionId) return;
    content.style.height = '0px';
  });

  const finishClosing = (event) => {
    if (event.propertyName !== 'height') return;
    content.removeEventListener('transitionend', finishClosing);
    if (Number(details.dataset.motionId) !== motionId) return;
    details.open = false;
    details.classList.remove('is-closing');
  };
  content.addEventListener('transitionend', finishClosing);
}

workAccordions.forEach((details) => {
  const summary = details.querySelector(':scope > summary');
  const content = details.querySelector(':scope > .accordion-content');
  const group = details.closest('.work-accordions');
  if (!summary || !content) return;

  content.style.height = details.open ? 'auto' : '0px';
  summary.addEventListener('click', (event) => {
    event.preventDefault();
    if (accordionHoverQuery.matches && details.matches(':hover')) return;
    if (details.open && !details.classList.contains('is-closing')) collapseAccordion(details);
    else expandAccordion(details);
  });

  details.addEventListener('pointerenter', () => {
    if (!accordionHoverQuery.matches) return;
    group?.classList.add('is-hovering');
    details.classList.add('is-hovered');
    expandAccordion(details);
  });

  details.addEventListener('pointerleave', () => {
    if (!accordionHoverQuery.matches) return;
    group?.classList.remove('is-hovering');
    details.classList.remove('is-hovered');
    collapseAccordion(details);
  });
});

const tiltQuery = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
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

if (!document.body.classList.contains('trajectory-page') &&
    'IntersectionObserver' in window &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealItems = [
    ['.projects .section-heading', 0],
    ['.work-tabs', 100],
    ['.work-panel .featured-project', 120],
    ['.about-image', 0],
    ['.about-copy', 120],
    ['.gallery-heading', 0],
    ['.contact-invitation', 0],
    ['.contact-links', 120],
  ];
  const targets = revealItems.flatMap(([selector, delay]) =>
    Array.from(document.querySelectorAll(selector), (element) => {
      element.classList.add('motion-reveal');
      element.style.setProperty('--motion-delay', `${delay}ms`);
      return element;
    })
  );
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
  document.documentElement.classList.add('motion-ready');
  targets.forEach((target) => {
    target.addEventListener('focusin', () => target.classList.add('is-visible'), { once: true });
    revealObserver.observe(target);
  });
}

const eventCarousel = document.querySelector('#event-carousel');
if (eventCarousel) {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const toggleButton = document.querySelector('.gallery-toggle');
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
    motionPreviews.forEach((video) => {
      if (reducedMotion.matches) {
        video.autoplay = false;
        video.pause();
      }
      previewObserver.observe(video);
    });
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
