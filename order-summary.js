document.addEventListener('DOMContentLoaded', () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const orderName = urlParams.get('orderName');
    const orderPrice = parseFloat(urlParams.get('orderPrice'));

    const orderDetails = document.getElementById('order-details');
    const totalPrice = document.getElementById('total-price');

    orderDetails.textContent = `Order: ${orderName}`;
    totalPrice.textContent = `₹${orderPrice.toFixed(2)}`;

    document.getElementById('confirm-order').addEventListener('click', () => {
        alert('Your order is confirmed. Thank you for your order! 😊');
    });

    document.getElementById('go-back').addEventListener('click', () => {
        window.history.back();
    });
});
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('orderName');
const price = parseFloat(urlParams.get('orderPrice'));

const orderDetails = document.getElementById('order-details');
const totalPrice = document.getElementById('total-price');

orderDetails.textContent = `Order: ${name}`;
totalPrice.textContent = `₹${price.toFixed(2)}`;

const confirmOrderButton = document.getElementById('confirm-order');
const totalAmount = parseFloat(totalPrice.textContent.replace('₹', ''));

confirmOrderButton.addEventListener('click', () => {
  alert(`Your order for ${name} is confirmed. The total amount is ₹${totalAmount.toFixed(2)}. Thank you for your order! 😊`);
});
const orderButtons = document.querySelectorAll('button[id^="order-button-"]');

orderButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const orderName = button.id.split('-')[2];
    const orderPrice = button.id.split('-')[3];

    // Create a new URL with query parameters
    const url = new URL('order-summary.html');
    url.searchParams.set('orderName', orderName);
    url.searchParams.set('orderPrice', orderPrice);

    // Open the new URL in a new tab
    window.open(url);
  });
});

