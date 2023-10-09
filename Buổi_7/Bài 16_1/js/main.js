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
        $lightbox.slideDown();
    });

    $closeButton.on("click", function() {
        $lightbox.slideUp();
    });

    $lightbox.on("click", function(event) {
        if (event.target === this) {
            $lightbox.slideUp();
        }
    });
});
