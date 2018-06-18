

$(document).ready(function(e) {
    var unslider04 = $('#img_scroll').unslider({
            dots: true
        }),
        data04 = unslider04.data('unslider');

    $('.unslider-arrow04').click(function () {
        var fn = this.className.split(' ')[1];
        data04[fn]();
    });
    $('#img_scroll').mouseover(function () {
        $('#img_scroll .arrow').slideDown();
    })
        .mouseleave(function () {
            $('#img_scroll .arrow').slideToggle();

        });
    $('.dots li').eq(0).mouseover(function () {
        $('.dots img').eq(0).css('opacity','1')
    }).mousedown(function () {
        $('.dots img').eq(0).css('opacity', '0.4')
    });
    $('.dots li').eq(1).mouseover(function () {
        $('.dots img').eq(1).css('opacity', '1');
    }).mousedown(function () {
        $('.dots img').eq(1).css('opacity', '0.4')
    });
    $('.dots li').eq(2).mouseover(function () {
        $('.dots img').eq(2).css('opacity', '1')
    }).mousedown(function () {
        $('.dots img').eq(2).css('opacity', '0.4')
    });
    $('.dots li').eq(3).mouseover(function () {
        $('.dots img').eq(3).css('opacity', '1')
    }).mousedown(function () {
        $('.dots img').eq(3).css('opacity', '0.4')
    });
    $('.dots li').eq(4).mouseover(function () {
        $('.dots img').eq(4).css('opacity', '1')
    }).mousedown(function () {
        $('.dots img').eq(4).css('opacity', '0.4')
    });

    $('.dots li').eq(0).mouseout(function () {
        $('.dots img').eq(0).css('opacity', '0')
    });
    $('.dots li').eq(1).mouseout(function () {
        $('.dots img').eq(1).css('opacity', '0')
    });
    $('.dots li').eq(2).mouseout(function () {
        $('.dots img').eq(2).css('opacity', '0')
    });
    $('.dots li').eq(3).mouseout(function () {
        $('.dots img').eq(3).css('opacity', '0')
    });
    $('.dots li').eq(4).mouseout(function () {
        $('.dots img').eq(4).css('opacity', '0')
    });

    $(".main-page .nav li").click(function () {
        var $this = $(this);
        var index = $this.index();
        var l = -(index * 800);
        $(".main-page .nav li").removeClass("on").eq(index).addClass("on");
        $(".main-page .content .con-ggh:eq(0)").stop().animate({ "margin-top": l }, 300);
    });
    //即将上市栏 鼠标移上显示详情
    $('.content-main-soon span a.decoration').hide();
    $('.content-main-soon span').mouseover(function () {
         $(this).children('.decoration').slideDown();
        $(this).children('.soon').slideUp();
        console.log($(this).children('.decoration'))
    }).mouseleave(function () {
        $(this).children('.decoration').stop(true,true).slideUp();
        $(this).children('.soon').stop(true,true).slideDown();
    });

    //头部微信二维码
     $('header ul.right li').eq(2).mouseover(function(){
         $('.right li ul').slideDown();

     }).mouseleave(function(){
         $('.right li ul').stop(true,true).slideUp()
     });
    //顶部固定导航栏
    $(window).scroll(function(){
        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        if(scrollTop>=200){
            $('.top_nav').slideDown()
        }
        else{
            $('.top_nav').slideUp()
        }
    })
});



//2)当滚动到指定位置是给#topNav添加fixed类
//绑定滚动事件 (gunlun/拖动滚动条)时执行函数中的代码

/*
E:\webstorm\web>node server.js:\r\nServer running at http://127.0.0.1:8888/
*/
