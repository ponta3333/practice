$(function(){
	$('#back a').on('click', function(event){
		$('body, html').animate({
			scrollTop:0
		}, 800);
		event.preventDefault();
	});
});

$(function(){
	$('h1').animate({opacity: 0.5},2000);
});
$(function(){
	$('h1').animate({opacity: 1},2000);
});