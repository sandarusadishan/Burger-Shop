let cart = [

    { id: 1, name: "Classic Cheeseburger", price: 900, quantity: 1 },
    { id: 2, name: "BBQ Bacon Burger", price: 950, quantity: 1 },
    { id: 3, name: "Veggie Burger", price: 850, quantity: 1 },
    
    
    { id: 4, name: "Chicken Submarine", price: 1100, quantity: 1 },
    { id: 5, name: "Tuna Submarine", price: 1200, quantity: 1 },
    { id: 6, name: "Veggie Submarine", price: 1000, quantity: 1 },
    
   
    { id: 7, name: "Classic Fries", price: 300, quantity: 1 },
    { id: 8, name: "Cheese Fries", price: 350, quantity: 1 },
    { id: 9, name: "Spicy Fries", price: 400, quantity: 1 },
    
  
    { id: 10, name: "Coca-Cola", price: 250, quantity: 1 },
    { id: 11, name: "Pepsi", price: 250, quantity: 1 },
    { id: 12, name: "7UP", price: 250, quantity: 1 }
];

function displayCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = ""; 
    let totalPrice = 0;

    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
        const row = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        const priceCell = document.createElement("td");
        priceCell.textContent = `LKR ${item.price.toFixed(2)}`;
        row.appendChild(priceCell);

        const quantityCell = document.createElement("td");
        quantityCell.innerHTML = `
            <button class="btn btn-sm btn-warning" onclick="changeQuantity(${item.id}, -1)">-</button>
            <span class="mx-2">${item.quantity}</span>
            <button class="btn btn-sm btn-warning" onclick="changeQuantity(${item.id}, 1)">+</button>
        `;
        row.appendChild(quantityCell);

        const totalCell = document.createElement("td");
        totalCell.textContent = `LKR ${(item.price * item.quantity).toFixed(2)}`;
        row.appendChild(totalCell);

        const removeCell = document.createElement("td");
        removeCell.innerHTML = `<button class="btn btn-sm btn-danger" onclick="removeItem(${item.id})">Remove</button>`;
        row.appendChild(removeCell);

        cartItemsContainer.appendChild(row);
    });


    document.getElementById("total-price").textContent = `LKR ${totalPrice.toFixed(2)}`;
}

function changeQuantity(id, delta) {
    const item = cart.find(item => item.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) item.quantity = 1;
        displayCart();
    }
}

function removeItem(id) {
    cart = cart.filter(item => item.id !== id);
    displayCart();
}

displayCart();
