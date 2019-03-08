//var images = new Array();
var container = document.getElementById("mid");
var increment = 0;
var images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg'
]

// images[0] = new Image();               //Defines Array index value
// images[0].src = '/images/image1.jpg'; //Assigns value to array index

// images[1] = new Image(); 
// images[1].src = '/images/image2.jpg';

// images[2] = new Image();
// images[2].src = '/images/image3.jpg';

function rightImage() {
    if (increment == 2) {
        increment = 0;
    }
    increment++;
    container.style.backgroundImage = "url(images[increment])"; 
    console.log(increment)
    console.log(container.style.backgroundImage.src)
}

function leftImage() {
    if (increment == 2) {
        increment = 0;
    }
    increment--;
    container.style.backgroundImage = images[increment]; 
    console.log(increment)
}