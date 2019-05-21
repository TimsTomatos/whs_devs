var form = document.querySelector("#form");
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
  const db = firebase.firestore()

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




         var time_spent = change.doc.data().support * 10;

        console.log(change.doc.data().namae)
        if (change.doc.data().namae  == "") {
            render.innerHTML += `
            <div class="bottom"> 
                <p class="col" >${change.doc.data().company}</p>
                <p class="col" >none</p>
                <p class="col" >none</p>
                <p class="col" >none</p>
                <p class="col" >none</p>
            </div>`

        } else {
            render.innerHTML += `
        <div class="bottom"> 
            <p class="col" >${change.doc.data().company}</p>
            <p class="col" >${change.doc.data().namae}</p>
            <p class="col" >${change.doc.data().hours}</p>
            <p class="col" >${change.doc.data().support}</p>
            <p class="col" >${change.doc.data().donation}</p>
            <p class="col" >$${time_spent}</p>
        </div>
        `
        }


    })

})

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });





  