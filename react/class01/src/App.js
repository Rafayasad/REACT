// import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; //import state library from react.
// import src from '*.avif';

function App() {
  //states
  const [bulbSwitch,setBulbSwitch] = useState(false); 
  const [photoSwitch,setPhotoSwitch] = useState();

  const bulbOn = "https://th.bing.com/th/id/OIP.zHtYy800GhmmVF2UfkgymwHaJ4?w=206&h=275&c=7&o=5&dpr=1.25&pid=1.7";
  const bulbOff = "https://th.bing.com/th/id/OIP.gOuIirQ3d7LkqZb-6gKsbgHaL0?w=197&h=315&c=7&o=5&dpr=1.25&pid=1.7";
  const bat = 'https://www.cricketcloset.com/wp-content/uploads/2017/11/2-1.png';
  const ball = 'https://sc04.alicdn.com/kf/UTB8.qMVqYnJXKJkSahG760hzFXam.png';

  //bulb toggle function 
  const switchTheBulb = () =>{  
    setBulbSwitch(!bulbSwitch); // bulbSwitch = true
  }

  //photoSwitch function
  const photoSwitchs = (e) =>{
    setPhotoSwitch(e.target.value); // target the current value
    setPhotoSwitch(!photoSwitch); // toggle 
    console.log(e.target.value);

  }

  return (
    <div className="App">

      <img style={{height:'300px'}} src={bulbSwitch ? bulbOn : bulbOff} />
      <br /><br /><br />
      <button onClick={switchTheBulb}>Switch on/off the bulb</button>

      <br /><br />
      <div>

      <label for="cars">Choose any one:</label>
      <select onChange={photoSwitchs}>
      <option value="bat">bat</option>
      <option value="ball">ball</option>
      </select>
      <br /><br />
      <div>
        <img style={{height:'300px'}} src={photoSwitch ? ball : bat} />
      </div>

    </div>

</div>
  );
}

export default App;