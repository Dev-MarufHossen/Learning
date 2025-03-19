const cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const productName = button.parentElement.querySelector('h2').innerText;
    cart.push(productName);
    alert(`${productName} has been added to your cart.`);
    // Update cart display logic here
  });
});
