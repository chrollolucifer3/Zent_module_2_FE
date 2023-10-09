$(document).ready(function() {
    const $gallery = $(".gallery");
    const $lightbox = $("#lightbox");
    const $lightboxImage = $("#lightbox-image");
    const $imageDescription = $("#image-description");
    const $closeButton = $("#close-button");

    $gallery.on("click", "img", function() {
        const src = $(this).attr("src");
        const alt = $(this).attr("alt");

        $lightboxImage.attr("src", src);
        $imageDescription.text(alt);
        $lightbox.addClass("show"); // Thêm lớp để hiển thị lightbox
    });

    $closeButton.on("click", function() {
        $lightbox.removeClass("show"); // Loại bỏ lớp để ẩn lightbox
    });

    $lightbox.on("click", function(event) {
        if (event.target === this) {
            $lightbox.removeClass("show"); // Loại bỏ lớp để ẩn lightbox khi nhấp vào bên ngoài
        }
    });
});
