$(function () {

  var content = $('.wrapper__content__box');
  

  var cloudy1 = $('.cloudy1');
  var cloudy2 = $('.cloudy2');


  var phone1 = $('.phone-1').offset().top;
  var phone2 = $('.phone-2').offset().top;
  var phone3 = $('.phone-3').offset().top;

  
  // - - - scroll - - -

  $(window).on('scroll', function () {
    var hightScroll = $(this).scrollTop();

    if (hightScroll > phone1 - $(window).height() / 1.2) {
      $('.phone-1').css({
        opacity: 1,
        transform: `translateX(${0}px)`
      })
    }

    if (hightScroll > phone2 - $(window).height() / 1.2) {
      $('.phone-2').css({
        opacity: 1,
        transform: `translateX(${0}px)`
      })
    }

    if (hightScroll > phone3 - $(window).height() / 1.2) {
      $('.phone-3').css({
        opacity: 1,
        transform: `translateX(${0}px)`
      })
    }
    if (hightScroll > main - $(window).height() / 2) {
      $('.main_phone').css({
        opacity: 1,
        transform: `translateX(${0}px)`
      })
    }

  });

// - - - mousemove - - -

  content.on('mousemove', function () {
      cloudy1.css({
        transform: `translateX(${event.clientX * 0.03}px) translateY(${event.clientY * 0.03}px)`
      });
      cloudy2.css({
        transform: `translateX(-${event.clientX * 0.03}px) translateY(-${event.clientY * 0.03}px)`
      });
  })

  $('.header').on('mousemove', function () {
    $('.circle1').css({
      transform: `translateX(${event.clientX * 0.03}px) translateY(${event.clientY * 0.03}px)`
    });
    $('.circle2').css({
      transform: `translateX(-${event.clientX * 0.03}px) translateY(-${event.clientY * 0.03}px)`
    });
  })
  
});