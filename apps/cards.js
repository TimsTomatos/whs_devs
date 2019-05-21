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

const storageReference = storage.ref();

var cardHolder = document.querySelector('#events-area');

function render() {
  db.collection('Events').onSnapshot(data => {
    let temp = [];

    data.forEach(function(doc) {
        temp.push(doc.data());
    });

    temp.forEach(data => {
        storageReference.child(data.file).getDownloadURL().then(url => {
            data.file = url;

            cardHolder.innerHTML += 
            
            `<div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="${url}">
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">${data.event}<i
                  class="material-icons right">more_vert</i></span>
              <p><a href="#">This is a link</a></p>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
              <p>${data.description}</p>
            </div>
            </div>`;
            
        });
    });

});
}

render();