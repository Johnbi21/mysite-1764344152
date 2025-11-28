// Main JavaScript for Gonnet.NET

// API configuration
const PRODUCTS_API = 'https://fakestoreapi.com/products';

// Load featured products
async function loadFeaturedProducts() {
    const container = document.getElementById('featured-products');
    
    // Show loading state
    container.innerHTML = `
        <div class="col-span-4 text-center py-8">
            <div class="loading inline-block w-8 h-8 bg-orange-500 rounded-full"></div>
            <p class="mt-2 text-gray-600">Chargement des produits...</p>
        </div>
    `;

    try {
        const response = await fetch(PRODUCTS_API);
        const products = await response.json();
        
        // Display first 8 products
        const featuredProducts = products.slice(0, 8);
        
        container.innerHTML = featuredProducts.map(product => `
            <div class="product-card bg-white rounded-lg shadow-md overflow-hidden">
                <div class="relative">
                    <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover">
                    <div class="absolute top-2 right-2">
                        <button class="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition duration-300">
                            <i data-feather="heart" class="w-4 h-4 text-gray-600"></i>
                        </button>
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="font-semibold text-sm mb-2 line-clamp-2">${product.title}</h3>
                    <div class="flex items-center justify-between mb-2">
                        <span class="text-orange-500 font-bold text-lg">${(product.price * 650).toLocaleString('fr-CI')} FCFA</span>
                        <div class="flex items-center">
                            <i data-feather="star" class="w-4 h-4 text-yellow-400 fill-current"></i>
                            <span class="text-sm text-gray-600 ml-1">${product.rating?.rate || '4.5'}</span>
                        </div>
                    </div>
                    <button class="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg transition duration-300 font-semibold">
                        Ajouter au panier
                    </button>
                </div>
            </div>
        `).join('');
        
        // Replace feather icons after dynamic content
        feather.replace();
        
    } catch (error) {
        console.error('Error loading products:', error);
        container.innerHTML = `
            <div class="col-span-4 text-center py-8">
                <i data-feather="alert-circle" class="w-12 h-12 text-red-500 mx-auto"></i>
                <p class="mt-2 text-red-500">Erreur lors du chargement des produits</p>
                <button onclick="loadFeaturedProducts()" class="mt-4 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-300">
                    Réessayer
                </button>
            </div>
        `;
        feather.replace();
    }
}

// Search functionality
function searchProducts(query) {
    // Implement search logic here
    console.log('Searching for:', query);
    // This would typically filter products or make an API call
}

// Cart functionality
let cart = JSON.parse(localStorage.getItem('gonnet-cart')) || [];

function addToCart(product) {
    cart.push(product);
    localStorage.setItem('gonnet-cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Produit ajouté au panier');
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(full)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});