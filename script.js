// Simulate user authentication with localStorage
function loginUser() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Simple hardcoded login check
    if (email === "user@example.com" && password === "password123") {
        localStorage.setItem("user", JSON.stringify({ email }));
        window.location.href = "home.html";
    } else {
        alert("Invalid credentials");
    }
}

// Simulate Google Sign-In (skipping actual OAuth for simplicity)
function googleLogin() {
    localStorage.setItem("user", JSON.stringify({ email: "googleuser@example.com" }));
    window.location.href = "home.html";
}

// Dynamically load menu items (simulated using static data)
async function loadMenu() {
    const menuContainer = document.getElementById("menu-container");

    const menu = [
        { name: "Pizza", price: 150, image: "assets/pizza.jpg" },
        { name: "Burger", price: 80, image: "assets/burger.jpg" }
    ];

    menu.forEach(food => {
        menuContainer.innerHTML += `
            <div class="menu-item">
                <img src="${food.image}" alt="${food.name}">
                <h3>${food.name} - ₹${food.price}</h3>
                <button onclick="addToCart('${food.name}', ${food.price})">Add to Cart</button>
            </div>`;
    });
}



// Display cart items
function displayCart() {
    const cartList = document.getElementById("cart-list");
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.forEach((food, index) => {
        cartList.innerHTML += `<li>${food.item} - ₹${food.price} 
            <button onclick="removeFromCart(${index})">Remove</button></li>`;
    });
}

// Remove items from the cart
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
}

// Simulate placing an order by storing the cart items
function placeOrder() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    
    // Save order in localStorage (could be extended to a server later)
    localStorage.setItem("order", JSON.stringify(cart));
    localStorage.removeItem("cart");
    alert("Order Placed!");
    window.location.href = "order.html";
}

// Fetch and display order status
function fetchOrders() {
    const order = JSON.parse(localStorage.getItem("order")) || [];
    const orderContainer = document.getElementById("orders");

    if (order.length === 0) {
        orderContainer.innerHTML = "<p>No orders placed.</p>";
        return;
    }

    order.forEach((food, index) => {
        orderContainer.innerHTML += <p>${food.item} - ₹${food.price}</p>;
    });
}

// Profile Management (Save to localStorage)
function saveProfile() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    localStorage.setItem("userProfile", JSON.stringify({ name, email }));
    alert("Profile Saved!");
}

// Load Menu When Menu Page Loads
if (document.getElementById("menu-container")) {
    loadMenu();
}