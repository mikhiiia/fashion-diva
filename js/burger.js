const iconMenu = document.querySelector('.burger-button');
if (iconMenu) {
    const menuBody = document.querySelector('.header__menu');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
});
}