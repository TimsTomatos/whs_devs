  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAVGq1K_E0Fkzo1DDHch_uS-2_hkfDa1q8",
    authDomain: "whs-devs.firebaseapp.com",
    databaseURL: "https://whs-devs.firebaseio.com",
    projectId: "whs-devs",
    storageBucket: "whs-devs.appspot.com",
    messagingSenderId: "978939713269"
  };
  firebase.initializeApp(config);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

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



var admin_btn = document.querySelector("#adminBtn");

// Modal Stuff
var modal = document.getElementById('myModal');
var btn = document.getElementById("mybtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}





// Lpgin Box Switch
const switchers = [...document.querySelectorAll('.switcher')]

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
        this.parentElement.classList.add('is-active')
        console.log("oof");
	})
})


// Authetication Stuff
// Sign Up Variables
const user = document.querySelector("#user");
const pass = document.querySelector("#pass");
const form = document.querySelector("#form");
const signup_button = document.querySelector("#btn-sign");


// Login Up Variables
const log_in = document.querySelector("#logIn");
const user_login = document.querySelector("#login-email");
const pass_login = document.querySelector("#login-password");
const login_button = document.querySelector("#btn-login")
var render_username = document.querySelector("#render-username"); 
var login_elem = document.querySelector("#mybtn"); 


//Logout Button 
const logout_button = document.querySelector("#btn-logout");
const log2 = document.querySelector('#btn-logout2');

// Sign Up Functions 
signup_button.addEventListener('submit', function(parm) {
    parm.preventDefault(); // Prevents Page Form refreshing
    console.log("Neato Libudi")
    var user_value = user.value;
    var pass_value = pass.value;
    auth.createUserWithEmailAndPassword(user_value, pass_value)
    .then(function() {
        console.log("Sign up successful")
    })
});


auth.onAuthStateChanged(function(user) { // Checks if they are signed in or signed out
    if (user)
    {
        console.log("Logged in");

        //CHANGGED TO NONE LATER FOR LOGOUT_BUTTON 
        logout_button.style.display = "block";
        render_username.style.display = "block";
        render_username.innerHTML = '<a href="../pages/profilePage.html">Profile</a>';
        //login_elem.parentNode.removeChild(login_elem);
        //logout_button.parentNode.removeChild(logout_button);
        login_elem.style.display = "none";
    }
    else 
    {
        console.log("Logged out");
    }
});



// Login Stuff Functions
login_button.addEventListener('click', function(parm) {
    parm.preventDefault();
    
    var username_value = user_login.value;
    var password_value =  pass_login.value;

    auth.signInWithEmailAndPassword(username_value, password_value)
    .then(function (user) {
        console.log(user.user.email)
        //Checks for admin account
       // console.log(user.user.email)
        if (user.user.email == "admin@gmail.com") {
            console.log("Working as Intended!!") 
            admin_btn.style.display = "block";
            window.open ('adminPages/dashboard.html','_self',false)
        }
        console.log("Login Successful")
    })
})
login_button.onclick = function() {
    modal.style.display = "none";
  }


// logout
logout_button.addEventListener('click', function () {
    auth.signOut()
    .then(function() {
        console.log("logged oof")
        btn.style.display = "block";
        logout_button.style.display = "none";
        //render_username.innerHTML = "";
        render_username.style.display = "none";
    })

})

