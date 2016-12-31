$(function(){
		$(document).mousedown(function(event) {
			var e=event||e;
			e.preventDefault();
		});

		var ospan=$('.banner-nav span');
		var imgWidth=$('.banner-img img').width();
		var n=$('.banner-img img').length;
		inow=0;

		$('.next').click(function(){
			imgMoveR();
			navOn();
		});
		$('.pre').click(function(){
			imgMoveL();
			navOn()
		});
		ospan.click(function(){
			inow=$(this).index();
			navOn();
			$('.banner-img').stop(false,true).animate({
				left:-inow*imgWidth
			})
		});

		function imgMoveL(){
			if (inow==0) {
				$('.banner-img li').eq(n-1).css('left',-imgWidth*n);
				$('.banner-img').stop(false,true).animate({
					'left':imgWidth
				},function(){
					$('.banner-img').css('left', -(n-1)*imgWidth);
					$('.banner-img li').eq(n-1).css('left',0);
				})
				inow=n-1;
			} else {
				inow--;
				$('.banner-img').stop(false,true).animate({
					'left':-inow*imgWidth
				})
			}
		}

		function imgMoveR(){
			
			if (inow==n-1) {
				$('.banner-img li').eq(0).css('left',imgWidth*n);
				$('.banner-img').stop(false,true).animate({
					'left':-imgWidth*n
				},function(){
					$('.banner-img').css('left', 0);
					$('.banner-img li').eq(0).css('left',0);
				})
				inow=0;
			} else {
				inow++;
				$('.banner-img').stop(false,true).animate({
					'left':-inow*imgWidth
				})
			}
		}

		function navOn() {

			ospan.eq(inow).addClass('nav_on').siblings().removeClass('nav_on');
		}

		var time=setInterval(function(){
			imgMoveR();
			navOn();
		},3000)

		$('.banner').hover(function() {
			clearInterval(time);
		},function(){
			time=setInterval(function(){
				imgMoveR();
				navOn();
			},3000)
		});
})