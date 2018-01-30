/*!
*  松江市监首页js
*  author：caishuxiang
*  data:2017-06-08
*/

(function($) {
	// 轮播图
    $('#slider').Xslider({
        affect: 'scrollx',//fade 淡入淡出；scrollx 水平轮播； scrolly 垂直轮播
        speed: 'slow',
        space: 3000,
        conbox: '.wb-slider-conbox',
        ctag: '.wb-slider-ctag',
        switcher: '.wb-slider-switcher',
        stag: '.wb-slider-stag',
        current: 'cur',
        trigger: 'click',
        boxWidth: '368',
        boxHeight: '284'
    });
    //tab切换
    new TabView({
		dom:$(".news"),
		activeCls:'cur'
	});
})(jQuery);
