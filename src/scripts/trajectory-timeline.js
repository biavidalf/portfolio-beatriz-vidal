const timelineShell = document.querySelector('.timeline-track-shell');
if (
  timelineShell &&
  'IntersectionObserver' in window &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches
) {
  const timelineItems = Array.from(timelineShell.querySelectorAll('.timeline-item'));
  const progressFill = timelineShell.querySelector('.trajectory-rail-fill');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
  );

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
  timelineShell
    .querySelectorAll('.timeline-item')
    .forEach((item) => item.classList.add('is-visible'));
}
