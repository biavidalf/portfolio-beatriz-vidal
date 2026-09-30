const siteHeader = document.querySelector('.header');
if (siteHeader) {
  const updateStickyOffset = () => {
    document.documentElement.style.setProperty(
      '--sticky-header-height',
      `${Math.ceil(siteHeader.getBoundingClientRect().height)}px`,
    );
  };
  updateStickyOffset();
  if ('ResizeObserver' in window) new ResizeObserver(updateStickyOffset).observe(siteHeader);
  else window.addEventListener('resize', updateStickyOffset);
}
