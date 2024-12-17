let cart = [
    { id: 1, name: "Classic Cheeseburger", price: 900, quantity: 1, image: "asset/burgers/classic-cheeseburger.jpg" },
    { id: 2, name: "BBQ Bacon Burger", price: 950, quantity: 1, image: "asset/burgers/bbq-bacon-burger.jpg" },
    { id: 3, name: "Veggie Burger", price: 850, quantity: 1, image: "asset/burgers/veggie-burger.jpg" },
    { id: 4, name: "Chicken Submarine", price: 1100, quantity: 1, image: "asset/burgers/chicken-submarine.jpg" },
    { id: 5, name: "Tuna Submarine", price: 1200, quantity: 1, image: "asset/burgers/tuna-submarine.jpg" },
    { id: 6, name: "Veggie Submarine", price: 1000, quantity: 1, image: "asset/burgers/veggie-submarine.jpg" },
    { id: 7, name: "Classic Fries", price: 300, quantity: 1, image: "asset/fries/classic-fries.jpg" },
    { id: 8, name: "Cheese Fries", price: 350, quantity: 1, image: "asset/fries/cheese-fries.jpg" },
    { id: 9, name: "Spicy Fries", price: 400, quantity: 1, image: "asset/fries/spicy-fries.jpg" },
    { id: 10, name: "Coca-Cola", price: 250, quantity: 1, image: "asset/drinks/coca-cola.jpg" },
    { id: 11, name: "Pepsi", price: 250, quantity: 1, image: "asset/drinks/pepsi.jpg" },
    { id: 12, name: "7UP", price: 250, quantity: 1, image: "asset/drinks/7up.jpg" }
];

let discount = 0;

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

        const imageCell = document.createElement("td");
        const image = document.createElement("img");
        image.src = item.image;
        imageCell.appendChild(image);
        row.appendChild(imageCell);

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

    totalPrice = totalPrice - discount;
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

function applyDiscount() {
    const promoCode = document.getElementById("promo-code").value.toLowerCase();
    const discountMessage = document.getElementById("discount-message");

    if (promoCode === "save20") {
        discount = 0.20 * calculateTotalPrice();
        discountMessage.textContent = "Discount Applied: 20% Off!";
        displayCart();
    } else {
        discountMessage.textContent = "Invalid Promo Code.";
    }
}

function calculateTotalPrice() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

displayCart();
