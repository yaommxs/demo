$(function() {

    // 视频播放遮罩开始
    function video_maskin() {
        $(this).parent().append("<div class='lab_video_mask'>" +
            "<span class='line_l'></span>" +
            "<span class='line_r'></span>" +
            "<span class='more'>更 多</span>" +
            "</div>")
        $(".lab_video_mask").fadeTo(400, 0.8);

        $(".line_l").animate({
            'left': '210px'
        });
        $(".line_r").animate({
            'right': '210px'
        });
        $(".more").animate({
            'bottom': '105px'
        });

    }

    function video_maskout() {
        $(".lab_video_mask").fadeTo(400, 0, function() {
            $(".lab_video_mask").remove();
        });
    }

    $('.video_div img').mouseover(video_maskin);
    $('.lab_video a').mouseleave(video_maskout);
    //视频播放遮罩结束

    //返回顶部开始
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            $(".foot_up").fadeIn(200);
        } else {
            $(".foot_up").fadeOut(200);
        }
    });
    $(".foot_up").click(function() {
        $('body').animate({
            scrollTop: 0
        }, 300);
    });
    //防止空白刷新
    if ($(window).scrollTop() < 300) {
        $(".foot_up").hide();
    }
    //返回顶部结束

})
