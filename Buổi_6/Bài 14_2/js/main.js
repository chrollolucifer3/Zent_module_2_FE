$(document).ready(function () {
    // Mở mục đầu tiên khi trang được tải
    $(".accordion-item:first-child .accordion-content").slideDown();
    $(".accordion-item:first-child").addClass("open");
    $(".accordion-item:first-child .toggle-icon").removeClass("fa-plus").addClass("fa-minus");
  
    // Đảm bảo tất cả các mục khác đều đóng
    $(".accordion-item:not(:first-child) .accordion-content").slideUp();
    $(".accordion-item:not(:first-child)").removeClass("open");
    $(".accordion-item:not(:first-child) .toggle-icon").removeClass("fa-minus").addClass("fa-plus");
  
    $(".accordion-header").click(function () {
      // Tìm mục accordion-item chứa tiêu đề được nhấp vào
      var accordionItem = $(this).parent();
  
      // Tìm Font Awesome icon trong tiêu đề
      var toggleIcon = $(this).find(".toggle-icon");
  
      // Kiểm tra xem mục này đã mở hay chưa
      if (accordionItem.hasClass("open")) {
        // Nếu đã mở, đóng nó lại
        accordionItem.removeClass("open");
        accordionItem.find(".accordion-content").slideUp();
        toggleIcon.removeClass("fa-minus").addClass("fa-plus"); // Chuyển biểu tượng thành dấu cộng
      } else {
        // Đóng tất cả các mục khác và mở mục này
        $(".accordion-item").removeClass("open");
        $(".accordion-content").slideUp();
        accordionItem.addClass("open");
        accordionItem.find(".accordion-content").slideDown();
        
        // Tìm và cập nhật biểu tượng của tất cả các mục
        $(".toggle-icon").removeClass("fa-minus").addClass("fa-plus");
        toggleIcon.removeClass("fa-plus").addClass("fa-minus"); // Chuyển biểu tượng thành dấu trừ
      }
    });
  });
  