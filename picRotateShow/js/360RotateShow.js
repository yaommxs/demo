$(function(){
	var lastimg=$('#wrap img');

	for (var i = 0; i < 77; i++) {
		var oimg=$('<img>');
		oimg.attr({
			'src':'./img/miaov ('+i+').jpg',
			'id':'img'+i
		});
		$('#wrap').append(oimg);
		$('#wrap img').not('img:first').hide();
	}

	$(document).mousedown(function(ev){
		var e_=ev||event;
		var c_x=e_.clientX;
		$(this).bind('mousemove',imgScale)

		function imgScale(ev){
			var e=ev||event;
			var x=parseInt((c_x-e.clientX)/10);
			var l=x%77;
			(l>0) ? l : (l=76+l);
			lastimg.hide();
			$('#img'+l).show();
			lastimg=$('#img'+l);
			return false;
		}

		$(document).mouseup(function(){
			$(this).unbind('mousemove');
		})

	})

})
