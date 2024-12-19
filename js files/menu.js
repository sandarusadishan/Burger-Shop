// Menu items data array
let menuItems = [
    { id: 1, name: "Classic Cheeseburger", price: 900, category: "Burgers" },
    { id: 2, name: "BBQ Bacon Burger", price: 950, category: "Burgers" },
    { id: 3, name: "Veggie Burger", price: 850, category: "Burgers" },
    { id: 4, name: "Chicken Submarine", price: 800, category: "Submarines" },
    { id: 5, name: "Tuna Submarine", price: 850, category: "Submarines" },
    { id: 6, name: "Veggie Submarine", price: 750, category: "Submarines" },
    { id: 7, name: "Classic Fries", price: 400, category: "French Fries" },
    { id: 8, name: "Cheese Fries", price: 450, category: "French Fries" },
    { id: 9, name: "Spicy Fries", price: 475, category: "French Fries" },
    { id: 10, name: "Cola", price: 300, category: "Drinks" },
    { id: 11, name: "Sprite", price: 350, category: "Drinks" },
    { id: 12, name: "Fanta", price: 320, category: "Drinks" },
  ];
  
  // Function to render the menu
  function renderMenu() {
    const menuContainer = document.getElementById("menu-items");
    menuContainer.innerHTML = "";
  
    menuItems.forEach(item => {
      const itemHTML = `
        <div class="col-md-4 mb-4" id="item-${item.id}">
          <div class="card">
            <img src="asset/burgers/288747_GettyImages_Avocado-Burger-mit-Beef-scaled.jpg" class="card-img-top" alt="${item.name}" />
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">Price: LKR ${item.price}</p>
              <button class="btn btn-warning" onclick="editItem(${item.id})">Edit</button>
              <button class="btn btn-danger" onclick="deleteItem(${item.id})">Delete</button>
            </div>
          </div>
        </div>
      `;
      menuContainer.innerHTML += itemHTML;
    });
  }
  
  // Function to add a new menu item
  function addItem(name, price, category) {
    const newItem = {
      id: menuItems.length + 1,
      name: name,
      price: price,
      category: category
    };
    menuItems.push(newItem);
    renderMenu();
  }
  
  // Function to edit an existing menu item
  function editItem(id) {
    const item = menuItems.find(item => item.id === id);
    const newName = prompt("Enter the new name:", item.name);
    const newPrice = prompt("Enter the new price:", item.price);
    const newCategory = prompt("Enter the new category:", item.category);
  
    if (newName && newPrice && newCategory) {
      item.name = newName;
      item.price = newPrice;
      item.category = newCategory;
      renderMenu();
    }
  }
  
  // Function to delete a menu item
  function deleteItem(id) {
    menuItems = menuItems.filter(item => item.id !== id);
    renderMenu();
  }
  
  // Render the menu initially
  renderMenu();
  
  // Event listener for adding a new item
  document.getElementById("add-item-btn").addEventListener("click", function () {
    const name = prompt("Enter item name:");
    const price = prompt("Enter item price:");
    const category = prompt("Enter item category:");
  
    if (name && price && category) {
      addItem(name, parseFloat(price), category);
    }
  });
  