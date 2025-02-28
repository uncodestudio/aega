new Splide('#splide-cabinet', {
  type: 'slide', // Active le mode boucle
  perPage: 1, // Un seul slide visible
  autoplay: true, // Auto-slide activé
  interval: 5000, // Change toutes les 5 secondes
  pagination: true, // Affiche la pagination
  arrows: false, // Désactive les flèches
  rewind: true // ⚠️ Retourne au début quand on arrive à la fin
}).mount();
