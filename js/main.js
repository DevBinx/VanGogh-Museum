AOS.init({
	duration: 800,
	easing: 'slide',
	once: false
});

jQuery(document).ready(function ($) {

	"use strict";


	var siteMenuClone = function () {

		$('.js-clone-nav').each(function () {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function () {

			var counter = 0;
			$('.site-mobile-menu .has-children').each(function () {
				var $this = $(this);

				$this.prepend('<span class="arrow-collapse collapsed">');

				$this.find('.arrow-collapse').attr({
					'data-toggle': 'collapse',
					'data-target': '#collapseItem' + counter,
				});

				$this.find('> ul').attr({
					'class': 'collapse',
					'id': 'collapseItem' + counter,
				});

				counter++;

			});

		}, 1000);

		$('body').on('click', '.arrow-collapse', function (e) {
			var $this = $(this);
			if ($this.closest('li').find('.collapse').hasClass('show')) {
				$this.removeClass('active');
			} else {
				$this.addClass('active');
			}
			e.preventDefault();

		});

		$(window).resize(function () {
			var $this = $(this),
				w = $this.width();

			if (w > 768) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function (e) {
			var $this = $(this);
			e.preventDefault();

			if ($('body').hasClass('offcanvas-menu')) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		})

		// click outisde offcanvas
		$(document).mouseup(function (e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ($('body').hasClass('offcanvas-menu')) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	};
	siteMenuClone();


	var sitePlusMinus = function () {
		$('.js-btn-minus').on('click', function (e) {
			e.preventDefault();
			if ($(this).closest('.input-group').find('.form-control').val() != 0) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function (e) {
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function () {
		$("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [75, 300],
			slide: function (event, ui) {
				$("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
			}
		});
		$("#amount").val("$" + $("#slider-range").slider("values", 0) +
			" - $" + $("#slider-range").slider("values", 1));
	};
	// siteSliderRange();




	var siteCarousel = function () {
		if ($('.nonloop-block-13').length > 0) {
			$('.nonloop-block-13').owlCarousel({
				center: false,
				items: 1,
				loop: true,
				stagePadding: 0,
				margin: 20,
				smartSpeed: 1000,
				autoplay: true,
				nav: false,
				dots: true,
				responsive: {
					600: {
						margin: 20,
						items: 2
					},
					1000: {
						margin: 20,
						stagePadding: 0,
						items: 3
					}
				}
			});
			$('.custom-next').click(function (e) {
				e.preventDefault();
				$('.nonloop-block-13').trigger('next.owl.carousel');
			})
			$('.custom-prev').click(function (e) {
				e.preventDefault();
				$('.nonloop-block-13').trigger('prev.owl.carousel');
			})


		}

		$('.slide-one-item').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			smartSpeed: 1500,
			autoplay: true,
			pauseOnHover: false,
			dots: true,
			nav: true,
			navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
		});

		if ($('.owl-all').length > 0) {
			$('.owl-all').owlCarousel({
				center: false,
				items: 1,
				loop: false,
				stagePadding: 0,
				margin: 0,
				autoplay: false,
				nav: false,
				dots: true,
				touchDrag: true,
				mouseDrag: true,
				smartSpeed: 1000,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive: {
					768: {
						margin: 30,
						nav: false,
						responsiveRefreshRate: 10,
						items: 1
					},
					992: {
						margin: 30,
						stagePadding: 0,
						nav: false,
						responsiveRefreshRate: 10,
						touchDrag: false,
						mouseDrag: false,
						items: 3
					},
					1200: {
						margin: 30,
						stagePadding: 0,
						nav: false,
						responsiveRefreshRate: 10,
						touchDrag: false,
						mouseDrag: false,
						items: 3
					}
				}
			});
		}

	};
	siteCarousel();



	var siteCountDown = function () {

		$('#date-countdown').countdown('2020/10/10', function (event) {
			var $this = $(this).html(event.strftime('' +
				'<span class="countdown-block"><span class="label">%w</span> weeks </span>' +
				'<span class="countdown-block"><span class="label">%d</span> days </span>' +
				'<span class="countdown-block"><span class="label">%H</span> hr </span>' +
				'<span class="countdown-block"><span class="label">%M</span> min </span>' +
				'<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});

	};
	// siteCountDown();

	var siteDatePicker = function () {

		if ($('.datepicker').length > 0) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var siteSticky = function () {
		$(".js-sticky-header").sticky({
			topSpacing: 0
		});
	};
	siteSticky();

	// navigation
	var OnePageNavigation = function () {
		var navToggler = $('.site-menu-toggle');

		$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a[href^='#']", function (e) {
			e.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				'scrollTop': $(hash).offset().top - 50
			}, 600, 'easeInOutExpo', function () {
				// window.location.hash = hash;

			});

		});
	};
	OnePageNavigation();

	var siteScroll = function () {



		$(window).scroll(function () {

			var st = $(this).scrollTop();

			if (st > 100) {
				$('.js-sticky-header').addClass('shrink');
			} else {
				$('.js-sticky-header').removeClass('shrink');
			}

		})

	};
	siteScroll();

	// Stellar
	$(window).stellar({
		horizontalScrolling: false,
		responsive: true,
	});


	var counter = function () {

		$('#about-section').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number > span').each(function () {
					var $this = $(this),
						num = $this.data('number');
					$this.animateNumber({
						number: num,
						numberStep: comma_separator_number_step
					}, 7000);
				});

			}

		}, {
			offset: '95%'
		});

	}
	counter();


	var siteIstotope = function () {
		/* activate jquery isotope */
		var $container = $('#posts').isotope({
			itemSelector: '.item',
			isFitWidth: true
		});

		$(window).resize(function () {
			$container.isotope({
				columnWidth: '.col-sm-3'
			});
		});

		$container.isotope({
			filter: '*'
		});

		// filter items on button click
		$('#filters').on('click', 'button', function (e) {
			e.preventDefault();
			var filterValue = $(this).attr('data-filter');
			$container.isotope({
				filter: filterValue
			});
			$('#filters button').removeClass('active');
			$(this).addClass('active');
		});
	}

	siteIstotope();

});

console.log('%c Proudly Crafted with ZiOn.', 'background: #222; color: #bada55');

/* ---------------------------------------------- /*
 * Preloader
 /* ---------------------------------------------- */
(function () {
	$(window).on('load', function () {
		$('.loader').fadeOut();
		$('.page-loader').delay(350).fadeOut('slow');
	});

	$(document).ready(function () {

		/* ---------------------------------------------- /*
		 * WOW Animation When You Scroll
		 /* ---------------------------------------------- */

		wow = new WOW({
			mobile: false
		});
		wow.init();


		/* ---------------------------------------------- /*
		 * Scroll top
		 /* ---------------------------------------------- */

		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('.scroll-up').fadeIn();
			} else {
				$('.scroll-up').fadeOut();
			}
		});

		$('a[href="#totop"]').click(function () {
			$('html, body').animate({
				scrollTop: 0
			}, 'slow');
			return false;
		});


		/* ---------------------------------------------- /*
		 * Initialization General Scripts for all pages
		 /* ---------------------------------------------- */

		var homeSection = $('.home-section'),
			navbar = $('.navbar-custom'),
			navHeight = navbar.height(),
			worksgrid = $('#works-grid'),
			width = Math.max($(window).width(), window.innerWidth),
			mobileTest = false;

		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			mobileTest = true;
		}

		buildHomeSection(homeSection);
		navbarAnimation(navbar, homeSection, navHeight);
		navbarSubmenu(width);
		hoverDropdown(width, mobileTest);

		$(window).resize(function () {
			var width = Math.max($(window).width(), window.innerWidth);
			buildHomeSection(homeSection);
			hoverDropdown(width, mobileTest);
		});

		$(window).scroll(function () {
			effectsHomeSection(homeSection, this);
			navbarAnimation(navbar, homeSection, navHeight);
		});

		/* ---------------------------------------------- /*
		 * Set sections backgrounds
		 /* ---------------------------------------------- */

		var module = $('.home-section, .module, .module-small, .side-image');
		module.each(function (i) {
			if ($(this).attr('data-background')) {
				$(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
			}
		});

		/* ---------------------------------------------- /*
		 * Home section height
		 /* ---------------------------------------------- */

		function buildHomeSection(homeSection) {
			if (homeSection.length > 0) {
				if (homeSection.hasClass('home-full-height')) {
					homeSection.height($(window).height());
				} else {
					homeSection.height($(window).height() * 0.85);
				}
			}
		}


		/* ---------------------------------------------- /*
		 * Home section effects
		 /* ---------------------------------------------- */

		function effectsHomeSection(homeSection, scrollTopp) {
			if (homeSection.length > 0) {
				var homeSHeight = homeSection.height();
				var topScroll = $(document).scrollTop();
				if ((homeSection.hasClass('home-parallax')) && ($(scrollTopp).scrollTop() <= homeSHeight)) {
					homeSection.css('top', (topScroll * 0.55));
				}
				if (homeSection.hasClass('home-fade') && ($(scrollTopp).scrollTop() <= homeSHeight)) {
					var caption = $('.caption-content');
					caption.css('opacity', (1 - topScroll / homeSection.height() * 1));
				}
			}
		}

		/* ---------------------------------------------- /*
		 * Intro slider setup
		 /* ---------------------------------------------- */

		if ($('.hero-slider').length > 0) {
			$('.hero-slider').flexslider({
				animation: "fade",
				animationSpeed: 1000,
				animationLoop: true,
				prevText: '',
				nextText: '',
				before: function (slider) {
					$('.titan-caption').fadeOut().animate({
						top: '-80px'
					}, {
						queue: false,
						easing: 'swing',
						duration: 700
					});
					slider.slides.eq(slider.currentSlide).delay(500);
					slider.slides.eq(slider.animatingTo).delay(500);
				},
				after: function (slider) {
					$('.titan-caption').fadeIn().animate({
						top: '0'
					}, {
						queue: false,
						easing: 'swing',
						duration: 700
					});
				},
				useCSS: true
			});
		}


		/* ---------------------------------------------- /*
		 * Rotate
		 /* ---------------------------------------------- */

		$(".rotate").textrotator({
			animation: "dissolve",
			separator: "|",
			speed: 3000
		});


		/* ---------------------------------------------- /*
		 * Transparent navbar animation
		 /* ---------------------------------------------- */

		function navbarAnimation(navbar, homeSection, navHeight) {
			var topScroll = $(window).scrollTop();
			if (navbar.length > 0 && homeSection.length > 0) {
				if (topScroll >= navHeight) {
					navbar.removeClass('navbar-transparent');
				} else {
					navbar.addClass('navbar-transparent');
				}
			}
		}

		/* ---------------------------------------------- /*
		 * Navbar submenu
		 /* ---------------------------------------------- */

		function navbarSubmenu(width) {
			if (width > 767) {
				$('.navbar-custom .navbar-nav > li.dropdown').hover(function () {
					var MenuLeftOffset = $('.dropdown-menu', $(this)).offset().left;
					var Menu1LevelWidth = $('.dropdown-menu', $(this)).width();
					if (width - MenuLeftOffset < Menu1LevelWidth * 2) {
						$(this).children('.dropdown-menu').addClass('leftauto');
					} else {
						$(this).children('.dropdown-menu').removeClass('leftauto');
					}
					if ($('.dropdown', $(this)).length > 0) {
						var Menu2LevelWidth = $('.dropdown-menu', $(this)).width();
						if (width - MenuLeftOffset - Menu1LevelWidth < Menu2LevelWidth) {
							$(this).children('.dropdown-menu').addClass('left-side');
						} else {
							$(this).children('.dropdown-menu').removeClass('left-side');
						}
					}
				});
			}
		}

		/* ---------------------------------------------- /*
		 * Navbar hover dropdown on desctop
		 /* ---------------------------------------------- */

		function hoverDropdown(width, mobileTest) {
			if ((width > 767) && (mobileTest !== true)) {
				$('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').removeClass('open');
				var delay = 0;
				var setTimeoutConst;
				$('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').hover(function () {
					var $this = $(this);
					setTimeoutConst = setTimeout(function () {
						$this.addClass('open');
						$this.find('.dropdown-toggle').addClass('disabled');
					}, delay);
				},
					function () {
						clearTimeout(setTimeoutConst);
						$(this).removeClass('open');
						$(this).find('.dropdown-toggle').removeClass('disabled');
					});
			} else {
				$('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').unbind('mouseenter mouseleave');
				$('.navbar-custom [data-toggle=dropdown]').not('.binded').addClass('binded').on('click', function (event) {
					event.preventDefault();
					event.stopPropagation();
					$(this).parent().siblings().removeClass('open');
					$(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
					$(this).parent().toggleClass('open');
				});
			}
		}

		/* ---------------------------------------------- /*
		 * Navbar collapse on click
		 /* ---------------------------------------------- */

		$(document).on('click', '.navbar-collapse.in', function (e) {
			if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
				$(this).collapse('hide');
			}
		});


		/* ---------------------------------------------- /*
		 * Video popup, Gallery
		 /* ---------------------------------------------- */

		$('.video-pop-up').magnificPopup({
			type: 'iframe'
		});

		$(".gallery-item").magnificPopup({
			delegate: 'a',
			type: 'image',
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0, 1]
			},
			image: {
				titleSrc: 'title',
				tError: 'The image could not be loaded.'
			}
		});


		/* ---------------------------------------------- /*
		 * Portfolio
		 /* ---------------------------------------------- */

		var worksgrid = $('#works-grid'),
			worksgrid_mode;

		if (worksgrid.hasClass('works-grid-masonry')) {
			worksgrid_mode = 'masonry';
		} else {
			worksgrid_mode = 'fitRows';
		}

		worksgrid.imagesLoaded(function () {
			worksgrid.isotope({
				layoutMode: worksgrid_mode,
				itemSelector: '.work-item'
			});
		});

		$('#filters a').click(function () {
			$('#filters .current').removeClass('current');
			$(this).addClass('current');
			var selector = $(this).attr('data-filter');

			worksgrid.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			});

			return false;
		});


		/* ---------------------------------------------- /*
		 * Testimonials
		 /* ---------------------------------------------- */

		if ($('.testimonials-slider').length > 0) {
			$('.testimonials-slider').flexslider({
				animation: "slide",
				smoothHeight: true
			});
		}


		/* ---------------------------------------------- /*
		 * Post Slider
		 /* ---------------------------------------------- */

		if ($('.post-images-slider').length > 0) {
			$('.post-images-slider').flexslider({
				animation: "slide",
				smoothHeight: true,
			});
		}


		/* ---------------------------------------------- /*
		 * Progress bar animations
		 /* ---------------------------------------------- */

		$('.progress-bar').each(function (i) {
			$(this).appear(function () {
				var percent = $(this).attr('aria-valuenow');
				$(this).animate({
					'width': percent + '%'
				});
				$(this).find('span').animate({
					'opacity': 1
				}, 900);
				$(this).find('span').countTo({
					from: 0,
					to: percent,
					speed: 900,
					refreshInterval: 30
				});
			});
		});


		/* ---------------------------------------------- /*
		 * Funfact Count-up
		 /* ---------------------------------------------- */

		$('.count-item').each(function (i) {
			$(this).appear(function () {
				var number = $(this).find('.count-to').data('countto');
				$(this).find('.count-to').countTo({
					from: 0,
					to: number,
					speed: 1200,
					refreshInterval: 30
				});
			});
		});


		/* ---------------------------------------------- /*
		 * Youtube video background
		 /* ---------------------------------------------- */

		$(function () {
			$(".video-player").mb_YTPlayer();
		});

		$('#video-play').click(function (event) {
			event.preventDefault();
			if ($(this).hasClass('fa-play')) {
				$('.video-player').playYTP();
			} else {
				$('.video-player').pauseYTP();
			}
			$(this).toggleClass('fa-play fa-pause');
			return false;
		});

		$('#video-volume').click(function (event) {
			event.preventDefault();
			if ($(this).hasClass('fa-volume-off')) {
				$('.video-player').YTPUnmute();
			} else {
				$('.video-player').YTPMute();
			}
			$(this).toggleClass('fa-volume-off fa-volume-up');
			return false;
		});


		/* ---------------------------------------------- /*
		 * Owl Carousel
		 /* ---------------------------------------------- */

		$('.owl-carousel').each(function (i) {

			// Check items number
			if ($(this).data('items') > 0) {
				items = $(this).data('items');
			} else {
				items = 4;
			}

			// Check pagination true/false
			if (($(this).data('pagination') > 0) && ($(this).data('pagination') === true)) {
				pagination = true;
			} else {
				pagination = false;
			}

			// Check navigation true/false
			if (($(this).data('navigation') > 0) && ($(this).data('navigation') === true)) {
				navigation = true;
			} else {
				navigation = false;
			}

			// Build carousel
			$(this).owlCarousel({
				navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
				nav: navigation,
				dots: pagination,
				loop: true,
				dotsSpeed: 400,
				items: items,
				navSpeed: 300,
				autoplay: 2000
			});

		});


		/* ---------------------------------------------- /*
		 * Blog masonry
		 /* ---------------------------------------------- */

		$('.post-masonry').imagesLoaded(function () {
			$('.post-masonry').masonry();
		});


		/* ---------------------------------------------- /*
		 * Scroll Animation
		 /* ---------------------------------------------- */

		$('.section-scroll').bind('click', function (e) {
			var anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top - 50
			}, 1000);
			e.preventDefault();
		});

		/*===============================================================
		 Working Contact Form
		 ================================================================*/

		$("#contactForm").submit(function (e) {

			e.preventDefault();
			var $ = jQuery;

			var postData = $(this).serializeArray(),
				formURL = $(this).attr("action"),
				$cfResponse = $('#contactFormResponse'),
				$cfsubmit = $("#cfsubmit"),
				cfsubmitText = $cfsubmit.text();

			$cfsubmit.text("Sending...");


			$.ajax({
				url: formURL,
				type: "POST",
				data: postData,
				success: function (data) {
					$cfResponse.html(data);
					$cfsubmit.text(cfsubmitText);
					$('#contactForm input[name=name]').val('');
					$('#contactForm input[name=email]').val('');
					$('#contactForm textarea[name=message]').val('');
				},
				error: function (data) {
					alert("Error occurd! Please try again");
				}
			});

			return false;

		});


		/*===============================================================
		 Working Request A Call Form
		 ================================================================*/

		$("#requestACall").submit(function (e) {

			e.preventDefault();
			var $ = jQuery;

			var postData = $(this).serializeArray(),
				formURL = $(this).attr("action"),
				$cfResponse = $('#requestFormResponse'),
				$cfsubmit = $("#racSubmit"),
				cfsubmitText = $cfsubmit.text();

			$cfsubmit.text("Sending...");


			$.ajax({
				url: formURL,
				type: "POST",
				data: postData,
				success: function (data) {
					$cfResponse.html(data);
					$cfsubmit.text(cfsubmitText);
					$('#requestACall input[name=name]').val('');
					$('#requestACall input[name=subject]').val('');
					$('#requestACall textarea[name=phone]').val('');
				},
				error: function (data) {
					alert("Error occurd! Please try again");
				}
			});

			return false;

		});


		/*===============================================================
		 Working Reservation Form
		 ================================================================*/

		$("#reservationForm").submit(function (e) {

			e.preventDefault();
			var $ = jQuery;

			var postData = $(this).serializeArray(),
				formURL = $(this).attr("action"),
				$cfResponse = $('#reservationFormResponse'),
				$cfsubmit = $("#rfsubmit"),
				cfsubmitText = $cfsubmit.text();

			$cfsubmit.text("Sending...");


			$.ajax({
				url: formURL,
				type: "POST",
				data: postData,
				success: function (data) {
					$cfResponse.html(data);
					$cfsubmit.text(cfsubmitText);
					$('#reservationForm input[name=date]').val('');
					$('#reservationForm input[name=time]').val('');
					$('#reservationForm textarea[name=people]').val('');
					$('#reservationForm textarea[name=email]').val('');
				},
				error: function (data) {
					alert("Error occurd! Please try again");
				}
			});

			return false;

		});


		/* ---------------------------------------------- /*
		 * Subscribe form ajax
		 /* ---------------------------------------------- */

		$('#subscription-form').submit(function (e) {

			e.preventDefault();
			var $form = $('#subscription-form');
			var submit = $('#subscription-form-submit');
			var ajaxResponse = $('#subscription-response');
			var email = $('input#semail').val();

			$.ajax({
				type: 'POST',
				url: 'assets/php/subscribe.php',
				dataType: 'json',
				data: {
					email: email
				},
				cache: false,
				beforeSend: function (result) {
					submit.empty();
					submit.append('<i class="fa fa-cog fa-spin"></i> Wait...');
				},
				success: function (result) {
					if (result.sendstatus == 1) {
						ajaxResponse.html(result.message);
						$form.fadeOut(500);
					} else {
						ajaxResponse.html(result.message);
					}
				}
			});

		});


		/* ---------------------------------------------- /*
		 * Google Map
		 /* ---------------------------------------------- */

		if ($("#map").length == 0 || typeof google == 'undefined') return;

		// When the window has finished loading create our google map below
		google.maps.event.addDomListener(window, 'load', init);

		var mkr = new google.maps.LatLng(40.6700, -74.2000);
		var cntr = (mobileTest) ? mkr : new google.maps.LatLng(40.6700, -73.9400);

		function init() {
			// Basic options for a simple Google Map
			// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
			var mapOptions = {
				// How zoomed in you want the map to start at (always required)
				zoom: 11,
				scrollwheel: false,
				// The latitude and longitude to center the map (always required)
				center: cntr, // New York

				// How you would like to style the map.
				// This is where you would paste any style found on Snazzy Maps.
				styles: [{
					"featureType": "all",
					"elementType": "geometry.fill",
					"stylers": [{
						"visibility": "on"
					},
					{
						"saturation": "-11"
					}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [{
						"saturation": "22"
					}]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [{
						"saturation": "-58"
					},
					{
						"color": "#cfcece"
					}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "labels.text",
					"stylers": [{
						"color": "#f8f8f8"
					}]
				},
				{
					"featureType": "administrative",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#999999"
					},
					{
						"visibility": "on"
					}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "labels.text.stroke",
					"stylers": [{
						"visibility": "on"
					}]
				},
				{
					"featureType": "administrative.country",
					"elementType": "geometry.fill",
					"stylers": [{
						"color": "#f9f9f9"
					},
					{
						"visibility": "simplified"
					}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "all",
					"stylers": [{
						"color": "#f2f2f2"
					}]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [{
						"saturation": "-19"
					},
					{
						"lightness": "-2"
					},
					{
						"visibility": "on"
					}
					]
				},
				{
					"featureType": "poi",
					"elementType": "all",
					"stylers": [{
						"visibility": "off"
					}]
				},
				{
					"featureType": "road",
					"elementType": "all",
					"stylers": [{
						"saturation": -100
					},
					{
						"lightness": 45
					}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "all",
					"stylers": [{
						"visibility": "simplified"
					}]
				},
				{
					"featureType": "road.arterial",
					"elementType": "labels.icon",
					"stylers": [{
						"visibility": "off"
					}]
				},
				{
					"featureType": "transit",
					"elementType": "all",
					"stylers": [{
						"visibility": "off"
					}]
				},
				{
					"featureType": "water",
					"elementType": "all",
					"stylers": [{
						"color": "#d8e1e5"
					},
					{
						"visibility": "on"
					}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry.fill",
					"stylers": [{
						"color": "#dedede"
					}]
				},
				{
					"featureType": "water",
					"elementType": "labels.text",
					"stylers": [{
						"color": "#cbcbcb"
					}]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.fill",
					"stylers": [{
						"color": "#9c9c9c"
					}]
				},
				{
					"featureType": "water",
					"elementType": "labels.text.stroke",
					"stylers": [{
						"visibility": "off"
					}]
				}
				]
			};

			// Get the HTML DOM element that will contain your map
			// We are using a div with id="map" seen below in the <body>
			var mapElement = document.getElementById('map');

			// Create the Google Map using our element and options defined above
			var map = new google.maps.Map(mapElement, mapOptions);

			// Let's also add a marker while we're at it
			var image = new google.maps.MarkerImage('assets/images/map-icon.png',
				new google.maps.Size(59, 65),
				new google.maps.Point(0, 0),
				new google.maps.Point(24, 42)
			);

			var marker = new google.maps.Marker({
				position: mkr,
				icon: image,
				title: 'Titan',
				infoWindow: {
					content: '<p><strong>Rival</strong><br/>121 Somewhere Ave, Suite 123<br/>P: (123) 456-7890<br/>Australia</p>'
				},
				map: map,
			});
		}

	});
})(jQuery);