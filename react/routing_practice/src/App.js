import React from 'react';
import { Router } from '@reach/router';
// import Home from './components/Home.jsx';
import Number from './components/Number.jsx';

function App() {
  return (
    <div className="App">
      <Router>
        {/* <Home path="/home" /> */}
        <Number path="/:num" />
        <Number path="/:num/:color" />
        <Number path="/:num/:color/:bc" />
      </Router>
    </div>
  );
}

export default App;
