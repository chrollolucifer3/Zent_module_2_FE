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
            // If the screen width is 767px or smaller, enable click behavior on "Blog"
            $(".header__menu-list li.hide > a").click(function(e) {
                e.preventDefault();
                $(this).siblings('.submenu').slideToggle();
                $(this).find('i').toggleClass("fa-angle-down fa-angle-right");
            });
        } else {
            // If the screen width is larger than 767px, disable click behavior on "Blog"
            $(".header__menu-list li.hide > a").off("click");
        }
    }

    // Initially, set up the behavior according to the current screen width
    toggleSubmenu();

    // Update the behavior when the window is resized
    $(window).resize(toggleSubmenu);
});
