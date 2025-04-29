import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <span className="text-accent">Dev</span>Connect<span className="text-secondary">AI</span>
        </div>
        <nav>
          <ul>
            <li><a href="#accueil">Accueil</a></li>
            <li><a href="#developpeurs">Développeurs</a></li>
            <li><a href="#ia">IA & Outils</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section className="hero" id="accueil">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Trouvez le développeur parfait pour votre projet</h1>
          <p>Plateforme de mise en relation intelligente entre développeurs et entreprises, propulsée par l'IA</p>
          <button className="cta-button">Commencer maintenant</button>
        </div>
      </section>

      <section className="features" id="developpeurs">
        <h2>Fonctionnalités principales</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <img src="https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Recherche intelligente" />
            </div>
            <h3>Recherche intelligente</h3>
            <p>Notre IA analyse vos besoins et trouve les meilleurs talents</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Messagerie intégrée" />
            </div>
            <h3>Messagerie intégrée</h3>
            <p>Communiquez facilement avec les développeurs potentiels</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">
              <img src="https://images.unsplash.com/photo-1492551557933-34265f7af79e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Profils vérifiés" />
            </div>
            <h3>Profils vérifiés</h3>
            <p>Tous les profils sont vérifiés pour garantir leur authenticité</p>
          </div>
        </div>
      </section>

      <section className="ai-section" id="ia">
        <h2>Intelligence Artificielle</h2>
        <div className="ai-content">
          <div className="ai-text">
            <p>Notre algorithme analyse les compétences, l'expérience et la disponibilité pour vous proposer les meilleurs développeurs.</p>
            <p>Le système apprend continuellement de vos préférences pour améliorer ses recommandations.</p>
            <ul className="ai-features-list">
              <li>Analyse de compétences techniques</li>
              <li>Correspondance avec vos besoins spécifiques</li>
              <li>Prédiction de compatibilité d'équipe</li>
              <li>Suggestions basées sur vos projets précédents</li>
            </ul>
          </div>
          <div className="ai-image">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Intelligence artificielle" />
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Ce que disent nos utilisateurs</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div className="testimonial-avatar">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt="Avatar" />
            </div>
            <div className="testimonial-content">
              <p>"J'ai trouvé un développeur de qualité en moins de 48h pour mon projet urgent. La plateforme est incroyablement efficace."</p>
              <h4>Thomas Durand</h4>
              <p className="testimonial-position">CEO, TechStart</p>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="testimonial-avatar">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100&q=80" alt="Avatar" />
            </div>
            <div className="testimonial-content">
              <p>"En tant que développeuse freelance, cette plateforme m'a permis de trouver des projets parfaitement adaptés à mes compétences."</p>
              <h4>Julie Martin</h4>
              <p className="testimonial-position">Développeuse FullStack</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <h2>Contactez-nous</h2>
        <p>Vous avez des questions ? Notre équipe est là pour vous aider.</p>
        <div className="contact-methods">
          <div className="contact-card">
            <div className="contact-icon">📞</div>
            <h3>Téléphone</h3>
            <p>+33 1 23 45 67 89</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">✉️</div>
            <h3>Email</h3>
            <p>contact@devconnectai.com</p>
          </div>
          <div className="contact-card">
            <div className="contact-icon">🏢</div>
            <h3>Adresse</h3>
            <p>123 Avenue de l'Innovation<br />75001 Paris, France</p>
          </div>
        </div>
        <button className="cta-button">Nous contacter</button>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="text-accent">Dev</span>Connect<span className="text-secondary">AI</span>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Produit</h4>
              <ul>
                <li><a href="#fonctionnalites">Fonctionnalités</a></li>
                <li><a href="#tarifs">Tarifs</a></li>
                <li><a href="#temoignages">Témoignages</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Ressources</h4>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#documentation">Documentation</a></li>
                <li><a href="#api">API</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Entreprise</h4>
              <ul>
                <li><a href="#apropos">À propos</a></li>
                <li><a href="#carrieres">Carrières</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p> 2025 DevConnectAI. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
