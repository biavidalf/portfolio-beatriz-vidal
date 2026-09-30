import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const siteHeader = document.querySelector('.header');
if (siteHeader) {
  const updateStickyOffset = () => {
    document.documentElement.style.setProperty('--sticky-header-height', `${Math.ceil(siteHeader.getBoundingClientRect().height)}px`);
  };
  updateStickyOffset();
  if ('ResizeObserver' in window) new ResizeObserver(updateStickyOffset).observe(siteHeader);
  else window.addEventListener('resize', updateStickyOffset);
}

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
const workTabAnchor = document.querySelector('.work-tabs-anchor');

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
  window.requestAnimationFrame(() => workTabAnchor?.scrollIntoView({
    behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    block: 'start',
  }));
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
const accordionStates = new WeakMap();
const accordionSpring = { stiffness: 280, damping: 32, mass: 0.9 };

function settleAccordion(details, expanded) {
  const state = accordionStates.get(details);
  if (!state) return;
  if (state.frame !== null) window.cancelAnimationFrame(state.frame);
  state.frame = null;
  state.lastTime = null;
  state.velocity = 0;
  state.expanded = expanded;
  state.content.style.height = expanded ? 'auto' : '0px';
  details.open = expanded;
  state.height = expanded ? state.content.getBoundingClientRect().height : 0;
  details.classList.remove('is-opening', 'is-closing');
}

function setAccordionExpanded(details, expanded) {
  const state = accordionStates.get(details);
  if (!state || (state.expanded === expanded && state.frame === null)) return;
  if (reducedMotionQuery.matches) {
    settleAccordion(details, expanded);
    return;
  }

  if (!details.open) details.open = true;
  if (state.frame === null) state.height = state.content.getBoundingClientRect().height;
  state.content.style.height = `${state.height}px`;
  state.expanded = expanded;
  details.classList.toggle('is-opening', expanded);
  details.classList.toggle('is-closing', !expanded);
  if (state.frame !== null) return;

  const step = (time) => {
    const elapsed = state.lastTime === null ? 1 / 60 : Math.min((time - state.lastTime) / 1000, 1 / 30);
    state.lastTime = time;
    const target = state.expanded ? state.content.scrollHeight + state.content.clientTop : 0;
    const acceleration = (accordionSpring.stiffness * (target - state.height) - accordionSpring.damping * state.velocity) / accordionSpring.mass;
    state.velocity += acceleration * elapsed;
    state.height = Math.max(0, state.height + state.velocity * elapsed);
    state.content.style.height = `${state.height}px`;

    if (Math.abs(target - state.height) < 0.75 && Math.abs(state.velocity) < 8) {
      settleAccordion(details, state.expanded);
      return;
    }
    state.frame = window.requestAnimationFrame(step);
  };
  state.lastTime = null;
  state.frame = window.requestAnimationFrame(step);
}

document.querySelectorAll('.work-accordions').forEach((group) => {
  group.addEventListener('pointerenter', () => {
    if (accordionHoverQuery.matches) group.classList.add('is-hovering');
  });
  group.addEventListener('pointerleave', () => group.classList.remove('is-hovering'));
});

workAccordions.forEach((details) => {
  const summary = details.querySelector(':scope > summary');
  const content = details.querySelector(':scope > .accordion-content');
  if (!summary || !content) return;

  accordionStates.set(details, { content, expanded: details.open, height: 0, velocity: 0, frame: null, lastTime: null });
  content.style.height = details.open ? 'auto' : '0px';
  summary.addEventListener('click', (event) => {
    event.preventDefault();
    if (accordionHoverQuery.matches && details.matches(':hover') && event.detail > 0) return;
    setAccordionExpanded(details, !accordionStates.get(details).expanded);
  });

  details.addEventListener('pointerenter', () => {
    if (!accordionHoverQuery.matches) return;
    details.classList.add('is-hovered');
    setAccordionExpanded(details, true);
  });

  details.addEventListener('pointerleave', () => {
    if (!accordionHoverQuery.matches) return;
    details.classList.remove('is-hovered');
    setAccordionExpanded(details, false);
  });
});

reducedMotionQuery.addEventListener('change', () => {
  if (!reducedMotionQuery.matches) return;
  workAccordions.forEach((details) => {
    const state = accordionStates.get(details);
    if (state && state.frame !== null) settleAccordion(details, state.expanded);
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

  const stopTimer = () => {
    if (timer !== null) window.clearTimeout(timer);
    timer = null;
  };
  const updatePauseButton = () => {
    if (!pauseButton) return;
    pauseButton.textContent = paused ? 'Reproduzir' : 'Pausar';
    pauseButton.setAttribute('aria-pressed', String(paused));
  };
  const showSlide = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });
    if (counter) counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
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
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.intersectionRatio >= 0.35;
      scheduleSlide();
    }, { threshold: 0.35 });
    observer.observe(aboutSlideshow);
  } else {
    const updateVisibility = () => {
      const bounds = aboutSlideshow.getBoundingClientRect();
      const visible = bounds.bottom > window.innerHeight * 0.2 && bounds.top < window.innerHeight * 0.8;
      if (visible === inView) return;
      inView = visible;
      scheduleSlide();
    };
    window.addEventListener('scroll', updateVisibility, { passive: true });
    window.addEventListener('resize', updateVisibility);
    updateVisibility();
  }
}

if (!document.body.classList.contains('trajectory-page') &&
    'IntersectionObserver' in window &&
    !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const revealItems = [
    ['.projects .section-heading', 0],
    ['.work-panel .featured-project', 120],
    ['.about-image', 0],
    ['.about-copy', 120],
    ['.gallery-heading', 0],
    ['.contact-cta', 0],
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
