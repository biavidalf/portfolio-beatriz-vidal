export function setupScrollReveal(groups, root = document) {
  if (
    !('IntersectionObserver' in window) ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
    return;

  const targets = groups.flatMap(([selector, delay]) =>
    Array.from(root.querySelectorAll(selector), (element) => {
      element.classList.add('motion-reveal');
      element.style.setProperty('--motion-delay', `${delay}ms`);
      return element;
    }),
  );
  if (targets.length === 0) return;

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
  );

  document.documentElement.classList.add('motion-ready');
  targets.forEach((target) => {
    target.addEventListener('focusin', () => target.classList.add('is-visible'), { once: true });
    observer.observe(target);
  });
}
