$(document).ready(function () {
  $("#pengurus-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 2,
    dots: false,
    margin: 20,
    navText: [
      "<i class='carousel-control-prev-icon'></i>",
      "<i class='carousel-control-next-icon'></i>",
    ],
    navContainer: "#slider-pengurus",
  });
  $("#testimony-slider").owlCarousel({
    loop: true,
    nav: true,
    items: 2,
    dots: false,
    margin: 20,
    navText: [
      "<i class='carousel-control-prev-icon'></i>",
      "<i class='carousel-control-next-icon'></i>",
    ],
    navContainer: "#slider-pengurus",
  });
});
