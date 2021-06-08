import logo from './logo.svg';
import './App.css';

function App() {
  const thing = "car";
  const arr = ["bike","car","plane"];
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {thing}
     
      <div>
        <ul>
          {arr.map(i=>{
           return <li>{i}</li>
          })}
          </ul>
      </div>

      <div>
        <table border={1}>
            <tr>
          <th> 
              name
          </th>
          <th>
              roll
          </th>
            </tr>
            <tr>
              <td>
                rafay
              </td>
              <td>
                123
              </td>
            </tr>
        </table>
      </div>
      </header>
    </div>
  );
}

export default App;
