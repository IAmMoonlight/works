$(document).ready(function(){
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
	$('body').on('click', '.header nav menu li a', function(e){
		e.preventDefault();
		let selector = $(this).attr('href');
		$('body, html').animate({
			scrollTop: $(selector).offset().top - 100 + 'px'
		}, 500);
	});
	/* scroll_menu */

	/* show_menu */
	$('body').on('click', '.show_menu', function(){
		$(this).next().slideToggle(500);
	});
	/* show_menu */

	/* scroll btn */
	$('.lets_begin_block .btn-white').click(function(){
		$('body, html').animate({
			scrollTop: $('.contact_me_block').offset().top
		}, 500);
	});
	/* scroll btn */

	/* parallax */
		var image = document.querySelector('.image img');
		new simpleParallax(image);
	/* parallax */

	// /* tabs */
	// $('.tabs .titles .title').click(function(){
	// 	var attr = $(this).attr('data-num');
	// 	var contents = $('.content_titles .content');
	// 	contents.removeClass('active_content');
	// 	$('.tabs .titles .title').removeClass('active_title');

	// 	$(this).addClass('active_title');
	// 	for(var i = 0; i < contents.length; i++){
	// 		if(contents.eq(i).attr('data-num') === attr){
	// 			contents.eq(i).addClass('active_content');
	// 		}
	// 	}
	// });
	// /* tabs */

	window.onresize = function(){
		console.log(document.documentElement.clientWidth);
	}
});