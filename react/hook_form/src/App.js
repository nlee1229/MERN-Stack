import './App.css';
import React, { useState } from "react";
import Form from './components/Form';
import Results from './components/Results';

function App() {

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })

  return (
    <div className="App">
      <Form inputs={state} setInputs={setState} />
      {/* results will not change any of the data while forms will */}
      <Results data={state} />
    </div>
  );
}

export default App;