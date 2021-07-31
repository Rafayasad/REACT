// import logo from './logo.svg';
// import './App.css';
// import { useState } from 'react';
// import { register , login } from './config/firebase';
// import Dashboard from './views/Dashboard';

// function App() {
//   const [email,setEmail] = useState('');
//   const [pass,setPass] = useState('');
//   const [userLoggin,setUserLoggin] = useState(false);
//   const [errorMessage,seterrorMessage] = useState(false);
//   const [showImg,setshowImg] = useState(false);
//   const loadimg = 'https://ak.picdn.net/shutterstock/videos/1035985775/thumb/1.jpg';
//   const signIn = async () =>{ 
//     try{
//       setshowImg(true);
//       const user = await login(email, pass)
//       setUserLoggin(true)
//       setshowImg(false);
//     }
//     catch(e){
//       seterrorMessage(e.message)
//       console.log("error==>",e.message)
//     }
//   }


//   return (
//     <div className="App">
//       {!userLoggin ? <>
//       <h1>Welcome To Registration Page</h1>
//       <label>Email</label>
//       <input type='text' onChange={(e)=>setEmail(e.target.value)}/><br />
//       <label>Password</label>
//       <input type='text' onChange={(e)=>setPass(e.target.value)}/><br />
//       <button onClick={()=>register(email,pass)}>Sign Up</button><br />
//       <button onClick={()=>signIn()}>Sign In</button><br />
//       <p>{errorMessage}</p>
//     </>
//       :
//       <Dashboard />  
//   }
//   {
//     showImg && <img src={loadimg} />
//   }
//   </div>
//   );
// }

// export default App;
