// JavaScript functionality will be added here
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.product button');
    const cartItemsList = document.querySelector('.cart-items');
    const checkoutBtn = document.querySelector('.checkout-btn');
  
    addToCartButtons.forEach(button => {
      button.addEventListener('click', addToCart);
    });
  
    function addToCart(event) {
      const product = event.target.parentNode;
      const productImage = product.querySelector('img').src;
      const productName = product.querySelector('h3').textContent;
      const productPrice = product.querySelector('p').textContent;
  
      const cartItem = document.createElement('li');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <img src="${productImage}" alt="${productName}">
        <div>
          <h4>${productName}</h4>
          <p>${productPrice}</p>
        </div>
        <button class="remove-btn">Remove</button>
      `;
  
      cartItemsList.appendChild(cartItem);
  
      const removeButtons = cartItemsList.querySelectorAll('.remove-btn');
      removeButtons.forEach(button => {
        button.addEventListener('click', removeCartItem);
      });
  
      updateCheckoutButtonState();
    }
  
    function removeCartItem(event) {
      const cartItem = event.target.parentNode;
      cartItem.remove();
  
      updateCheckoutButtonState();
    }
  
    function updateCheckoutButtonState() {
      const cartItems = document.querySelectorAll('.cart-item');
      if (cartItems.length > 0) {
        checkoutBtn.removeAttribute('disabled');
      } else {
        checkoutBtn.setAttribute('disabled', 'disabled');
      }
    }
  });
  