class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `\
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                .footer {
                    background: #2d3748;
                    color: white;
                    margin-top: auto;
                }
                
                .footer-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 3rem 1rem 1rem;
                }
                
                .footer-sections {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                    gap: 2rem;
                    margin-bottom: 2rem;
                }
                
                .footer-section h3 {
                    font-size: 1.125rem;
                    font-weight: bold;
                    margin-bottom: 1rem;
                    color: #f97316;
                }
                
                .footer-links {
                    list-style: none;
                }
                
                .footer-links li {
                    margin-bottom: 0.5rem;
                }
                
                .footer-links a {
                    color: #cbd5e0;
                    text-decoration: none;
                    font-size: 0.875rem;
                    transition: color 0.3s ease;
                }
                
                .footer-links a:hover {
                    color: #f97316;
                }
                
                .footer-bottom {
                    border-top: 1px solid #4a5568;
                    padding-top: 1rem;
                    text-align: center;
                    color: #a0aec0;
                    font-size: 0.75rem;
                }
                
                .payment-methods {
                    display: flex;
                    gap: 0.5rem;
                    margin-top: 1rem;
                    flex-wrap: wrap;
                }
                
                .payment-icon {
                    background: white;
                    padding: 0.25rem;
                    border-radius: 0.25rem;
                    width: 2rem;
                    height: 2rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .social-links {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                
                .social-link {
                    color: #cbd5e0;
                    transition: color 0.3s ease;
                }
                
                .social-link:hover {
                    color: #f97316;
                }
                
                @media (max-width: 768px) {
                    .footer-container {
                        padding: 2rem 1rem 1rem;
                    }
                    
                    .footer-sections {
                        grid-template-columns: 1fr;
                        gap: 1.5rem;
                    }
                }
            </style>
            
            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-sections">
                        <!-- Customer Service -->
                        <div class="footer-section">
                            <h3>Service Client</h3>
                            <ul class="footer-links">
                                <li><a href="#">Centre d'aide</a></li>
                                <li><a href="#">Comment acheter</a></li>
                                <li><a href="#">Livraison & Retour</a></li>
                                <li><a href="#">Paiement sécurisé</a></li>
                                <li><a href="#">Contactez-nous</a></li>
                            </ul>
                        </div>
                        
                        <!-- About Gonnet.NET -->
                        <div class="footer-section">
                            <h3>À propos de Gonnet.NET</h3>
                            <ul class="footer-links">
                                <li><a href="#">Qui sommes-nous</a></li>
                                <li><a href="#">Carrières</a></li>
                                <li><a href="#">Conditions d'utilisation</a></li>
                                <li><a href="#">Politique de confidentialité</a></li>
                                <li><a href="#">Vendre sur Gonnet.NET</a></li>
                            </ul>
                        </div>
                        
                        <!-- Payment Methods -->
                        <div class="footer-section">
                            <h3>Moyens de Paiement</h3>
                            <div class="payment-methods">
                                <i data-feather="credit-card" class="payment-icon"></i>
                                <i data-feather="smartphone" class="payment-icon"></i>
                                <i data-feather="dollar-sign" class="payment-icon"></i>
                            </div>
                        </div>
                        
                        <!-- Follow Us -->
                        <div class="footer-section">
                            <h3>Suivez-nous</h3>
                            <div class="social-links">
                                <a href="#" class="social-link">
                                    <i data-feather="facebook"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i data-feather="twitter"></i>
                                </a>
                                <a href="#" class="social-link">
                                    <i data-feather="instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Footer Bottom -->
                    <div class="footer-bottom">
                        <p>&copy; 2024 Gonnet.NET. Tous droits réservés.</p>
                        <p>Votre boutique en ligne de confiance en Côte d'Ivoire</p>
                    </div>
                </div>
            </footer>
        `;
        
        // Initialize feather icons in shadow DOM
        if (typeof feather !== 'undefined') {
            const icons = this.shadowRoot.querySelectorAll('[data-feather]');
            icons.forEach(icon => feather.replace(icon));
        }
    }
}

customElements.define('custom-footer', CustomFooter);