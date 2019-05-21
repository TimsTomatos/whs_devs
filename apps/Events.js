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

const formStuff = document.querySelector('#formContent');
const fileUpload = document.querySelector('#fileUpload');
const eventInput = document.querySelector('#eventInput');
const subHeaderInput = document.querySelector('#subHeaderInput');
const descriptionArea = document.querySelector('#descriptionArea');


formStuff.addEventListener('submit',function(e) {
    e.preventDefault();

    var fileStorageName = 'images/' + fileUpload.files[0].name;

    var fileStorage = fileUpload.files[0];
  
    const submitData = {
      file: fileStorageName,
      event: eventInput.value,
      subHeader: subHeaderInput.value,
      description: descriptionArea.value
    };

    console.log(fileUpload.files[0].name);
    console.log(fileUpload.files[0]);
  
    db.collection('Events').add(submitData).then(() => {
      storageReference.child(fileStorageName).put(fileStorage).then(() => {
        console.log('success');
      })
    });
  
  });