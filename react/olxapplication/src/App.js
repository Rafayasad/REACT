import './App.css';
import PostAddScreen from './views/PostAddScreen';
import Dashboard from './views/Dashboard';
import { useState } from 'react/cjs/react.development';

function App() {
  const [movePage,setmovePage] = useState(false);

  return (
    <div className="App">
      
        {movePage? <PostAddScreen />
        : <div><h1>OLX</h1>
        <button onClick={()=>setmovePage(true)}>Post Add</button>
        <hr />
        <Dashboard />
        </div> 
        }

    </div>
  );
}

export default App;
