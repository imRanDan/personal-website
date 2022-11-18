const menu_toggle = document.querySelector('.menu-toggle');
const primnav = document.querySelector('.prim-nav');

menu_toggle.addEventListener('click', () => {
    const visibility = primnav.getAttribute('data-visible');

    if (visibility === 'false') {
        primnav.setAttribute('data-visible', true);
    } else if (visibility === 'true') {
        primnav.setAttribute('data-visible', false);
    }
});
