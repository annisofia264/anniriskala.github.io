// app.js

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

// Lisää/tunnista 'active' luokka hampurilaisvalikon näyttämiseksi
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
