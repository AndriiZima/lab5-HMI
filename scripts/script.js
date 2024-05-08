document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu-list');

    burger.addEventListener('click', function () {
        menu.classList.toggle('is-active');
    });
});