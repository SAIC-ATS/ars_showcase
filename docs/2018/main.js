// generateContent();
// generateDivs();
generateWrappedContent();

function generateWrappedContent(){

  for(let i = 0; i < 27; i++) {
    let newGridItem = `
    <div class="grid-item">
      <img src="images/ars_images_2018/0${i+1}.jpg" alt="ars2018${i+1}">
    </div>`
    $('#grid-container').append(newGridItem);
  }
}

$(window).scroll(function() {

  if($(window).scrollTop() > 800) {
    $('.back-to-top').addClass('show');
  } else {
    $('.back-to-top').removeClass('show');
  }
});

$('#back-to-top').on('click', function(e) {
  // When the user clicks on the button, scroll to the top of the document
  e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 700);
});


function generateContent(){

  for(let i = 0; i < 27; i++) {
    let newGridItem = `<img src="images/ars_images_2018/0${i+1}.jpg" alt="ars2018${i+1}" class="grid-item">`
    $('#grid-container').append(newGridItem);
  }
}

function generateDivs(){

  for(let i = 0; i < 27; i++) {
    let newGridItem = `<div class="grid-item"></div>`
    $('#grid-container').append(newGridItem);
  }
}


function generateRandomContent(){

  for(let i = 0; i < 30; i++) {

    if(i == 0) {
      let newGridItem = `<img src="images/portrait/${i+1}.png" alt="portrait_${i+1}" class="grid-item grid-sizer">`
      $('#grid-container').append(newGridItem);
    } else {
      if(Math.random() < 0.5) {
        let newGridItem = `<img src="images/portrait/${i+1}.png" alt="portrait_${i+1}" class="grid-item">`
        $('#grid-container').append(newGridItem);
      } else {
        let newGridItem = `<img src="images/landscape/${i+1}.png" alt="portrait_${i+1}" class="grid-item">`
        $('#grid-container').append(newGridItem);
      }
    }
  }
}


// $('.isotope-grid').isotope({
//     itemSelector: '.grid-item',
//     masonry: {
//     columnWidth: 100
//     }
// });  








