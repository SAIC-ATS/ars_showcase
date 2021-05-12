createGallery();

function createGallery() {
  for(let i = 0; i < 27; i++) {
    let newGridItem = `
    <div class="grid-item">
      <img src="images/thumbs/${i+1}.jpg" alt="ars2018_${i+1}">
    </div>`
    $('#grid-container').append(newGridItem);
  }
}

////////// LIGHTBOX


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








