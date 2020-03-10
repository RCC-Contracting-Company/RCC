$(document).ready(function() {
  $(".slider").slick({
    // dots: true,
    arrow: true,
    swipe: true,
    swipeToSlide: true,
    touchMove: true,
    lazyLoad: "ondemand",
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          swipe: true,
          swipeToSlide: true,
          touchMove: true
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          swipe: true,
          swipeToSlide: true,
          touchMove: true
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          swipe: true,
          swipeToSlide: true,
          touchMove: true
        }
      }
    ]
  });
});
