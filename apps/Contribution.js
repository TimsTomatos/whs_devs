var form = document.querySelector("#form");

// User Input Values
var namae = document.querySelector("#nam");
var company = document.querySelector("#company1");
var support = document.querySelector("#support1");
var hours = document.querySelector("#hours1");
var donation = document.querySelector("#donation1");




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
    changes.forEach(function (change) {
        console.log(change.doc.data().company)
        render.innerHTML = change.doc
        
    })
})