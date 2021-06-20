import logo from './logo.svg';
import './App.css';
// import userEvent from '@testing-library/user-event';
import { useState } from 'react';

function App() {

  const [todo,settodo] = useState('');
  const [todos,settodos] = useState([]);
  const [editMode,seteditMode] = useState(false);
  const [currentIndex,setcurrentIndex] = useState(-1);

  // this function set the value of input field into state
  const todoss = (e) =>{
    console.log(e.target.value);
    settodo(e.target.value);
  }

  // this function is add an item
  const addItem = () =>{
    // settodos([
    //   ...todos,
    //   {
    //     text:todo.text
    //   }
    // ])
    // console.log(todo);

    const tempTodo = [...todos];
    tempTodo.push(todo);
    settodos(tempTodo);
    console.log(tempTodo);
    settodo('');
  }

  // this function is deleting the selected list index
  const delItem = (i) =>{
    todos.splice(i,1);
    settodos([...todos]);
  }

  const editItem = (i) =>{
    settodo(todos[i]);
    seteditMode(true);
    setcurrentIndex(i);
  }

  const updateItem = () =>{
    //text done
    //update
    //list
    //updated list
    //setState
    seteditMode(false);
    const temptodo = [...todos];
    temptodo.splice(currentIndex,1,todo);
    settodos(temptodo);
    setcurrentIndex(-1);
    // temptodo.push(todo);
    // temptodo.shift(i);
    // settodos(temptodo);
    // temptodo.splice(i,1,todo)
    
    console.log(temptodo);

  }

  return (
    <div className="App">
      <header className="App-header">
      <h2 className="App">TODO APP</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <br /><br />
    <div>
      <input style={{height:'50px',width:'200px'}} onChange={todoss} placeholder="enter your Todo" type="text" value={todo} />
      {/* <button onClick={addItem}>Add Item</button> */}
      {editMode ? 
        <button onClick={updateItem}>Update</button>
        :
        <button onClick={addItem}>Add Item</button>
    }
    </div>
    <div>
      <ul style={{display:'inline-block'}}>
        {todos.map((v,i)=>{
          return <li className={currentIndex === i && 'edit' }>{v}
          <button onClick={()=>delItem(i)}>DELETE</button>
          <button onClick={()=>editItem(i)}>EDIT</button>
          </li>
        })}
      </ul>
    </div>

    

      </header>
    </div>

  );
}

export default App;
