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

const eventCarousel = document.querySelector('.event-carousel');
if (eventCarousel) {
  const eventCards = Array.from(eventCarousel.querySelectorAll('.event-card'));
  const pagination = document.querySelector('.gallery-pagination');
  const dots = document.querySelector('.gallery-dots');
  const toggleButton = document.querySelector('.gallery-toggle');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let activeIndex = 0;
  let paused = prefersReducedMotion.matches;
  let manuallyStarted = false;
  let hovered = false;
  let focused = false;
  let timer = 0;
  let resetTimer = 0;

  const firstCard = eventCards[0];
  if (firstCard && eventCards.length > 1) {
    const loopCard = firstCard.cloneNode(true);
    loopCard.classList.add('event-card-clone');
    loopCard.setAttribute('aria-hidden', 'true');
    eventCarousel.append(loopCard);
  }

  const dotButtons = eventCards.map((card, index) => {
    const button = document.createElement('button');
    const label = card.querySelector('figcaption')?.textContent.trim() || `Foto ${index + 1}`;
    button.type = 'button';
    button.className = 'gallery-dot';
    button.setAttribute('aria-label', `Mostrar foto: ${label}`);
    button.addEventListener('click', () => goTo(index));
    dots?.append(button);
    return button;
  });

  const updateDots = () => {
    dotButtons.forEach((button, index) => {
      const selected = index === activeIndex;
      button.classList.toggle('is-active', selected);
      if (selected) button.setAttribute('aria-current', 'true');
      else button.removeAttribute('aria-current');
    });
  };

  const goTo = (index, behavior = 'smooth') => {
    activeIndex = index % eventCards.length;
    updateDots();
    if (index >= eventCards.length) {
      const clone = eventCarousel.querySelector('.event-card-clone');
      if (clone) {
        eventCarousel.scrollTo({ left: clone.offsetLeft, behavior });
        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(() => {
          eventCarousel.scrollLeft = 0;
          activeIndex = 0;
          updateDots();
        }, behavior === 'smooth' ? 650 : 0);
        return;
      }
    }
    eventCarousel.scrollTo({ left: eventCards[activeIndex].offsetLeft, behavior });
  };

  const updateFromScroll = () => {
    const width = eventCarousel.clientWidth || 1;
    const visualIndex = Math.round(eventCarousel.scrollLeft / width);
    activeIndex = visualIndex >= eventCards.length ? 0 : Math.min(eventCards.length - 1, visualIndex);
    updateDots();
  };

  const updateToggle = () => {
    if (!toggleButton) return;
    toggleButton.setAttribute('aria-pressed', String(paused));
    toggleButton.setAttribute('aria-label', paused ? 'Retomar carrossel' : 'Pausar carrossel');
  };

  const scheduleAutoplay = () => {
    window.clearInterval(timer);
    if (paused || hovered || focused || document.hidden) return;
    if (prefersReducedMotion.matches && !manuallyStarted) return;
    timer = window.setInterval(() => goTo(activeIndex + 1), 5200);
  };

  toggleButton?.addEventListener('click', () => {
    paused = !paused;
    if (!paused) manuallyStarted = true;
    updateToggle();
    scheduleAutoplay();
  });
  eventCarousel.addEventListener('scroll', updateFromScroll, { passive: true });
  eventCarousel.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return;
    event.preventDefault();
    goTo(event.key === 'ArrowRight'
      ? activeIndex + 1
      : (activeIndex + eventCards.length - 1) % eventCards.length);
  });
  eventCarousel.addEventListener('pointerenter', () => { hovered = true; scheduleAutoplay(); });
  eventCarousel.addEventListener('pointerleave', () => { hovered = false; scheduleAutoplay(); });
  eventCarousel.addEventListener('focusin', () => { focused = true; scheduleAutoplay(); });
  eventCarousel.addEventListener('focusout', (event) => {
    if (!eventCarousel.contains(event.relatedTarget)) { focused = false; scheduleAutoplay(); }
  });
  pagination?.addEventListener('pointerenter', () => { hovered = true; scheduleAutoplay(); });
  pagination?.addEventListener('pointerleave', () => { hovered = false; scheduleAutoplay(); });
  pagination?.addEventListener('focusin', () => { focused = true; scheduleAutoplay(); });
  pagination?.addEventListener('focusout', (event) => {
    if (!pagination.contains(event.relatedTarget)) { focused = false; scheduleAutoplay(); }
  });
  document.addEventListener('visibilitychange', scheduleAutoplay);
  prefersReducedMotion.addEventListener?.('change', scheduleAutoplay);
  window.addEventListener('resize', updateFromScroll);
  updateDots();
  updateToggle();
  scheduleAutoplay();
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
