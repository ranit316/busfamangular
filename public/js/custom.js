

// Select all links with hashes
jQuery('a[href*="#"].hash')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function (event) {
		// On-page links
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
			&&
			location.hostname == this.hostname
		) {
			// Figure out element to scroll to
			var target = jQuery(this.hash);
			target = target.length ? target : jQuery('[name=' + this.hash.slice(1) + ']');
			// Does a scroll target exist?
			if (target.length) {
				// Only prevent default if animation is actually gonna happen
				event.preventDefault();
				jQuery('html, body').animate({
					scrollTop: target.offset().top
				}, 1000, function () {
					// Callback after animation
					// Must change focus!
					var $target = jQuery(target);
					$target.focus();
					if ($target.is(":focus")) { // Checking if the target was focused
						return false;
					} else {
						$target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
						$target.focus(); // Set focus again
					}
					;
				});
			}
		}
	});

$('.hash_area a.hash').on('click', function (e) {
	e.preventDefault();

	$('html, body').animate({
		scrollTop: $($(this).attr('href')).offset().top - 170
	}, 500, 'linear');
});



// backto-top btn script
var btn = jQuery('#backto-top');
jQuery(window).scroll(function () {
	if (jQuery(window).scrollTop() > 300) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});

btn.on('click', function (e) {
	e.preventDefault();
	jQuery('html, body').animate({ scrollTop: 0 }, '1000');
});
// backto-top btn script end
// equalheight script start
jQuery(function () {
	jQuery('.equalheight').matchHeight();
});
// equalheight script end


// Counter
document.addEventListener("DOMContentLoaded", () => {
	function counter(id, start, end, duration) {
		let obj = document.getElementById(id),
			current = start,
			range = end - start,
			increment = end > start ? 1 : -1,
			step = Math.abs(Math.floor(duration / range)),
			timer = setInterval(() => {
				current += increment;
				obj.textContent = current;
				if (current == end) {
					clearInterval(timer);
				}
			}, step);
	}
	jQuery('.counter_txt').each(function (index) {
		var elem_count = jQuery(this).text();
		var elem_id = jQuery(this).attr('id');
		counter(elem_id, 0, elem_count, 4000);
	});
});
// Counter

jQuery(document).ready(function ($) {
	jQuery('.stellarnav').stellarNav({
		theme: 'light',
		breakpoint: 991,
		position: 'right',
	});

	jQuery("#fixed-top").scrollToFixed();

	var owl = jQuery('.brands_one');
	owl.owlCarousel({
		margin: 0,
		smartSpeed: 500,
		nav: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		loop: false,
		autoplayTimeout: 1700,
		responsive: {
			0: { items: 2 },
			480: { items: 2 },
			576: { items: 2 },
			768: { items: 4 },
			992: { items: 4 },
			1200: { items: 4 }
		}
	});

	var owl = jQuery('.brands_two');
	owl.owlCarousel({
		margin: 0,
		smartSpeed: 500,
		nav: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		loop: false,
		autoplayTimeout: 1700,
		responsive: {
			0: { items: 2 },
			480: { items: 2 },
			576: { items: 2 },
			768: { items: 4 },
			992: { items: 4 },
			1200: { items: 4 }
		}
	});
});


jQuery(document).ready(function () {

	// <---Tooltip--->

	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl)
	})

	// <---Tooltip--->

});

$(document).ready(function () {
	//alert();
	$("#extend_row").hide();
	$("#showDetail").click(function () {
		//alert();
		$("#extend_row").show();
		$("#showDetail").hide();
	});
});











