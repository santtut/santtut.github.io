function main () {
	
	// Page contents fade-in
	$('.container-full').hide();
	$('.container-full').fadeIn(400);
	
	// "Contact me"-button, slide the table out
	$('.slide-toggle-button').next().hide();
	$('.slide-toggle-button').on('click', function() {
		$(this).next().slideToggle(400);
		$(this).toggleClass('active');
	});
	
	// Navbar scroll animation
	$('body').scrollspy({target: ".navbar", offset: 50});
	$("#myNavbar a").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
			  scrollTop: $(hash).offset().top
			}, 400, function(){
			  window.location.hash = hash;
			});
		}
	});
	
	// Skillbar animation
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},4000);
	});	
}

$(document).ready(main);