// Nav
$(document).ready(function () {
	$('.tooltipped').tooltip({ delay: 50 });
	$(".carousel.carousel-slider").carousel({ fullWidth: true });
	$(".dropdown-button").dropdown();
	$(".button-collapse").sideNav({
		menuWidth: 300,
		edge: "left",
		closeOnClick: true,
		draggable: true
	});
	$(".modal").modal({
		dismissible: true,
		opacity: 0,
		inDuration: 200,
		outDuration: 100,
		startingTop: "4%",
		endingTop: "10%",
	});
	$("nav, a, footer a[href='#!']").on("click", function (event) {
		if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$("html, body").animate({

				scrollTop: $(hash).offset().top,

			}, 500, function () {

				window.location.hash = hash;
			});
		}
	});
});


// Slide Animation

$(window).scroll(function () {
	$(".slide-animation").each(function () {
		var pos = $(this).offset().top;

		var winTop = $(window).scrollTop();
		if (pos < winTop + 800) {
			$(this).addClass("slide");
		}
	});
});

// Change Scroll

$(window).on("scroll", function () {
	if ($(window).scrollTop() > (window.innerHeight - 25) && window.screen.availWidth < 992) {
		$(".menu").addClass("scroll");
	} else {
		$(".menu").removeClass("scroll");
	}
	if ($(window).scrollTop() > (window.innerHeight - 25) && window.screen.availWidth < 992) {
		$(".menu-title").addClass("scroll");
	} else {
		$(".menu-title").removeClass("scroll");
	}
});