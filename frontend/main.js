const hamburgerIcon = document.getElementsByClassName('hamburger-icon')[0];
const navLinks = document.getElementsByClassName('nav-links-social-media')[0];

hamburgerIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})