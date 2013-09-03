jQuery(function ($) {
	$(document).ready(function () {

		//SEARCH CLEAR AND RESTORE VALUE
		var el = $('input[type=text], input[type=email], textarea, input.header-search');
		el.focus(function(e) {
			if (e.target.value === e.target.defaultValue)
				e.target.value = '';
		});
		el.blur(function(e) {
			if (e.target.value === '')
				e.target.value = e.target.defaultValue;
		});

		//MOBILE NAV
		$(function() {
			$('#hamburger').on('click', function(e) {
				e.preventDefault();
				var body = $('body');
				if(body.hasClass('offcanvas')) {
					body.removeClass('offcanvas');
				} else {
					body.addClass('offcanvas');
				}
			});
		});

		//DROPDOWNS
		$(document).ready(function () {
			$('.menu li:has(> ul)').addClass('parent');

			$('.menu li').hoverIntent(
				function () {
					$(this).addClass('open');
					$('ul:first', this).delay(250).fadeIn();
				},
				function () {
					$('ul:first', this).fadeOut();
					$(this).removeClass('open');
				}
			);
		});

        
		//ADD MAGNIFIC POPUP TO IMAGE LINKS AND GALLERIES
		$(document).ready(function() {
			$('a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]').each(function(){
				//single image popup
				if ($(this).parents('.gallery').length === 0) {
					$(this).magnificPopup({type:'image'});
				}
			});
			//gallery popup
			$('.gallery').each(function() {
				$(this).magnificPopup({
					delegate: 'a',
					type: 'image',
					gallery: {enabled:true}
				});
			});
		});

		// LOAD DROPDOWN FOR SECONDARY NAV IN FOOTER ON MOBILE DEVICES
		if(navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
			// create the dropdown base
			$("<select />").appendTo(".secondary-nav");

			// create default option "Go to..."
			$("<option />", {
				"selected": "selected",
				"value"   : "",
				"text"    : "Go to..."
			}).appendTo(".secondary-nav select");

			// populate dropdown with menu items
			$(".secondary-nav a").each(function() {
			var el = $(this);
				$("<option />", {
					"value"   : el.attr("href"),
					"text"    : el.text()
				}).appendTo(".secondary-nav select");
			});

			$(".secondary-nav select").change(function() {
				window.location = $(this).find("option:selected").val();
			});
		}

	});
});