$(document).ready(function(){
	 $('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav'

	});
	$('.slider-nav').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: true,
	  centerMode: true,
	  focusOnSelect: true
	});
		
	/* sticky_menu */
	var created_clone = false;
	var show_clone = false;
	$(window).scroll(function(){
		var header = $('.header');
		var new_header = $("<header></header>").html( $("header").html() ).addClass('clone_header');
		if( window.pageYOffset > header.offset().top ){
			if(!created_clone){
				$('body').append(new_header);
				created_clone = true;
				show_clone = true;
			}
			
			if( !show_clone ){
				$('.clone_header').show();
				show_clone = true;
			}
		}else{
			if( show_clone ){
				$('.clone_header').hide();
				console.log(2);
				show_clone = false;
			}
		}
	});
	/* sticky_menu */

	/* scroll_menu */
	$('.one_work__description--btn a').on('click', function(e){
		e.preventDefault();
		let selector = $(this).attr('href');
		$('body, html').animate({
			scrollTop: $(selector).offset().top
		}, 500);
	})
	/* scroll_menu */

	window.onresize = function(){
		console.log(document.documentElement.clientWidth);
	}
});