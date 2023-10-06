$(document).ready(function () {
    // Biến để đếm số công việc đã thêm
    var taskCount = 0;

    // Thêm công việc mới
    function addTask() {
        var taskText = $('#task').val().trim();
        if (taskText !== '') {
            var liClass = taskCount % 2 === 0 ? 'even' : 'odd'; // Sử dụng biến đếm để xác định lớp CSS
            $('#List').append('<li class="' + liClass + '">' + '<span class="task-text">' + taskText + '</span>' + '<span class="delete"><i class="fas fa-times"></i></span>' + '</li>');
            $('#task').val('');
            taskCount++;
        } else {
            alert('Vui lòng nhập nội dung công việc.');
        }
    }

    $('#add').click(addTask);

    // Đóng thẻ công việc khi click vào dấu x
    $('#List').on('click', 'span.delete', function() {
        $(this).closest('li').remove();
    });

    $('#List').on('click', 'li', function() {
        var taskText = $(this).find('.task-text');
        taskText.toggleClass('completed');
        if (taskText.hasClass('completed')) {
            taskText.prepend('<i class="fas fa-check"></i> '); // Thêm dấu tích
        } else {
            taskText.find('i').remove(); // Xóa dấu tích
        }
    });

    // Thêm công việc khi ấn phím Enter
    $('#task').keypress(function(event) {
        if (event.which === 13) { // 13 là mã ASCII của phím Enter
            addTask();
        }
    });
});