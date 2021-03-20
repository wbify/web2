( function($) {
  'use strict';
$(function(e) {

/*-------------------------------------------------------------------------------
	  Sticky-Header
	-------------------------------------------------------------------------------*/
$(window).scroll(function(){
  var sticky = $('#header'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('sticky');
  else sticky.removeClass('sticky');
});

/*-------------------------------------------------------------------------------
	  Video
	-------------------------------------------------------------------------------*/
$('.popup-youtube').magnificPopup({
		type: 'iframe'
	});
	$('.popup-vimeo').magnificPopup({
		type: 'iframe'
	});
	$('.popup-video').magnificPopup({
		type: 'iframe'
	});

/*------------------------------------------------------------------
	Intro-Slider
	-------------------------------------------------------------------*/
	$('#intro .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
	dots:false,
	autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
	});
	
/*------------------------------------------------------------------
	Testimonials-Slider
	-------------------------------------------------------------------*/
	$('#testimonials .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
	dots:true,
	autoplay:true,
    autoplayTimeout:4000,
    responsive:{
        0:{items:1},
        600:{items:1},
        1000:{items:1}
    }
	});
	});	
	
/*------------------------------------------------------------------
	Sidebar-Menu
	-------------------------------------------------------------------*/
	$("#menu_toggle").on('click', function(e) {
	 $("#sidebar_nav, #overlay_bg").toggleClass("show");
	 });
	 $("#overlay_bg").on('click', function(e) {
	 $("#sidebar_nav, #overlay_bg").toggleClass("show");
	 });
	 
/*------------------------------------------------------------------
	Gallery
	-------------------------------------------------------------------*/
	$(window).load(function(){
    var $container = $('.galleryContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });
 
    $('.galleryFilter a').click(function(){
        $('.galleryFilter .current').removeClass('current');
        $(this).addClass('current');
 
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    }); 
});
	
})(jQuery);