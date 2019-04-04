var form = document.querySelector("#form");




// User Input Values
var namae = document.querySelector("#nam");
var company = document.querySelector("#company1");
var support = document.querySelector("#support1");
var hours = document.querySelector("#hours1");
var donation = document.querySelector("#donation1");
var render = document.querySelector("#render")



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





db.collection('partners').onSnapshot(function (snapshot) {
    let changes = snapshot.docChanges();
    let hi = 'hi'
    changes.forEach(function (change) {
        console.log(change.doc.data().company)
        render.innerHTML += `
        <div class="bottom"> 
            <h2>${change.doc.data().company}</h2>
            <h2>${change.doc.data().namae}</h2>
            <h2>${change.doc.data().hours}</h2>
            <h2>${change.doc.data().support}</h2>
            <h2>${change.doc.data().donation}</h2>
        </div>
        `
    })
})