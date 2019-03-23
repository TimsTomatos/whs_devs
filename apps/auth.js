// Sign Up Variables
const user = document.querySelector("#user");
const pass = document.querySelector("#pass");
const form = document.querySelector("#form");

// Login Up Variables
const log_in = document.querySelector("#logIn");
const user_login = document.querySelector("#username");
const pass_login = document.querySelector("#password");

var render_username = document.querySelector("#render_username"); 


// Sign Up Functions 
form.addEventListener('submit', function(parm) {
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
        render_username.innerHTML = user.email;
    }
    else 
    {
        console.log("Logged out");
    }
});


// Login Stuff Functions
login.addEventListener('submit', function(parm) {
    parm.preventDefault();
    
    var username_value = user_login.value;
    var password_value =  pass_login.value;

    auth.signInWithEmailAndPassword(username_value, password_value)
    .then(function () {
        console.log("Login Successful")
    })
})

// logout
logout_button.addEventListener('click', function () {
    auth.signOut()
    .then(function() {
        console.log("logged out")
        render_username.innerHTML = null;
    })

})