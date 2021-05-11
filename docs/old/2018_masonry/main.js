generateContent();

function generateContent(){

  for(let i = 0; i < 27; i++) {

    if(i == 0) {
      let newGridItem = `<img src="images/ars_images_2018/0${i+1}.jpg" alt="ars2018${i+1}" class="grid-item">`
      $('#grid-container').append(newGridItem);
    } else {
      let newGridItem = `<img src="images/ars_images_2018/0${i+1}.jpg" alt="ars2018${i+1}" class="grid-item">`
      $('#grid-container').append(newGridItem);
    }
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








