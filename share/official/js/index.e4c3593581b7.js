
$(document).ready(function () {

    // 点击事件
    $(".navMenu li").on("click", function () {
        // 获取被点击元素的索引值
        var index = $(this).index();
        // 获取索引值对应区域的li标签在当前视口的相对偏移
        var offsetTop = $(".contentBox>div").eq(index).offset().top;
        // 滚动到指定位置
        $("html,body").animate({
            scrollTop: offsetTop
        }, 500);
    });
// 顶部导航部分开始
// $(".navMenu>li").on("click", function () {
//     // 获取索引值
//     var index = $(this).index();
//     // 根据索引值改变样式
//     $(".navMenu>li").eq(index).addClass("menuAction").siblings().removeClass(
//         "menuAction");
//     // 切换到指定的页面
//     mySwiper1.slideTo(index, 1000);
// });

// 监听滚动事件
    $(window).on("scroll", function () {
        // 获取页面相对滚动条顶部的偏移
        var scrollTop = $(window).scrollTop();
        // 获取各个区域盒子的高度
        var one = $(".contentBox>div").eq(0).height() - 100;
        var two = $(".contentBox>div").eq(1).height() - 100;
        var three = $(".contentBox>div").eq(2).height() - 100;
        var four = $(".contentBox>div").eq(3).height() - 100;
        var fine = $(".contentBox>div").eq(4).height() - 100;
        var six = $(".contentBox>div").eq(5).height() - 100;
        // 分别进行判断
        if (scrollTop >= one + two + three + four + fine) {
            $(".navMenu>li").eq(5).addClass("menuAction").siblings().removeClass()
        } else if (scrollTop >= one + two + three + four) {
            $(".navMenu>li").eq(4).addClass("menuAction").siblings().removeClass()
        } else if (scrollTop >= one + two + three) {
            $(".navMenu>li").eq(3).addClass("menuAction").siblings().removeClass()
        } else if (scrollTop >= one + two) {
            $(".navMenu>li").eq(2).addClass("menuAction").siblings().removeClass()
        } else if (scrollTop >= one) {
            $(".navMenu>li").eq(1).addClass("menuAction").siblings().removeClass()
        } else {
            $(".navMenu>li").eq(0).addClass("menuAction").siblings().removeClass()
        }
    });

    // 我们的优势
    $(".box0").hover(
        function () {
            $(".i0").css("background-position-y", "-110px");
        },
        function () {
            $(".i0").css("background-position-y", "0");
        }
    );
    $(".box1").hover(
        function () {
            $(".i1").css("background-position-y", "-110px");
        },
        function () {
            $(".i1").css("background-position-y", "0");
        }
    );
    $(".box2").hover(
        function () {
            $(".i2").css("background-position-y", "-110px");
        },
        function () {
            $(".i2").css("background-position-y", "0");
        }
    );
    $(".box3").hover(
        function () {
            $(".i3").css("background-position-y", "-110px");
        },
        function () {
            $(".i3").css("background-position-y", "0");
        }
    );

    // 招商合作
    $(".cooperation-item").hover(function () {
        $(this).children('.cooperationMask').slideToggle('1000');
    });

    // 帮助中心
    $(".helpTab span").click(function () {
        $(".helpTab span").eq($(this).index()).addClass("action").siblings().removeClass("action");
        $(".helpRightBox div").hide().eq($(this).index()).show();
    });

// 产品展示
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 2000,
        speed: 800,
        nextButton: '.iconRight',
        prevButton: '.iconLeft',
        loop: "true",
        // 如果需要分页器
        pagination: '.swiper-pagination',
        paginationClickable: true

    });

});