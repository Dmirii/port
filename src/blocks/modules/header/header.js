window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.header__navmenu'),
    menuItem = document.querySelectorAll('.header__navmenu-item'),
    hamburger = document.querySelector('.header__mini-nav');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('header__mini-nav-active');
        menu.classList.toggle('header__navmenu-active');
    });

    // menuItem.forEach(item => {
    //     item.addEventListener('click', () => {
    //         //hamburger.classList.toggle('hamburger_active');
    //         menu.classList.toggle('menu_active');
    //     })
    // })
})