// script.js

// প্রোডাক্ট ডেটা (আপনি এখানে আরও ছবি যোগ করতে পারেন)
const products = [
    {
        id: 1,
        name: "Jordan 4 Retro Military Blue",
        price: "$210",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        name: "Jordan 4 Black Cat",
        price: "$450",
        image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        name: "Jordan 4 Red Thunder",
        price: "$280",
        image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        name: "Jordan 4 White Cement",
        price: "$300",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=500&q=80"
    }
];

const productGrid = document.getElementById('productGrid');

// ডাইনামিকভাবে প্রোডাক্ট কার্ড তৈরি করা
function displayProducts() {
    products.forEach(product => {
        const card = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="price">${product.price}</p>
                <button class="btn-primary" onclick="addToCart('${product.name}')">Buy Now</button>
            </div>
        `;
        productGrid.innerHTML += card;
    });
}

function addToCart(name) {
    alert(name + " has been added to your cart!");
}

// ওয়েবসাইট লোড হলে ফাংশনটি কল হবে
window.onload = displayProducts;