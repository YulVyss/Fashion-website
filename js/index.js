
	let div = $('.header__icon, .nav_mobile');
	let button = $('.header__button');
	let nav = $('.nav_mobile');

	div.click(function(){
		button.toggleClass('open');
		nav.toggleClass('hide');
	});


 
  
$(window).scroll(function() {
	if ($(window).scrollTop() > 300) {
	$('#up').addClass('show');
	} else {
	$('#up').removeClass('show');
	}
});

$('#up').click(function(e) {
	e.preventDefault();
	$('body, html').animate({scrollTop:0}, '300');
});
  

