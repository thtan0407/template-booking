$(document).ready(function () {
    $('.slideBooking').slick({
        centerMode: true,
        centerPadding: '15px',
        slidesToShow: 1, arrows: false,
    });

    // Reply Comment
    $('.sendComment-user-action a.reply-comment').click(function () {
        $(this).parents('.sendComment-content').next('.sendComment-reply').css('display', 'flex');
    });

    if ($('.commentImage > ul > li > a').length) {
        $('.commentImage > ul > li > a').click(function () {
            $(this).parent().hide().remove();
        });
    }

    if ($('.__load a').length) {
        $('.__load a').click(function (e) {
            let el = $(this);
            el.html('Đang tải...');
            setTimeout(function () {
                el.parent().next().show();
                el.remove();
            }, 500);
        })
    }

    if ($('.select2').length) {
        $(document).ready(function () {
            $('.select2').select2();
        });
    }
});