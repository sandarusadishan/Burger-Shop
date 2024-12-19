// This file contains JavaScript functions to manage the shopping cart, including adding items to the cart and displaying the cart contents.

let cart = [];

function addToCart(item, price) {
    const cartItem = { item, price };
    cart.push(cartItem);
    alert(`${item} has been added to your cart for LKR ${price}`);
}

function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach((cartItem, index) => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <p>${cartItem.item} - LKR ${cartItem.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(itemElement);
    });
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function clearCart() {
    cart = [];
    displayCart();
}