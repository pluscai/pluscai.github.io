/*!
*  标桥课堂
*  author：caishuxiang
*  data:2017-06-08
*/

(function($) {
	
	$('[placeholder]').placeholder();
	// 课程切换
	var $optContainer = $('#option-container'),
		$serchOpt = $(".option",$optContainer),
		$optItem = $('.option-items'),
		$serinput = $('.search-input');
	$serchOpt.click(function(){
		$(this).toggleClass('option-arrow-down option-arrow-up');
		$optItem.toggle();
	});
	$optItem.on('click','li',function(){
		var text = $(this).text();
		$serchOpt.text(text);
		if(text == '课程'){
			$serinput.attr('placeholder','搜索课程');
		}else {
			$serinput.attr('placeholder','搜索讲师/机构');
		}
	})
	
	// 名师申请加入点击列表切换
	var $joinLink = $('.joinlink'),
		$joinLinkI = $('i',$joinLink),
		$joinType = $(".jointype");
	$joinLink.click(function(){
		$joinLinkI.toggleClass('up down');
		$joinType.toggle();
	});
	
	$(document).on('click',function(e) {
	    if(!$(e.target).is($serchOpt)) {
	        $serchOpt.removeClass('option-arrow-up').addClass('option-arrow-down');
	        $optItem.hide();
	    }
	    if(!$(e.target).is($joinLink)) {
	    	$joinLinkI.removeClass('up').addClass('down');
	    	$joinType.hide();
	    }
	   
	});
	
	// 进度条
	$('.prosbar span').each(function(i,e){
		 var perent = $($('.percent span')[i]).text();
		$(e).width(perent);
	});
	
	
	
	// banner轮播
	 $('#Banner').Xslider({
        affect: 'scrollx', //scrollx 水平轮播 scrolly 垂直轮播
        speed: 1000,
        space: 3000,
        conbox: '.wb-slider-conbox',
        ctag: '.wb-slider-ctag',
        switcher: '.wb-slider-switcher',
        stag: '.wb-slider-stag',
        current: 'cur',
        trigger: 'click',
        boxWidth: '100%',
        boxHeight: '367'
    });
	
	//tab切换
    new TabView({
		dom:$('#hotSide'),
		activeCls:'cur'
	});
	
	// 删除按钮
	$('.deletex').click(function(){
		$('.more-lesson').hide();
	});
	
	$('.lesson-wrap').on('mouseover',function(e){
			if($(e.target).hasClass('lesson-type-item')){
				$(e.target).addClass('whitebg').siblings().removeClass('whitebg');
				$('.more-lesson').fadeIn();	
			}
	});
	$('.lesson-wrap').on('mouseleave',function(e){	
		$('.lesson-type-item').removeClass('whitebg');
		$('.more-lesson').fadeOut();		
	});
	
	
})(jQuery);
