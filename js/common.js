/*!
*  松江市监首页js
*  author：caishuxiang
*  data:2017-06-08
*/

(function($) {
	var $time =  $("#time");
	var time = 19;
	setInterval (function(){
		$time.text(time);
		time--;
		if(time == 0){
			window.location.href="index.html";
		}
	}, 1000);
})(jQuery);
