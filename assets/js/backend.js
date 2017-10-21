//Nav
$(document).ready(function() {
	$('.carousel.carousel-slider').carousel({
		noWrap: true,
		dist: 0,
		fullWidth: true
	});
	$(".dropdown-button").dropdown();
	$('.button-collapse').sideNav({
		menuWidth: 300,
		edge: 'left',
		closeOnClick: true,
		draggable: true
	});
})

//Modal

$(document).ready(function() {
	$('.modal').modal({
		dismissible: true, // Modal can be dismissed by clicking outside of the modal
		opacity: 0, // Opacity of modal background
		inDuration: 200, // Transition in duration
		outDuration: 100, // Transition out duration
		startingTop: '4%', // Starting top style attribute
		endingTop: '10%', // Ending top style attribute
	});
});

//Slide Animation

$(document).ready(function() {
	$("nav, a, footer a[href='#!']").on('click', function(event) {

		if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top,
			}, 1200, function() {

				window.location.hash = hash;
			});
		}
	});
})

$(window).scroll(function() {
	$(".slide-animation").each(function() {
		var pos = $(this).offset().top;

		var winTop = $(window).scrollTop();
		if (pos < winTop + 700) {
			$(this).addClass("slide");
		}
	});
});

//Change Scroll

$(window).on("scroll", function() {
	if ($(window).scrollTop() > (window.innerHeight - 25)) {
		$(".menu").addClass("scroll");
	} else {
		$(".menu").removeClass("scroll");
	}
	if ($(window).scrollTop() > (window.innerHeight - 25)) {
		$(".menu-title").addClass("scroll");
	} else {
		$(".menu-title").removeClass("scroll");
	}
});