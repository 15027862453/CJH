
window.onload = window.onresize = function () {
        var view_width = document.getElementsByTagName('html')[0].getBoundingClientRect().width;
        //找到标签名为html的第一个
        var _html = document.getElementsByTagName('html')[0];
        //如果屏幕宽度大于640 
        //就用 640/16=40
        //小于640的时候 不确定 也是尺寸/40
        view_width > 640 ? _html.style.fontSize = 640 / 16 + 'px' : _html.style.fontSize = view_width / 16 + 'px';
        //最大网页尺寸640 
        //最大字体（根字体大小） 40
}
// 二维码
$(function () {
        $('.close').click(function () {
                $('.code').css('display', 'none')
                $('.code').css('transform', 'scale(0)')
        });
        $(".joinus_tab li").click(function () {
                var _index = $(this).index();
                $(this).addClass("active").siblings().removeClass("active");
                $(".joinus_content li").eq(_index).show().siblings().hide();
        });

        $('.nav_title .menu').click(function () {
                if ($(".nav_list").css("display") == "none") {
                        $(".nav_list").show();
                } else {
                        $(".nav_list").hide();
                }
        });
        $('.nav_title .search').click(function () {
                $(".nav_title .ipt").css({
                        "width": "11rem"
                })
                $('.nav_title .ipt input').focus();
        });

});
// 轮播图
var tab1 = new Swiper('.swiper-tab1', {
        pagination: '.pagination1',
        loop: true,
        autoplay: 3000,
        grabCursor: true,
        paginationClickable: true
});
var tab2 = new Swiper('.swiper-tab2', {
        pagination: '.pagination2',
        loop: true,
        autoplay: 3000,
        grabCursor: true,
        paginationClickable: true
});
var tab3 = new Swiper('.swiper-tab3', {
        pagination: '.pagination3',
        loop: true,
        autoplay: 3000,
        grabCursor: true,
        paginationClickable: true
});
var tab4 = new Swiper('.swiper-tab4', {
        pagination: '.pagination4',
        loop: true,
        autoplay: 3000,
        grabCursor: true,
        paginationClickable: true
});
var tab5 = new Swiper('.swiper-tab5', {
        pagination: '.pagination5',
        loop: true,
        autoplay: 3000,
        grabCursor: true,
        paginationClickable: true
});
var tab6 = new Swiper('.swiper-tab6', {
        pagination: '.pagination6',
        loop: true,
        autoplay: 3000,
        grabCursor: true,
        paginationClickable: true
});
// 公告上下滚动
(function ($) {
        $.fn.extend({
                Scroll: function (opt, callback) {
                        //参数初始化
                        if (!opt) var opt = {};
                        var _btnUp = $("#" + opt.up);//Shawphy:向上按钮
                        var _btnDown = $("#" + opt.down);//Shawphy:向下按钮
                        var timerID;
                        var _this = this.eq(0).find("ul:first");
                        var lineH = _this.find("li:first").height(), //获取行高
                                line = opt.line ? parseInt(opt.line, 10) : parseInt(this.height() / lineH, 10), //每次滚动的行数，默认为一屏，即父容器高度
                                speed = opt.speed ? parseInt(opt.speed, 10) : 500; //卷动速度，数值越大，速度越慢（毫秒）
                        timer = opt.timer //?parseInt(opt.timer,10):3000; //滚动的时间间隔（毫秒）
                        if (line == 0) line = 1;
                        var upHeight = 0 - line * lineH;
                        //滚动函数
                        var scrollUp = function () {
                                console.log("222")
                                _btnUp.unbind("click", scrollUp); //Shawphy:取消向上按钮的函数绑定
                                _this.animate({
                                        marginTop: upHeight
                                }, speed, function () {
                                        for (i = 1; i <= line; i++) {
                                                _this.find("li:first").appendTo(_this);
                                        }
                                        _this.css({ marginTop: 0 });
                                        _btnUp.bind("click", scrollUp); //Shawphy:绑定向上按钮的点击事件
                                });

                        }
                        //Shawphy:向下翻页函数
                        var scrollDown = function () {
                                _btnDown.unbind("click", scrollDown);
                                for (i = 1; i <= line; i++) {
                                        _this.find("li:last").show().prependTo(_this);
                                }
                                _this.css({ marginTop: upHeight });
                                _this.animate({
                                        marginTop: 0
                                }, speed, function () {
                                        _btnDown.bind("click", scrollDown);
                                });
                        }
                        //Shawphy:自动播放
                        var autoPlay = function () {
                                if (timer) timerID = window.setInterval(scrollUp, timer);
                        };
                        var autoStop = function () {
                                if (timer) window.clearInterval(timerID);
                        };
                        //鼠标事件绑定
                        _this.hover(autoStop, autoPlay).mouseout();
                        _btnUp.css("cursor", "pointer").click(scrollUp).hover(autoStop, autoPlay);//Shawphy:向上向下鼠标事件绑定
                        _btnDown.css("cursor", "pointer").click(scrollDown).hover(autoStop, autoPlay);

                }
        })
})(jQuery);
