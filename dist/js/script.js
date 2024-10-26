// nav-fixed
window.onscroll = function (params) {
    const header = document.querySelector('header');
    const navFixed = header.offsetTop;
    const scrollTop = document.querySelector('#scroll-top');

    if (window.scrollY > navFixed) {
        header.classList.add('nav-fixed');
        scrollTop.classList.remove('hidden');
        scrollTop.classList.add('flex');
    } else {
        header.classList.remove('nav-fixed');
        scrollTop.classList.remove('flex');
        scrollTop.classList.add('hidden');
    }
};

// nav mobile line active
const navMobile = document.querySelector('#nav-mobile');
const navMenu = document.querySelector('#nav-menu');

navMobile.addEventListener('click', function (params) {
    navMobile.classList.toggle('nav-mobile-active');
    navMenu.classList.toggle('hidden');

});

// close nav mobile active on click outside button
window.addEventListener('click', function (e) {
    if (e.target != navMobile && e.target != navMenu) {
        navMobile.classList.remove('nav-mobile-active');
        navMenu.classList.add('hidden');
    }
});

//dark mode toggle
const darkToggle = document.querySelector('#dark-mode-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function (params) {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
});

//dark mode toggle position when change theme
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
} else {
    darkToggle.checked = false;
}