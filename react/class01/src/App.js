// import logo from './logo.svg';
import './App.css';
import { useState , useEffect } from 'react'; //import state library from react.
// import src from '*.avif';
// import Custombutton from './components/Custombutton';
// import Dashboard from './views/Dashboard';
// import Home from './views/Home';
// import AboutUs from './views/AboutUs';
import Posts from './components/Posts';

function App() {
  //states
  const [bulbSwitch,setBulbSwitch] = useState(false); 
  const [photoSwitch,setPhotoSwitch] = useState();
  const [screenSwitch,setScreenSwitch] = useState('Home');
  const [posts,setPosts] = useState ([]);
  const [index,setIndex] = useState(0);

  const bulbOn = "https://th.bing.com/th/id/OIP.zHtYy800GhmmVF2UfkgymwHaJ4?w=206&h=275&c=7&o=5&dpr=1.25&pid=1.7";
  const bulbOff = "https://th.bing.com/th/id/OIP.gOuIirQ3d7LkqZb-6gKsbgHaL0?w=197&h=315&c=7&o=5&dpr=1.25&pid=1.7";
  const bat = 'https://www.cricketcloset.com/wp-content/uploads/2017/11/2-1.png';
  const ball = 'https://sc04.alicdn.com/kf/UTB8.qMVqYnJXKJkSahG760hzFXam.png';

  // const posts = [{userId: 1},{id: 1},{body: 'hello developers welcome to the world of programming'}]

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

  const screenModeSwitch = (screenChange) =>{
      setScreenSwitch(screenChange);
  }

  const deletePostItem = (index) =>{
    const tempId = [...posts];
    tempId.splice(index,1);
    console.log("temp",tempId);
    setPosts(tempId);
    // console.log("tempid==>",tempId.id);
  }

  const getIndex = (Getindex) =>{
    setIndex(Getindex);
    console.log(index);
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(res => setPosts(res))
  }, [])

  const delArray = (index) =>{
    const tempPost = [...posts];
    tempPost.splice(index,1);
    setPosts(tempPost);
    console.log('index===>>',index);
}

  console.log("==>",posts);

  return (
    <div className="App">
      <div>
      {posts.map((v,i)=>{
        return <Posts title={v.title} body={v.body} id={v.id} index={i} post={posts} deleteArr={delArray}/>
      })}
      </div>
      
      
      
      {/* <Posts post={posts} deletePostItem={deletePostItem} getIndex={getIndex}/> */}
    



    
      {/*
      CLASS # 01 AND 02 => (bulb functions or photo switching)
      
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

    </div> */}

    {/*
     CLASS #03 AND 04 => TODO APP OR TYPES OF COMPONENTS OR STATE AND PROPS

    */}
    {/* <div>
      {screenSwitch === 'Home' && <Home /> }
      {screenSwitch === 'About Us' && <AboutUs />}
      {screenSwitch === 'Dashboard' && <Dashboard />}
      
      <Custombutton title="Home" screenModeSwitch={screenModeSwitch}/>
      <Custombutton title="About Us" screenModeSwitch={screenModeSwitch}/>
      <Custombutton title="Dashboard" screenModeSwitch={screenModeSwitch}/>
    </div> */}




</div>
  );
}

export default App;