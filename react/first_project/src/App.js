import React from 'react';
import './App.css';
import MyNewComponent from './components/MyNewComponent';

function App() {
  return (
    <div className="App">
      <MyNewComponent someText={"Hello World"} />
      <MyNewComponent someText={"Let's try reusing this component!"} />
    </div>
  );
}

export default App;

