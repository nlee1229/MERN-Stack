import './App.css';
import Form from './components/Form.jsx';
import { Router } from '@reach/router';
import People from './components/People';
import Planet from './components/Planet';

function App() {
  return (
    <div className="App">
      <div className="title">STARWARS API</div>
      <Router>
        <Form path="/" />
        <People path="/people/:collectionID" />
        <Planet path="/planets/:collectionID" />
      </Router>
    </div>
  );
}

export default App;
