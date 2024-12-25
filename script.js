// Fonction pour créer des étincelles au clic
document.addEventListener('click', (e) => {
    createSparkles(e.pageX, e.pageY);
});

// Créer des étincelles à un emplacement donné
function createSparkles(x, y) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = x - 5 + 'px';  // Ajuster pour centrer l'étincelle
    sparkle.style.top = y - 5 + 'px';   // Ajuster pour centrer l'étincelle
    document.body.appendChild(sparkle);

    // Supprimer l'étincelle après l'animation
    sparkle.addEventListener('animationend', () => {
        sparkle.remove();
    });
}
