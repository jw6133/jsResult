const body = document.querySelector("body");
const images = ["0.jpg","1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg",
"7.jpg","8.jpg","9.jpg","10.jpg"];

function printImages(){
const chosenImage = images[Math.floor(Math.random() * images.length)];
const img=new Image();

img.src = `img/${chosenImage}`;
img.classList.add("bgImage");
body.appendChild(img);
}
printImages();