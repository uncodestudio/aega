new Splide('#splide-slider', {
  type: 'loop', // Mode en boucle
  perPage: 2, // 2 slides visibles par défaut
  gap: '2rem',
  autoplay: true,
  interval: 5000,
  pagination: true,
  arrows: false,

  // ⚠️ Configuration responsive
  breakpoints: {
    600: { perPage: 1 } // En dessous de 600px → 1 seul slide
  }
}).mount();
