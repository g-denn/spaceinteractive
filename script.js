document.addEventListener('DOMContentLoaded', () => {
    createStars();
});

function createStars() {
    const starsSection = document.querySelector('.stars');
    for (let i = 0; i < 100; i++) {
        let star = document.createElement('div');
        star.className = 'star';
        star.style.top = Math.random() * 100 + 'vh';
        star.style.left = Math.random() * 100 + 'vw';
        starsSection.appendChild(star);
    }
}
