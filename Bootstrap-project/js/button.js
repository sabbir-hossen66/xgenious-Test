const buyNowButtons = document.querySelectorAll('.buy-now-btn');

// Add event listeners to show an alert when clicked
buyNowButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Product added to cart!');
  });
});