import { useState } from 'react';
import './App.css';
import { login, register,storeImage } from './config/firebase';
import Dashboard from './views/Dashboard';
import {useDispatch} from 'react-redux';
import { storeUser } from './store/actions';
import AboutUs from './views/Dashboard/AboutUs';

function Auth_app(){
    const [email,setEmail] = useState('');
    const [pass,setPass] = useState('');
    const [name,setName] = useState('');
    const [userLoggedIn,setuserLoggedIn] = useState(false);
    const [showLoadingImg,setshowLoadingImg] = useState(false);
    const loadImg = 'https://image.flaticon.com/icons/png/512/3305/3305803.png';
    const dispatch = useDispatch();

    const signUp = async () =>{
    try{
        setshowLoadingImg(true);
        const user = await login(email,pass);
        setshowLoadingImg(false);
        console.log("user from component ===>",user);
        dispatch(storeUser(user));
        setuserLoggedIn(true);
    }
    catch(e){
        console.log('error==>>',e.message);
    }
    }

    return(
        <div className='App'>

            <input type='file' multiple onChange={(e)=>storeImage(e.target.files)}/>


            {!userLoggedIn ? <>
            <h1>register page</h1>
            <input type='text' placeholder='fullname' onChange={(e)=>(setName(e.target.value))}/><br />
            <input type='text' placeholder='email' onChange={(e)=>(setEmail(e.target.value))}/><br />
            <input type='text' placeholder='password' onChange={(e)=>(setPass(e.target.value))}/><br />
            <button onClick={()=>register(email,pass,name)}>Sign in</button><br />
            <button onClick={()=>signUp()}>Sign up</button><br /><br />
            {showLoadingImg && <img src={loadImg} style={{height:'50px' , width:'50px'}} /> }
            </>
            :
            <div>
                <Dashboard />
                <AboutUs />
            </div>
            }

        </div>
    )
}

export default Auth_app;