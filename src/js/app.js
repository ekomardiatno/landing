$(function(){
	// Affix
	$('#nav-menu').affix({
		offset: {top: 50}
	});

	// Button Menu
	$('.button-menu').on('click', function(){
		var a = $(this);
		if(!a.hasClass('active')){
			$('.navbar-collapse').addClass('active');
		}else{
			$('.navbar-collapse').removeClass('active');
		}
		a.toggleClass('active');
	})
});