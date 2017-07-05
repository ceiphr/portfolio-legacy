$(document).ready(function() {
  $('.button-collapse').sideNav({
    menuWidth: 300,
    edge: 'left',
    closeOnClick: true,
    draggable: true
  });
})

$(document).ready(function() {
  $("nav, a, footer a[href='#!']").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1200, function() {

        window.location.hash = hash;
      });
    }
  });
})

$(window).scroll(function() {
  $(".slideanim").each(function() {
    var pos = $(this).offset().top;

    var winTop = $(window).scrollTop();
    if (pos < winTop + 600) {
      $(this).addClass("slide");
    }
  });
});

$(window).on("scroll", function() {
  if ($(window).scrollTop() > 800) {
    $(".hamburger").addClass("scroll");
  } else {
    $(".hamburger").removeClass("scroll");
  }
});
