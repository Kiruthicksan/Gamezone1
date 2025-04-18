document.addEventListener('DOMContentLoaded', () => {
  const scrollContainers = document.querySelectorAll('.scroll-container');

  scrollContainers.forEach(scrollContainer => {
    scrollContainer.addEventListener('wheel', (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault();
        scrollContainer.scrollLeft += e.deltaY;
      }
    });
  });
});
