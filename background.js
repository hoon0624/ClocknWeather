const body = document.querySelector("body");

const IMG_NUMBER = 6;

function handleImageLoad(){
    console.log("finished image loading");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `/images/${imgNumber +1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}    

function generateRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = generateRandom();
    paintImage(randomNumber);
}

init();

