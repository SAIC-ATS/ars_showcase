// createLightboxGallery();

// function createGallery() {
//   for(let i = 0; i < 27; i++) {
//     let newGridItem = `
//     <div class="grid-item">
//       <img src="images/thumbs/${i+1}.jpg" alt="ars2018_${i+1}" class="grid-img">
//     </div>`
//     $('#grid-container').append(newGridItem);
//   }
// }

function createLightboxGallery() {
  for(let i = 0; i < 27; i++) {
    let newGridItem = `
    <div class="grid-item">
      <a href="images/fullsize/${i+1}.jpg" data-lightbox="2018" data-title="image caption" data-alt="alt-text">
        <img src="images/thumbs/${i+1}.jpg" alt="ars2018_${i+1}" class="grid-img">
      </a>
    </div>`
    $('#grid-container').append(newGridItem);
  }
}

lightbox.option({
  'resizeDuration': 0,
  'wrapAround': true,
  'alwaysShowNavOnTouchDevices': true,
  'disableScrolling': true,
  'fadeDuration': 0,
  'imageFadeDuration': 0,
  'showImageNumberLabel': false,
  'positionFromTop': 50,
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








