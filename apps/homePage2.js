document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });

  // Initialize collapsible (uncomment the lines below if you use the dropdown variation)
  // var collapsibleElem = document.querySelector('.collapsible');
  // var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.sidenav').sidenav();
  });

//var images = new Array();
var container = document.getElementById("img-container");
var increment = 0;
var images = [
    '../images/image2.jpg',
    '/images/image1.jpg',
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
    if (increment == 0) {
        increment = 3;
    }
    increment--;
    container.style.backgroundImage = images[increment]; 
    console.log(increment)
}