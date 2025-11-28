class CustomHeader extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                .header {
                    background: white;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                    position: sticky;
                    top: 0;
                    z-index: 1000;
                }
                
                .nav-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 1rem;
                }
                
                .top-bar {
                    background: #f8f9fa;
                    padding: 0.5rem 0;
                    border-bottom: 1px solid #e9ecef;
                }
                
                .top-bar-content {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-size: 0.875rem;
                    color: #6c757d;
                }
                
                .main-nav {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 1rem 0;
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: bold;
                    color: #f97316;
                    text-decoration: none;
                }
                
                .search-container {
                    flex: 1;
                    max-width: 600px;
                    margin: 0 2rem;
                    position: relative;
                }
                
                .search-input {
                    width: 100%;
                    padding: 0.75rem 1rem 0.75rem 2.5rem;
                    border: 2px solid #e9ecef;
                    border-radius: 0.5rem;
                    font-size: 0.875rem;
                    outline: none;
                    transition: border-color 0.3s ease;
                }
                
                .search-input:focus {
                    border-color: #f97316;
                }
                
                .search-icon {
                    position: absolute;
                    left: 0.75rem;
                    top: 50%;
                    transform: translateY(-50%);
                    color: #6c757d;
                }
                
                .nav-actions {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                
                .nav-action {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-decoration: none;
                    color: #6c757d;
                    font-size: 0.75rem;
                    transition: color 0.3s ease;
                }
                
                .nav-action:hover {
                    color: #f97316;
                }
                
                .action-icon {
                    width: 1.25rem;
                    height: 1.25rem;
                    margin-bottom: 0.25rem;
                }
                
                .cart-count {
                    background: #f97316;
                    color: white;
                    border-radius: 50%;
                    width: 1rem;
                    height: 1rem;
                    font-size: 0.625rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    top: -0.25rem;
                    right: -0.25rem;
                }
                
                .category-nav {
                    border-top: 1px solid #e9ecef;
                    padding: 0.75rem 0;
                }
                
                .category-list {
                    display: flex;
                    gap: 1.5rem;
                    list-style: none;
                }
                
                .category-link {
                    text-decoration: none;
                    color: #6c757d;
                    font-size: 0.875rem;
                    transition: color 0.3s ease;
                    white-space: nowrap;
                }
                
                .category-link:hover {
                    color: #f97316;
                }
                
                @media (max-width: 768px) {
                    .main-nav {
                        flex-direction: column;
                        gap: 1rem;
                    }
                    
                    .search-container {
                        margin: 0;
                        max-width: none;
                    }
                    
                    .category-nav {
                        overflow-x: auto;
                        -webkit-overflow-scrolling: touch;
                    }
                    
                    .category-list {
                        gap: 1rem;
                    }
                    
                    .top-bar-content {
                        flex-direction: column;
                        gap: 0.5rem;
                        text-align: center;
                    }
                }
            </style>
            
            <header class="header">
                <!-- Top Bar -->
                <div class="top-bar">
                    <div class="nav-container">
                        <div class="top-bar-content">
                            <div>Livraison gratuite à partir de 50 000 FCFA</div>
                            <div>
                                <a href="#" style="text-decoration: none; color: inherit; margin-right: 1rem;">Aide</a>
                                <a href="#" style="text-decoration: none; color: inherit;">Vendre sur Gonnet.NET</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- Main Navigation -->
                <div class="nav-container">
                    <div class="main-nav">
                        <!-- Logo -->
                        <a href="/" class="logo">GONNET.NET</a>
                        
                        <!-- Search Bar -->
                        <div class="search-container">
                            <i data-feather="search" class="search-icon"></i>
                            <input type="text" placeholder="Rechercher un produit..." class="search-input">
                        </div>
                        
                        <!-- Navigation Actions -->
                        <div class="nav-actions">
                            <a href="#" class="nav-action">
                                <i data-feather="user" class="action-icon"></i>
                                <span>Compte</span>
                            </a>
                            <a href="#" class="nav-action">
                                <i data-feather="heart" class="action-icon"></i>
                                <span>Favoris</span>
                            </a>
                            <a href="/cart.html" class="nav-action" style="position: relative;">
                                <i data-feather="shopping-cart" class="action-icon"></i>
                                <span>Panier</span>
                                <span class="cart-count">0</span>
                            </a>
                        </div>
                    </div>
                </div>
                
                <!-- Category Navigation -->
                <div class="nav-container">
                    <nav class="category-nav">
                        <ul class="category-list">
                            <li><a href="#" class="category-link">Téléphones & Tablettes</a></li>
                            <li><a href="#" class="category-link">Électronique</a></li>
                            <li><a href="#" class="category-link">Informatique</a></li>
                            <li><a href="#" class="category-link">Mode</a></li>
                            <li><a href="#" class="category-link">Maison & Cuisine</a></li>
                            <li><a href="#" class="category-link">TV & Audio</a></li>
                            <li><a href="#" class="category-link">Beauté & Santé</a></li>
                            <li><a href="#" class="category-link">Superette</a></li>
                            <li><a href="#" class="category-link">Autres</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        `;
        
        // Initialize feather icons in shadow DOM
        if (typeof feather !== 'undefined') {
            const icons = this.shadowRoot.querySelectorAll('[data-feather]');
            icons.forEach(icon => feather.replace(icon));
        }
    }
}

customElements.define('custom-header', CustomHeader);