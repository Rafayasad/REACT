import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyA9f_aP9DVY1wPNiMDrod5CQB6ykgv5ooU",
    authDomain: "auths-28714.firebaseapp.com",
    projectId: "auths-28714",
    storageBucket: "auths-28714.appspot.com",
    messagingSenderId: "699401334110",
    appId: "1:699401334110:web:b049a5d0fab28ed19a33cf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //   const auth = firebase.auth();
  const db = firebase.firestore();

  function register(email,pass,name){
    firebase.auth().createUserWithEmailAndPassword(email,pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('user ===>', user)
        alert('User Registered Successfully!')
  
        db.collection('users').doc(user.uid).set({  email , name })
        .then(res => {
          console.log('res ===>', res)
        }).catch(e => {
          console.log('error in user db', e.message)
        })
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage)
        // ..
      });
}

function login(email,pass){
    return firebase.auth().signInWithEmailAndPassword(email,pass)
}

function getAllUsers(callback){
    db.collection('users').onSnapshot(snapshot=>{
        const users = []
        snapshot.forEach(doc=>{
            const obj = {...doc.data(), id:doc.id}
            users.push(obj);
        })
        callback(users);
    })
}


export {
    register,
    login,
    getAllUsers,
}