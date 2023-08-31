// Select DOM Items
const menuBtn = $('.menu-btn');
const menu = $('.menu');
const menuNav = $('.menu-nav');
const menuBranding = $('.menu-branding');
const navItems = $('.nav-item');

// Set Initial State of Menu
let showMenu = false;

menuBtn.on('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.addClass('close');
        menu.addClass('show');
        menuNav.addClass('show');
        menuBranding.addClass('show');
        navItems.addClass('show');

        // Set Menu State
        showMenu = true;
    } else {
        menuBtn.removeClass('close');
        menu.removeClass('show');
        menuNav.removeClass('show');
        menuBranding.removeClass('show');
        navItems.removeClass('show');

        // Set Menu State
        showMenu = false;
    }
}