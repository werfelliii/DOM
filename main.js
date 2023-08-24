const likeBtns = document.querySelectorAll('.like-btn');
const totalAmount = document.getElementById('total-amount');
const quantityBtns = document.querySelectorAll('.quantity-btn');
let totalPrice = 0; // Initial price

likeBtns.forEach(button => {
  button.addEventListener('click', (event) => {
    const item = event.target.closest('.item');
    const quantityElement = item.querySelector('.quantity');
    const priceElement = item.querySelector('.price');
    const price = parseFloat(priceElement.innerText.slice(1));
    
    if (event.target.classList.contains('liked')) {
      event.target.classList.remove('liked');
      event.target.innerText = '🖤';;
    } else {
      event.target.classList.add('liked');
      event.target.innerText = '❤';
      ;
    }
    
    totalAmount.innerText = `$${totalPrice.toFixed(2)}`;
  });
});


quantityBtns.forEach(button => {
  button.addEventListener('click', (event) => {
    const item = event.target.closest('.item');
    const quantityElement = item.querySelector('.quantity');
    const priceElement = item.querySelector('.price');
    const price = parseFloat(priceElement.innerText.slice(1));
    
    if (event.target.classList.contains('plus')) {
      quantityElement.innerText = parseInt(quantityElement.innerText) + 1;
      totalPrice += price;
    } else if (event.target.classList.contains('minus')) {
      const currentQuantity = parseInt(quantityElement.innerText);
      if (currentQuantity > 1) {
        quantityElement.innerText = currentQuantity - 1;
        totalPrice -= price;
      }
    }
    
    totalAmount.innerText = `$${totalPrice.toFixed(2)}`;
  });
});
