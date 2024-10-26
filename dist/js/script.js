// nav-fixed
window.onscroll = function (params) {
    const header = document.querySelector('header');
    const navFixed = header.offsetTop;

    if (window.scrollY > navFixed) {
        header.classList.add('nav-fixed');
    } else {
        header.classList.remove('nav-fixed');
    }
};

// nav mobile line active
const navMobile = document.querySelector('#nav-mobile');
const navMenu = document.querySelector('#nav-menu');

navMobile.addEventListener('click', function (params) {
    navMobile.classList.toggle('nav-mobile-active');
    navMenu.classList.toggle('hidden');

});
