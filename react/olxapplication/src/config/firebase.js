import firebase from "firebase";
// import { func } from "prop-types";

var firebaseConfig = {
    apiKey: "AIzaSyDe7a0DxFXN16H0sz1s8jFxSLlkMZOBiKE",
    authDomain: "olx-clone-ef08e.firebaseapp.com",
    projectId: "olx-clone-ef08e",
    storageBucket: "olx-clone-ef08e.appspot.com",
    messagingSenderId: "1064103834158",
    appId: "1:1064103834158:web:252e1a01485d3f5efde5bf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  function register(title,price,username,contactNo,images){
    // firebase.auth().createUserWithEmailAndPassword()
    // .then((userCredential) => {
    //     // Signed in 
        // var user = userCredential.user;
    //     console.log('user ===>', user)
    //     alert('User Registered Successfully!')
  
        db.collection('users').add({ title,price,username,contactNo,images })
        .then(res => {
          console.log('res ===>', res)
          alert("user added post successfully")
        }).catch(e => {
          console.log('error in user db', e.message)
        })
        // ...
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     alert(errorMessage)
    //     // ..
    //   });
  }

  function getAllUsersData() {
      return db.collection('users').get();
  }

  export {
      register,
      getAllUsersData,
  }