let myString = "";
const YEAR = 2026;
const NUM_IMAGES = 56;

for(let i = 1; i < NUM_IMAGES+1; i++){
  
  myString+=`{
    "filename":"${i}.jpg",
    "alt_text":"Ars Electronica ${YEAR}, image ${i}",
    "year":"${YEAR}",
    "type":"exhibition",
    "include":true
  },\n`
}

console.log(myString);

