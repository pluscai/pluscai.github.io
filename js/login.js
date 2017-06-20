/**!
 * [南通公共资源电子交易平台开评标系统]
 * date:2017-06-19
 * author: [csx];
 */
(function(win, $) {
	//弹出层
	$('#loginbtn a').on('click', function(){
		$loginName = $(this)[0].className;
		switch ($loginName){
			case 'worker':
				$('#loginbox').show();
				$('.mask').show();
				break;
			default:
				break;
		}
	});
	$("#close").on("click",function(){
		$('#loginbox').hide();
		$('.mask').hide();
	}) 
	 // tab切换
    new TabView({
		dom:$(".loginbox-bd"),
		triggerEvent: 'click',
		activeCls:'cur'
	});
	// input placeholder兼容
	$('[placeholder]').placeholder();
}(this, jQuery));


