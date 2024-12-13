// Sample cart items (this would normally be dynamically added)
let cart = [
    { id: 1, name: "Classic Cheeseburger", price: 5.99, quantity: 1 },
    { id: 2, name: "BBQ Bacon Burger", price: 6.49, quantity: 2 },
    { id: 3, name: "Veggie Burger", price: 4.99, quantity: 1 }
];

// Function to display cart items
function displayCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = ""; // Clear previous items
    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const row = document.createElement("tr");

        // Item Name
        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        // Price
        const priceCell = document.createElement("td");
        priceCell.textContent = `$${item.price.toFixed(2)}`;
        row.appendChild(priceCell);

        // Quantity with buttons to modify
        const quantityCell = document.createElement("td");
        quantityCell.innerHTML = `
            <button class="btn btn-sm btn-warning" onclick="changeQuantity(${item.id}, -1)">-</button>
            <span class="mx-2">${item.quantity}</span>
            <button class="btn btn-sm btn-warning" onclick="changeQuantity(${item.id}, 1)">+</button>
        `;
        row.appendChild(quantityCell);

        // Total Price for the item
        const totalCell = document.createElement("td");
        totalCell.textContent = `$${(item.price * item.quantity).toFixed(2)}`;
        row.appendChild(totalCell);

        // Remove Button
        const removeCell = document.createElement("td");
        removeCell.innerHTML = `<button class="btn btn-sm btn-danger" onclick="removeItem(${item.id})">Remove</button>`;
        row.appendChild(removeCell);

        cartItemsContainer.appendChild(row);
    });

    // Update the total price
    document.getElementById("total-price").textContent = `$${totalPrice.toFixed(2)}`;
}

// Function to change quantity
function changeQuantity(id, delta) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) item.quantity = 1; // Prevent negative quantities
        displayCart();
    }
}

// Function to remove item from cart
function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    displayCart();
}

// Initial display of cart
displayCart();
