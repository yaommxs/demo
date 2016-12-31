$(function(){


function NavHover(){
	$('.nav-title').mouseover(function(){
		$(this).next().show();
	}).mouseout(function(){
		$(this).next().hide()
		})
	$('.nav-con').mouseover(function(){
		$(this).show();
	}).mouseout(function(){
		$(this).hide()
		})
}
NavHover();


function BannerLr(){
	var i=0;
	var Bpic=$('.banner-pic');
	var n=Bpic.length;
	var Bindex=$('.banner-index li');

	$('.banner-pic:first-child').show();
	$('.banner-next').click(function(){
		Bindex.removeClass('banner-index-on');
		if (i==n-1) {
			i=0;
			Bpic.fadeOut(400);
			$(Bindex[0]).addClass('banner-index-on');
			$(Bpic[0]).fadeIn(400);
		} else {
			Bpic.fadeOut(400);
			$(Bindex[i+1]).addClass('banner-index-on');
			$(Bpic[i+1]).fadeIn(400);
			i++;
		}
	})

	function autoPlay(){
		$('.banner-next').trigger('click');
	}
	setInterval(autoPlay,5000);

	$('.banner-pre').click(function(){
		Bindex.removeClass('banner-index-on');
		if (i==0) {
			i=n-1;
			Bpic.fadeOut(400);
			$(Bindex[i]).addClass('banner-index-on');
			$(Bpic[i]).fadeIn(400);
		} else {
			Bpic.fadeOut(400);
			$(Bindex[i-1]).addClass('banner-index-on');
			$(Bpic[i-1]).fadeIn(400);
			i--;
		}
	})

	Bindex.click(function(){
		i=$(this).index();
		Bpic.fadeOut(400);
		$(Bpic[i]).fadeIn(400);
		Bindex.removeClass('banner-index-on');
		$(this).addClass('banner-index-on');
	})
}
BannerLr();


function bottomHover(){
	var wbl=$('.wifi-bottom li');
	function wifiBottomicon(){
		var i_index=$(this).index()+1;
		$(this).find('i').css({'background':'url(img/icon/wifi-bottom'+i_index+'.png) no-repeat center center'})
	}
	function wifiBottomicon_on(){
		var i_index=$(this).index()+1;
		$(this).find('i').css({'background':'url(img/icon/wifi-bottom'+i_index+'-on.png) no-repeat center center'})
	}
	wbl.each(wifiBottomicon).mouseover(wifiBottomicon_on).mouseout(wifiBottomicon);
}
bottomHover();

})
