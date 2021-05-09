$(document).ready(function(){
  
    for(let i = 0; i < 30; i++) {

        if(Math.random() < 0.5) {
            let newGridItem = `<img src="images/portrait/${i+1}.png" alt="portrait_${i+1}" class="grid-item">`
            $('#cluster1').append(newGridItem);
        } else {
            let newGridItem = `<img src="images/landscape/${i+1}.png" alt="portrait_${i+1}" class="grid-item">`
            $('#cluster1').append(newGridItem);
        }
       
    }   
})

