var form = document.querySelector("#form");




// User Input Values
var namae = document.querySelector("#nam");
var company = document.querySelector("#company1");
var support = document.querySelector("#support1");
var hours = document.querySelector("#hours1");
var donation = document.querySelector("#donation1");
var render = document.querySelector("#render")



form.addEventListener("submit", function (e) {
    var data = {
        namae: namae.value,
        company: company.value,
        support: support.value,
        hours: hours.value,
        donation: donation.value
    };
    console.log(data);
    e.preventDefault();
    db.collection("partners").add(data).then(function () {});
});




var count = 1
db.collection('partners').onSnapshot(function (snapshot) {
    console.log(count)
    let changes = snapshot.docChanges();
    let hi = 'hi'
    changes.forEach(function (change) {
        count++
        console.log(count)


        if (count % 2 == 0) {
            render.innerHTML += `
                <div class="bottom blue"> 
                    <p class="col" >${change.doc.data().company}</p>
                    <p class="col" >${change.doc.data().namae}</p>
                    <p class="col" >${change.doc.data().hours}</p>
                    <p class="col" >${change.doc.data().support}</p>
                    <p class="col" >${change.doc.data().donation}</p>
                </div>
                `

        } else {
            render.innerHTML += `
                <div class="bottom"> 
                    <p class="col" >${change.doc.data().company}</p>
                    <p class="col" >${change.doc.data().namae}</p>
                    <p class="col" >${change.doc.data().hours}</p>
                    <p class="col" >${change.doc.data().support}</p>
                    <p class="col" >${change.doc.data().donation}</p>
                </div>
                `
        }

    })

})

// Or with jQuery

$(document).ready(function () {
    $('.modal').modal();
});