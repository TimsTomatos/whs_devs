// Sign Up
const user = document.querySelector("#user");
const pass = document.querySelector("#pass");
const form = document.querySelector("#form");

// Login Up 
const logIn = document.querySelector("#logIn");
const user_login = document.querySelector();
const pass_login = document.querySelector();



console.log("Hello", form);

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

logIn.addEventListener('submit', function(parm) {
    parm.preventDefault();
    var 
})
auth.onAuthStateChanged(function(user) { // Checks if they are signed in or signed out
    if (user)
    {
        console.log("Logged in");
        displayUsername.innerHTML = user.email;
    }
    else 
    {
        console.log("Logged out");
        signInStuff.forEach(e => e.style.display="none");
        signOutStuff.forEach(e => e.style.display="block");
    }
});
