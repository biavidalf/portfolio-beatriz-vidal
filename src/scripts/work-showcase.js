import { setupScrollReveal } from './reveal.js';

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
  window.requestAnimationFrame(() =>
    workTabAnchor?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
      block: 'start',
    }),
  );
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
    const elapsed =
      state.lastTime === null ? 1 / 60 : Math.min((time - state.lastTime) / 1000, 1 / 30);
    state.lastTime = time;
    const target = state.expanded ? state.content.scrollHeight + state.content.clientTop : 0;
    const acceleration =
      (accordionSpring.stiffness * (target - state.height) -
        accordionSpring.damping * state.velocity) /
      accordionSpring.mass;
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

  accordionStates.set(details, {
    content,
    expanded: details.open,
    height: 0,
    velocity: 0,
    frame: null,
    lastTime: null,
  });
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
const motionPreviews = Array.from(document.querySelectorAll('.motion-preview'));
if (motionPreviews.length && 'IntersectionObserver' in window) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const previewObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting && !reducedMotion.matches) video.play().catch(() => {});
        else video.pause();
      });
    },
    { threshold: 0.25 },
  );
  motionPreviews.forEach((video) => {
    if (reducedMotion.matches) {
      video.autoplay = false;
      video.pause();
    }
    previewObserver.observe(video);
  });
}

setupScrollReveal(
  [
    ['.section-heading', 0],
    ['.work-panel .featured-project', 120],
  ],
  document.querySelector('.projects'),
);
