// On sélectionne tous les éléments à animer
const items = document.querySelectorAll('.scroll-item');

// Configuration de l'observateur d'intersection
const observerOptions = {
  root: null,
  // La zone de détection cible le milieu de l'écran :
  // On réduit la zone active pour que la classe se déclenche vers le centre
  rootMargin: '-20% 0px -20% 0px',
  threshold: 0.2 // Déclenche quand au moins 20% de l'élément est dans la zone
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Quand l'élément arrive vers le milieu, on lui ajoute la classe .visible
      entry.target.classList.add('visible');
    } else {
      // Facultatif : retire la classe si l'élément ressort pour pouvoir re-faire l'effet en remontant
      entry.target.classList.remove('visible');
    }
  });
}, observerOptions);

// On applique l'observateur sur chaque bloc
items.forEach(item => observer.observe(item));