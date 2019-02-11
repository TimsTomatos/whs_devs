console.log('bleed tets');
function oof() {
    console.log('bleed tets');
}
AOS.init({
    offset: 500,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
});


AOS.refreshHard();

function appearButton(e) {
    e.nextElementSibling.style.visibility = "visible";
}

function disButton(e) {
    setTimeout(() => { 
        e.nextElementSibling.style.visibility = "hidden"; }, 100);
}



var inputs = document.querySelectorAll("input,select");
for (var i = 0 ; i < inputs.length; i++) {
   inputs[i].addEventListener("keypress", function(e){
      if (e.which == 13 || button.clicked==true) {
         e.preventDefault();
         var nextInput = document.querySelectorAll('[tabIndex="' + (this.tabIndex + 1) + '"]');
         if (nextInput.length === 0) {
            nextInput = document.querySelectorAll('[tabIndex="1"]');
         }
         nextInput[0].focus();
      }
   })
}
