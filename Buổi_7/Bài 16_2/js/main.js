$(document).ready(function() {
    $(".header__menu-icon").click(function() {
        $(".header__menu").toggleClass("mobile-menu");
        if ($(".header__menu").hasClass("mobile-menu")) {
            $(".header__menu-icon").html('<i class="fa-solid fa-times"></i>');
        } else {
            $(".header__menu-icon").html('<i class="fa-solid fa-bars"></i>');
        }
    });
});
