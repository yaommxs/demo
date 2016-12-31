$(function(){
	var osmall=$('.small');
	var omark=$('.mark');
	var obig=$('.big');
	var obigimg=$('.big img');

	var small_l=osmall.offset().left;
	var small_t=osmall.offset().top;
	var small_d=osmall.width();
	var mark_d=omark.width();
	var d_d=obigimg.width()-obig.width();

	osmall.mouseover(function(){
		omark.show();
		obig.show();
	}).mouseout(function(){
		omark.hide();
		obig.hide();
	});

	osmall.mousemove(function(e){
		var e=e||event;
		var l=e.clientX-small_l-mark_d/2;
		var h=e.clientY-small_t-mark_d/2+$(document).scrollTop();
		//document兼容火狐，document，body，html在谷歌下都可用，document在各种浏览器下都不加引号
		var radioX=l/(small_d-mark_d);
		var radioY=h/(small_d-mark_d);

		if (l<0) {
			omark.css({'letf':0});
		} else if (l>small_d-mark_d) {
			omark.css({'right':0});
		} else {
			omark.css({'left':l+'px'});
			obigimg.css({'left':-radioX*d_d+'px'});
		}

		if (h<0) {
			omark.css({'top':0});
		}
		else if (h>small_d-mark_d) {
			omark.css({'bottom':0});
		} else {
			omark.css({'top':h+'px'});
			obigimg.css({'top':-radioY*d_d+'px'});
		}
	})
})
