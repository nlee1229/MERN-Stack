import './App.css';
import { Router } from '@reach/router';
import Dashboard from './views/Dashboard';
import NewPirates from './views/NewPirates';
import Details from './views/Details';

function App() {
  return (
    <div className="App">
      <Router>
        <Dashboard path="/pirates" />
        <NewPirates path="/pirate/new" />
        <Details path="/pirate/:id" />
      </Router>
    </div>
  );
}

export default App;
