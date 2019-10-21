$(function(){
    $('.slider').slick({
      autoplay:true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows:false
          }
        }
      ]
    });
  });

  $(function(){
    $('.slider-products').slick({
      autoplay:true,
      arrows:false,
      dots: true
    });
  });

  $(function(){
    $('.center').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 2,
      arrows:false,
      responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
    });
  });
    