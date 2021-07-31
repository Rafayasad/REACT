// import logo from './logo.svg';
import { useState } from 'react';
import { register , login } from './config/firebase';
import './App.css';
import Dashboard from './views/Dashboard';
import UserLogInScreen from './views/UserLogInScreen';
import {useDispatch} from 'react-redux';
import { storeUser } from './store/actions';

function App() {
  
  const [pageChange,setPageChange] = useState(false);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const dispatch = useDispatch();

  const signIn = async () =>{
    try{
      const user = await login(email,pass);
      // const username = await login(name);
      console.log(user);
      setPageChange(true);
      dispatch(storeUser(user));
    }
    catch(e){
      console.log("erroe==>",e.message);
    }
  }

  return (
    <div className="App">
      <div>
      {!pageChange ?
        <>
        <h1>Log-In Page</h1>
        <label>NAME</label>
        <input onChange={(e)=>(setName(e.target.value))} type='text' placeholder='enter your name'/><br />
        <label>EMAIL</label>
        <input onChange={(e)=>(setEmail(e.target.value))} type='text' placeholder='enter your email'/><br />
        <label>PASSWORD</label>
        <input onChange={(e)=>(setPass(e.target.value))} type='text' placeholder='enter your pass'/><br />
        <button onClick={()=>register(email,pass,name)}>Sign-Up</button>
        <button onClick={()=>signIn()}>Sign-In</button>
        </>
    :
    <div>
    {/* <Dashboard /> */}
    <UserLogInScreen />
    </div>
    }

      </div>
    </div>
  );
}

export default App;
