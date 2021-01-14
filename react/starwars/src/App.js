import './App.css';
import { Router } from '@reach/router';
import People from './components/People';
import Planet from './components/Planet';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Router>
        <Main path="/" />
        <People path="/people/:collectionID" />
        <Planet path="/planets/:collectionID" />

      </Router>
    </div>
  );
}

export default App;
