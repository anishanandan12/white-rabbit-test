$(document).ready(function () {
  $("#productImgSlider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    nextArrow:
      "<button type='button' class='slick-next'><svg width='12' height='20' viewBox='0 0 12 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M12 10L2 0L0.6 1.4L9.2 10L0.6 18.6L2 20L12 10Z' fill='#B1B7B9'/></svg></button>",
    prevArrow:
      "<button type='button' class='slick-prev'><svg width='12' height='20' viewBox='0 0 12 20' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M0 10L10 0L11.4 1.4L2.8 10L11.4 18.6L10 20L0 10Z' fill='#B1B7B9'/></svg></button>",
    asNavFor: "#productImgSliderNav",
  });
  $("#productImgSliderNav").slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: "#productImgSlider",
    focusOnSelect: true,
    infinite: true,
  });
});
