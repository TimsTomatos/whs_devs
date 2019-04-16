var form = document.querySelector("#form");



//test
var name1 = document.querySelector("#name")

// User Input Values
var namae = document.querySelector("#nam");
var company = document.querySelector("#company1");
var support = document.querySelector("#support1");
var hours = document.querySelector("#hours1");
var donation = document.querySelector("#donation1");
var render = document.querySelector("#render")


//Pushes Data
form.addEventListener("submit", function (e){
    var data = {
        namae: namae.value,
        company: company.value,
        support: support.value,
        hours: hours.value,
        donation: donation.value
    };
    console.log(data);
    e.preventDefault();
    db.collection("partners").add(data).then(function (){
    });
});


//Renders data
db.collection('partners').onSnapshot(function (snapshot) {
    let changes = snapshot.docChanges();
    changes.forEach(function (change) {
        console.log(change.doc.data().company)
        render.innerHTML += `
        <div class="bottom"> 
            <h2 class="mask">${change.doc.data().company}</h2>
            <h2 class="mask">${change.doc.data().namae}</h2>
            <h2 class="mask">${change.doc.data().hours}</h2>
            <h2 class="mask">${change.doc.data().support}</h2>
            <h2 class="mask">${change.doc.data().donation}</h2>
            <button onclick="open_modal()">Edit</button>
            <button>Save</button>
        </div>
        `
    })
})


// Modal
var modal = document.querySelector('.modal');
var span = document.getElementsByClassName("close")[0];

function open_modal() {
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