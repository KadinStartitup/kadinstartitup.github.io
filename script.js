const hamburger = document.querySelector('.btn-hamburger');
const menuMobile = document.querySelector('.mobile-nav');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    menuMobile.classList.toggle('active');
});