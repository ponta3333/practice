$(function(){
	$('.box1').slideDown();
});

$(function(){
	$('.box2').slideDown(function(){
	$('.box2').css({
		'background-color': '#0000FF'
	}).slideUp();
	});
});

$(function(){
	$('.box3').mouseover(function(){
		$('.box3').css({'background-color': '#0000FF'})
	});
	$('.box3').mouseout(function(){
		$('.box3').css({'background-color': '#FF0000'});
	});
});

$(function(){
	$('.box4').mouseover(function(){
		$('.box4').addClass('box4-ext');
	});
	$('.box4').mouseout(function(){
		$('.box4').removeClass('box4-ext');
	});
});

$(function(){
	$('.box5').on('click',function(){
		$('.box5').addClass('box4-ext');
	});
	$('.box5').mouseout(function(){
		$('.box5').removeClass('box4-ext');
	});
});