$(document).ready(function() {
    $(".header__menu-icon").click(function() {
        $(".header__menu").toggleClass("mobile-menu");
        if ($(".header__menu").hasClass("mobile-menu")) {
            $(".header__menu-icon").html('<i class="fa-solid fa-times"></i>');
        } else {
            $(".header__menu-icon").html('<i class="fa-solid fa-bars"></i>');
        }
    });

    function toggleSubmenu() {
        if ($(window).width() <= 767) {

            $(".header__menu-list li.hide > a").click(function(e) {
                e.preventDefault();
                $(this).siblings('.submenu').slideToggle();
                $(this).find('i').toggleClass("fa-angle-down fa-angle-right");
            });
        } else {

            $(".header__menu-list li.hide > a").off("click");
        }
    }

    toggleSubmenu();

    $(window).resize(toggleSubmenu);
});
