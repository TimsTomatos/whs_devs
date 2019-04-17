var form = document.querySelector("#form");
var slot = document.querySelector('.slot');
var save_changes = document.querySelector('#save-changes');

//test
var name1 = document.querySelector("#name")

// User Input Values
var namae = document.querySelector("#nam");
var company = document.querySelector("#company1");
var support = document.querySelector("#support1");
var hours = document.querySelector("#hours1");
var donation = document.querySelector("#donation1");
var render = document.querySelector("#render")

// New Data Inputs
var new_name = document.querySelector("#new-name");
var new_company = document.querySelector("#new-company");
var new_support = document.querySelector("#new-support");
var new_hours = document.querySelector("#new-hours");
var new_donation = document.querySelector("#new-donation");
var new_render = document.querySelector("new-render");

//global data variable
var globalData = [];
var new_index = 0;

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
    let changes = snapshot.docChanges()
    changes.forEach(function (change) {
        //console.log(change.doc.data().company)


        render.innerHTML += `
        <div class="bottom"> 
            <h2 class="mask">${change.doc.data().company}</h2>
            <h2 class="mask">${change.doc.data().namae}</h2>
            <h2 class="mask">${change.doc.data().hours}</h2>
            <h2 class="mask">${change.doc.data().support}</h2>
            <h2 class="mask">${change.doc.data().donation}</h2>
            <button class='buttons' onclick="open_modal()">Edit</button>
        </div>
        ` 
        globalData.push(change.doc.data()); //pushes the changes to a global variable
    });

    document.querySelectorAll('.buttons').forEach( (elem, index) => { //gets ll the buttons and then gives them a event listener
        
        // Checks if new data is empty
        data = {
            name: changes[index].doc.data().namae,
            company: changes[index].doc.data().company,
            hours: changes[index].doc.data().hours,
            support: changes[index].doc.data().support,
            donation: changes[index].doc.data().donation
        }
       

        elem.addEventListener('click', () => { 
            open_modal(data)
            new_index = index;
            console.log(index)
            
            //new_index.push(index)
        });
    });
    
});





save_changes.addEventListener('click', () => {
    //console.log(globalData);
   

    var new_data = {
        namae: new_name.value,
        company: new_company.value,
        hours: new_hours.value,
        support: new_support.value,
        donation: new_donation.value
    }
    
    //  DEBUG LATER: check if the edit input fields are empty and replaces those that are empty with old the old data
    // console.log("new", new_data.namae)
    // for (var i = 0; i < new_data.length; i++) {
    //     if (new_data.namae == "") {
    //         globalData[0].namae = "empty";
    //     }
    // }
    return db.collection('partners').where("namae", "==", globalData[new_index].namae).get() //have a function take in the current index you are editing, and then frpm that index, work from there
    .then( parm => {
        //console.log(parm.docs[0].id)
        db.collection('partners').doc(parm.docs[0].id).update(new_data).then( () => { 
             location.reload();
        })
    })
    
});


// Modal
var modal = document.querySelector('.modal');
var span = document.getElementsByClassName("close")[0];

function open_modal(data) {
    slot.innerHTML = `
    <p>${data.company}</p>
    <p>${data.name}</p>
    <p>${data.hours}</p>
    <p>${data.support}</p>
    <p>${data.donation}</p>
    `;
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