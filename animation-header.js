// Sélectionner les éléments
const HeaderComponent = document.querySelector('.gsap-header');
const NavComponent = document.querySelector('.navbar_component');

// Initialiser les styles avec GSAP
gsap.set([HeaderComponent], { visibility: "visible", opacity: 0, y: 100 });
gsap.set([NavComponent], { visibility: "visible", opacity: 0, y: -100 });

// Animation pour NavbarComponent
gsap.to(NavComponent, {
  opacity: 1, // Rendre visible
  y: 0, // Retour à la position initiale
  duration: 0.8, // Durée de l'animation
  ease: "power2.out", // Courbe d'accélération fluide
  delay: 0.3, // Légèrement avant le header
});

// Animation pour HeaderComponent
gsap.to(HeaderComponent, {
  opacity: 1, // Rendre visible
  y: 0, // Retour à la position initiale
  duration: 0.8, // Durée de l'animation
  ease: "power2.out", // Courbe d'accélération fluide
  delay: 0.5, // Délai avant le début de l’animation
});
