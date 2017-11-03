/*!
*  新点双11
*  author：caishuxiang
*  data:2017-11-2
*/


// 抽奖弹出层
	$('.award-roate').on('click', function(){
	  layer.open({
	  type: 2,
	  title: false,
	  closeBtn: 0,
	  maxmin: false,
	  shadeClose: true, //点击遮罩关闭层
	  area : ['1089px','543px'],
	  content: 'tune_table.html',
	  offset: '86px',
	  
	  });
	});