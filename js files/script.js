let cart = [
    { id: 1, name: "Classic Cheeseburger", price: 900, quantity: 1, image: "asset/burgers/288747_GettyImages_Avocado-Burger-mit-Beef-scaled.jpg" },
    { id: 2, name: "BBQ Bacon Burger", price: 950, quantity: 1, image: "asset/burgers/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg" },
    { id: 3, name: "Veggie Burger", price: 850, quantity: 1, image: "asset/burgers/4589_4k.jpg" },
    { id: 4, name: "Chicken Submarine", price: 1100, quantity: 1, image: "asset/bun/fresh-grilled-seafood-lemon-plate-generative-ai_188544-8288.avif" },
    { id: 5, name: "Tuna Submarine", price: 1200, quantity: 1, image: "asset/bun/istockphoto-619637444-612x612.jpg" },
    { id: 6, name: "Veggie Submarine", price: 1000, quantity: 1, image: "asset/bun/ss1.webp" },
    { id: 7, name: "Classic Fries", price: 300, quantity: 1, image: "asset/french frise/6c46024a2d6a4a6499c5a1a62d8cdd5b.png" },
    { id: 8, name: "Cheese Fries", price: 350, quantity: 1, image: "asset/french frise/french-fries.webp" },
    { id: 9, name: "Spicy Fries", price: 400, quantity: 1, image: "asset/french frise/Homemade-French-Fries_8.webp" },
    { id: 10, name: "Coca-Cola", price: 250, quantity: 1, image: "asset/cola.webp" },
    { id: 11, name: "Sprite", price: 250, quantity: 1, image: "asset/sprite.jpg" },
    { id: 12, name: "Fanta", price: 250, quantity: 1, image: "asset/fanta.jpg" }
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
