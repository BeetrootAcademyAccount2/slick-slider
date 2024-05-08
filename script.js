$(() => {
  var slider = $(".slider");

  slider.slick({
    // lazyLoad: "ondemand",
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    // speed: 300,
    // vertical: true,
    // verticalSwiping: true,
    // arrows: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //     },
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  });

  $("#addSlideLastBtn").on("click", function () {
    var newSlide = $('<li><img src="./imgs/add.jpg" alt="New Image"></li>');

    //Without index
    slider.slick("slickAdd", newSlide);
  });

  $("#addSlideThirdBtn").on("click", function () {
    var newSlide = $('<li><img src="./imgs/add.jpg" alt="New Image"></li>');

    //Add index and image is added after set position
    slider.slick("slickAdd", newSlide, 1);
  });

  $("#removeSlideBtn").click(function () {
    // Index of the slide to remove
    $(".slider").slick("slickRemove", 3); // Remove the slide
  });
});

/*
$(() => {
  $(".showcase").slick({
    dots: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: ".slider",
  });

  $(".slider").slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".showcase",
    focusOnSelect: true,
  });
});
*/
