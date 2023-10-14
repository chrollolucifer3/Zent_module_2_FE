$(document).ready(function() {
    $('#submitBtn').click(function(event) {
        event.preventDefault(); // Ngăn chặn gửi form mặc định

        // Lấy giá trị từ trường email
        var email = $('#emailInput').val();

        // Kiểm tra email hợp lệ bằng biểu thức chính quy
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!email.match(emailRegex)) {
            // Hiển thị thông báo lỗi dưới trường email
            $('#emailError').text('Email không hợp lệ');
        } else {
            // Xóa thông báo lỗi nếu email hợp lệ
            $('#emailError').text('');
            
            // Email hợp lệ, thực hiện xử lý gửi form ở đây
        }
    });
});