import React from 'react';
import { Router } from '@reach/router';
import Home from './views/Home';
import EditAuthor from './views/EditAuthor';
import NewAuthor from './views/NewAuthor';

function App() {
  return (

    <div className="App">
      <Router>
        <Home path="/" />
        <NewAuthor path="/new" />
        <EditAuthor path="/edit/:id" />

      </Router>
    </div>
  );
}

export default App;
