import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;


// class App extends Component {
//   render() {
//     return (
//       <>
//         <h1>Hello Dojo!</h1>
//         <h2>Things I need to do:</h2>
//         <ul>
//           <li>Learn React</li>
//           <li>Climb Mt.Everest</li>
//           <li>Run a marathon</li>
//           <li>Relocate to Austin, TX</li>
//         </ul>
//       </>
//     )
//   }
// }