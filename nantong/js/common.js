/**!
 * [南通公共资源电子交易平台开评标系统]
 * date:2017-06-19
 * author: [csx];
 */
(function(win, $) {
    //设置背景图大小
		    var $bg = $('#loginbg'),
		        $bg_img = $('img', $bg);
		    $(window).on("resize", function() {
		        var $win = $(this);
		        var cw = $win.width(),
		            ch = $win.height() - 88,
		            iw = $bg_img.width(),
		            ih = $bg_img.height();
		        if(ch > 0 ){
			        $bg.width(cw);
			        $bg.height(ch);
			        if (cw / ch > iw / ih) {
			            var new_h = cw * ih / iw,
			            
			                imgTop = (ch - new_h) / 2 + "px";
			            $bg_img.width(cw);
			            $bg_img.height(new_h);
			            console.log(imgTop);
			            $bg_img.css({ "top": imgTop, "left": "" })
			        } else {
			            var new_w = ch * iw / ih,
			                imgLeft = (cw - new_w) / 2 + "px";
			            $bg_img.width(new_w);
			            $bg_img.height(ch);
			            $bg_img.css({ "top": "", "left": imgLeft })
			        }
		         }
		        $workerH = ch * 27.16 / 100+'px';
		      	$loginH = ch * 17.91 / 100+'px';
		        $("#loginbtn .worker").css('top',$workerH);
		        $("#loginbtn .expert").css('top',$workerH);
		        $("#loginbtn .admin").css('top',$loginH);
		        $(".login-btn a").height(13.17 / 100 * cw);
		        $(".login-btn a").width(13.17 / 100 * cw);
		    }).trigger("resize");
}(this, jQuery));


