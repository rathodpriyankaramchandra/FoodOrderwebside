let cart = [];
let total = 0;


// 🏠 Close Menu Function
function toggleMenu() {
    let nav = document.querySelector("nav");
    nav.style.display = (nav.style.display === "none") ? "block" : "none";
}



// 🛒 food add sathi
function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

// 🛍 food update  sathi
function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");

    cartList.innerHTML = "";
    cart.forEach((product, index) => {
        let li = document.createElement("li");
        li.textContent = '${product.item} - ₹${product.price}';
        cartList.appendChild(li);
    });

    totalPrice.textContent = total;
}

// ✅ order place 
function placeOrder() {
    if (cart.length > 0) {
        alert("🎉 Your order has been placed successfully!");
        cart = [];
        total = 0;
        updateCart();
    } else {
        alert("⚠ Your cart is empty!");
    }
}


// 🔍  food search
function searchFood() {
    let searchValue = document.getElementById("search-box").value.toLowerCase();
    let foodItems = document.querySelectorAll(".food-item");

    foodItems.forEach(item => {
        let foodName = item.querySelector("h3").textContent.toLowerCase();
        if (foodName.includes(searchValue)) {
            item.style.display = "inline-block";
        } else {
            item.style.display = "none";
        }
    });
}