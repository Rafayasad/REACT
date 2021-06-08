import logo from './logo.svg';
import './App.css';

function App() {
  const name = "Hello world";
  const obj = {name:"Hello world object"}
  const data = ['We', 'are', 'United']
  const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}]
  const complex = [{company: 'XYZ', jobs: ['Javascript', ',React']}, {company: 'ABC', jobs: ['AngularJs', ',Ionic']}]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <div>
        <h4>{name}</h4>
      </div>

      <div>
        <h4>{obj.name}</h4>
      </div>

      <div>
        <ul className='data'>
          {data.map((i)=>{
            return <li>{i}</li>
          })}
        </ul>
      </div>

      <div>
        <ul className='data'>
          {list.map((i)=>{
           return <li>{i.name}</li>
          })}
        </ul>
      </div>

      <div>
        <table border='1' className='data'>
          <tr>
            <th>
              company
            </th>
            <th>
              jobs
            </th>
          </tr>

          {complex.map((i) => {
            return (
            <tr>
              <td>
               {i.company}
              </td>
              <td>
               {i.jobs}
              </td>
          </tr>
            
          )
        })}
        </table>
      </div>
      
      </header>
    </div>
  );
}

export default App;
