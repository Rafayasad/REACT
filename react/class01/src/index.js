import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import App_API from './App_API';
import App2 from './App2';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App_API /> */}
    <App2 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// extra code //

 // funtion for count
  // const counting = () =>{
  //   setCount(count+1);
  // }

  //function for friut
  // const friutNameChanger = (e) =>{
  //   setfriut(e.target.value);
  //   console.log(e.target.value);
  // }
  //submit function
  // const submitFriutName = () =>{
  //   alert("new friut is "+friut);
  // }

   // const [count,setCount] = useState(0);
  // const [friut,setfriut] = useState('banana');

  // <p>this is a {count} counting number</p>
  //     <br /><br />
  //     <button onClick={counting}>click me to increase count</button> */}
      
      {/* <br /><br />
      <p>{friut}</p>
      <input type='text' onChange={friutNameChanger}/>
      <input type='submit' onClick={submitFriutName}/> */}



