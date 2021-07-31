import firebase from 'firebase';

//  // Your web app's Firebase configuration
//  const firebaseConfig = {
//     apiKey: "AIzaSyBgtS5VOYhsc4RG7oq3Yc6pZvR2sHJr44k",
//     authDomain: "authentication-8dc57.firebaseapp.com",
//     projectId: "authentication-8dc57",
//     storageBucket: "authentication-8dc57.appspot.com",
//     messagingSenderId: "202512515482",
//     appId: "1:202512515482:web:a8e0b8c91c0cee64503a23"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

// const db = firebase.firestore()

// function register(email, pass) {
//     //async vs sync
//     // its a readyMade function for register a user in your app
//     firebase.auth().createUserWithEmailAndPassword(email, pass)
//       .then((userCredential) => {
//         // Signed in 
//         var user = userCredential.user;
//         console.log('user ===>', user)
//         alert('User Registered Successfully!')
  
//         db.collection('users').doc(user.uid).set({ email })
//         .then(res => {
//           console.log('res ===>', res)
//         }).catch(e => {
//           console.log('error in user db', e.message)
//         })
//         // ...
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         alert(errorMessage)
//         // ..
//       });
  
//     }

// function login(email,pass){
//    return firebase.auth().signInWithEmailAndPassword(email, pass)
// }

// function getAllUsers(){
//   return db.collection('users').get();
// }
//   // 
// export {
//     register,
//     login,
//     getAllUsers
// }

var firebaseConfig = {
    apiKey: "AIzaSyDryEsys-wk5xCMqECCfLqjfwhQP71V_L0",
    authDomain: "auth-prac-ed825.firebaseapp.com",
    projectId: "auth-prac-ed825",
    storageBucket: "auth-prac-ed825.appspot.com",
    messagingSenderId: "283374833748",
    appId: "1:283374833748:web:256b9b8c33b651d10c1dc1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

function register(email,pass,name){
    firebase.auth().createUserWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log('user ===>', user)
        alert('User Registered Successfully!')
  
        db.collection('users').doc(user.uid).set({ email , name })
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
    return auth.signInWithEmailAndPassword(email,pass);
}
// realtime data store in firestore
function getAllUsers(callback){
  db.collection('users').onSnapshot(snapshot=>{
      const users = []
      snapshot.forEach(doc=>{
          const obj = {...doc.data(),id:doc.id}
          users.push(obj)
      })
      callback(users)
  })
}

async function storeImage(files){
  const allFiles = []
    for(let i=0 ; i < files.length ; i++){
        let file = files[i];
        const storageRef = storage.ref(`images/${file.name}`);
        await storageRef.put(file);
        const url = await storageRef.getDownloadURL()
        allFiles.push(url)
    }
    await db.collection('ads').add({imageUrls:allFiles})
    alert('data added successfully');
}

export {
    register,
    login,
    getAllUsers,
    storeImage
}



