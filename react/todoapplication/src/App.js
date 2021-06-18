import logo from './logo.svg';
import './App.css';
// import userEvent from '@testing-library/user-event';
import { useState } from 'react';

function App() {

  const [todo,settodo] = useState({text:''});
  const [todos,settodos] = useState([]);

  // this function set the value of input field into state
  const todoss = (e) =>{
    console.log(e.target.value);
    settodo({text:e.target.value});
  }

  // this function is add an item
  const addItem = () =>{
    settodos([
      ...todos,
      {
        text:todo.text
      }
    ])
    console.log(todo);
  }

  // this function is deleting the selected list index
  const delItem = (i) =>{
    todos.splice(i,1);
    settodos([...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
      <h2 className="App">TODO APP</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <br /><br />
    <div>
      <input style={{height:'50px',width:'200px'}} type='text' onChange={todoss} />
      <button onClick={addItem}>Add Item</button>
    </div>
    <div>
      <ul style={{display:'inline-block'}}>
        {todos.map((v,i)=>{
          return <li key={i}>{v.text}
          <button onClick={()=>delItem(i)}>DELETE</button>
          </li>
        })}
      </ul>
    </div>

    

      </header>
    </div>

  );
}

export default App;
