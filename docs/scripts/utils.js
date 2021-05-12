////////// LIGHTBOX

lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'alwaysShowNavOnTouchDevices': true,
    'disableScrolling': true,
    'fadeDuration': 10,
    'imageFadeDuration': 10,
    'showImageNumberLabel': false,
    'positionFromTop': 100,
  })
  
  ///////// SCROLL TO TOP
  
  $(window).scroll(function() {
    if($(window).scrollTop() > 800) {
      $('.back-to-top').addClass('show');
    } else {
      $('.back-to-top').removeClass('show');
    }
  });
  
  $('.back-to-top').on('click', function(e) {
    e.preventDefault();
      $('html, body').animate({
          scrollTop: 0
      }, '500');
  });