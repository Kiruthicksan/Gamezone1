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


  const cartButtons = document.querySelectorAll('.btn-add-cart');
  const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));

  cartButtons.forEach(button => {
    button.addEventListener('click', () => {
      cartModal.show();
    });
  });


