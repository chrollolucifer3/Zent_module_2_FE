$(document).ready(function() {
    // Thêm sự kiện click cho nút menu mobile
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
            // Ẩn submenu khi kích thước màn hình nhỏ hơn hoặc bằng 767px
            $(".submenu").slideUp();
            // Xử lý sự kiện click cho liên kết "Blog" khi màn hình nhỏ
            $(".header__menu-list li.hide > a").off("click").on("click", function(e) {
                e.preventDefault();
                var submenu = $(this).siblings('.submenu');
                $(".submenu").not(submenu).slideUp();
                $(".header__menu-list li.hide > a i").not($(this).find('i')).removeClass("fa-angle-down").addClass("fa-angle-right");

                if (submenu.is(":visible")) {
                    submenu.slideUp();
                    $(this).find('i').removeClass("fa-angle-down").addClass("fa-angle-right");
                } else {
                    submenu.slideDown();
                    $(this).find('i').removeClass("fa-angle-right").addClass("fa-angle-down");
                }
            });
        } else {
            // Xử lý sự kiện click cho liên kết "Blog" khi màn hình lớn
            $(".header__menu-list li.hide > a").off("click").on("click", function(e) {
                e.preventDefault();
                var submenu = $(this).siblings('.submenu');
                if (submenu.is(":visible")) {
                    submenu.slideUp();
                    $(this).find('i').removeClass("fa-angle-down").addClass("fa-angle-right");
                } else {
                    submenu.slideDown();
                    $(this).find('i').removeClass("fa-angle-right").addClass("fa-angle-down");
                }
            });
        }
    }

    // Gọi hàm để xử lý hiển thị submenu khi trang web tải lên hoặc thay đổi kích thước màn hình
    toggleSubmenu();

    $(window).on('load resize', function() {
        toggleSubmenu();
    });
});
