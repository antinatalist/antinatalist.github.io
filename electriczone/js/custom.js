

(function ($) {
	"use strict";

	// sticky menu
	var header = $('.menu-sticky');
	var win = $(window);

	win.on('scroll', function () {
		var scroll = win.scrollTop();
		if (scroll < 1) {
			header.removeClass("sticky");
		} else {
			header.addClass("sticky");
		}
	});
	// Smooth About
	if ($('.contactBtn').length) {
		$(".contactBtn").on(' click ', function () {
			$('html, body').animate({
				scrollTop: $("#contact-form").offset().top
			}, 1200);
		});
	}
	// Smooth About
	if ($('.services-btn').length) {
		$(".services-btn").on(' click ', function () {
			$('html, body').animate({
				scrollTop: $("#services").offset().top
			}, 1200);
		});
	}
	// onepage nav
	$(".nav-menu li").on("click", function () {
		if ($(".showhide").is(":visible")) {
			$(".showhide").trigger("click");
		}
	});

	if ($.fn.onePageNav) {
		$(".nav-menu").onePageNav({
			currentClass: 'active',
			changeHash: false,
			scrollSpeed: 750,
			scrollThreshold: 0.5,
			offsetHeight: 40,
			filter: '',
			easing: 'swing',
		});
	}
	//canvas menu
	$('#nav-expander').on('click', function (e) {
		e.stopPropagation();
		$('body').toggleClass('nav-expanded');
	});

	$('body,html').on('click', function (e) {
		$('body').removeClass('nav-expanded');
	});
	//Counter Up
	$('.counter').counterUp({
		delay: 10,
		time: 3000
	});
	//scrollUp Up	
	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'fade'
	});
	//Year
	$(function () {
		var theYear = new Date().getFullYear();
		$('#year').html(theYear);
	});
	
	// HERO SLIDER
    var menu = [];
    jQuery('.swiper-slide').each( function(index){
        menu.push( jQuery(this).find('.slide-inner').attr("data-text") );
    });
    var interleaveOffset = 0.5;
    var swiperOptions = {
        loop: true,
        speed: 1000,
        parallax: true,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        watchSlidesProgress: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        on: {
            progress: function() {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    var slideProgress = swiper.slides[i].progress;
                    var innerOffset = swiper.width * interleaveOffset;
                    var innerTranslate = slideProgress * innerOffset;
                    swiper.slides[i].querySelector(".slide-inner").style.transform =
                    "translate3d(" + innerTranslate + "px, 0, 0)";
                }      
            },

            touchStart: function() {
              var swiper = this;
              for (var i = 0; i < swiper.slides.length; i++) {
                swiper.slides[i].style.transition = "";
              }
            },

            setTransition: function(speed) {
                var swiper = this;
                for (var i = 0; i < swiper.slides.length; i++) {
                    swiper.slides[i].style.transition = speed + "ms";
                    swiper.slides[i].querySelector(".slide-inner").style.transition =
                    speed + "ms";
                }
            }
        }
    };

    var swiper = new Swiper(".swiper-container", swiperOptions);

    // DATA BACKGROUND IMAGE
    var sliderBgSetting = $(".slide-bg-image");
    sliderBgSetting.each(function(indx){
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });

	/*------------------------------------------
        = POPUP VIDEO
    -------------------------------------------*/
    if ($(".video-btn").length) {
        $(".video-btn").on("click", function(){
            $.fancybox({
                href: this.href,
                type: $(this).data("type"),
                'title'         : this.title,
                helpers     : {
                    title : { type : 'inside' },
                    media : {}
                },

                beforeShow : function(){
                    $(".fancybox-wrap").addClass("gallery-fancybox");
                }
            });
            return false
        });
    }
	
	//Testimonial Crousel
	$(".all-testimonial").owlCarousel({
		autoplay: true,
		pagination: false,
		nav: true,
		dots: false,
		navText: [ '<span class="fi flaticon-back"></span>', '<span class="fi flaticon-next"></span>' ],
		items: 2,
		responsive: {
			0: {
				items: 1,
				nav: true,
			},
			600: {
				items: 1,
				nav: true,
			},
			768: {
				items: 1,
				nav: true,
			},
			1000: {
				items: 1
			}
		}
	});
	// image-popup	
	$('.image-popup').magnificPopup( {
        type:'image', gallery: {
            enabled: true
        }
    }
	);
	// Tooltip
	$('[data-toggle="tooltip"]').tooltip();

	$('#nav-close').on('click', function (e) {
		e.preventDefault();
		$('body').removeClass('nav-expanded');
	});
	// banner-style-one
	if ($('.banner-style-one').length) {
		$('.banner-style-one').owlCarousel({
			loop: true,
			items: 1,
			margin: 0,
			dots: true,
			nav: false,
			animateOut: 'slideOutDown',
			animateIn: 'fadeIn',
			active: true,
			smartSpeed: 1000,
			autoplay: 5000
		});
		$('.banner-carousel-btn .left-btn').on('click', function () {
			$('.banner-style-one').trigger('next.owl.carousel');
			return false;
		});
		$('.banner-carousel-btn .right-btn').on('click', function () {
			$('.banner-style-one').trigger('prev.owl.carousel');
			return false;
		});
	}
	$(window).on("load", function () {

		/*------------------------------------------------------------------
		Loader
		------------------------------------------------------------------*/
		var preLoder = $("#preloader");
        preLoder.addClass('hide');
	});

})(jQuery);

