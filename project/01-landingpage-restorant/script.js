const hamburger = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links-container');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})