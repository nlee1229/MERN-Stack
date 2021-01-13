import React from 'react';
import { Router } from '@reach/router';
// import Home from './components/Home.jsx';
import General from './components/General.jsx';
import Extra from './components/Extra.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        <Home path="/home" />
        <General path="/:stuff" />
        <Extra path="/:word/:text/:background" />
      </Router>
    </div>
  );
}

export default App;
