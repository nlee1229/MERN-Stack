import react, { useState } from 'react';
import NewTodo from './components/NewTodo';
import TodosList from './components/TodosList';
import './App.css';

function App() {

  const [todos, setTodos] = useState([
    {
      body: "Create todo list",
      // we set it to false because we want it to be unchecked by default
      completed: false
    },
    {
      body: "Walk the dog",
      completed: true
    },
    {
      body: "Send out package",
      completed: false
    },
  ])

  // Handler for adding 
  const createTodo = (todo) => {
    setTodos([...todos, todo]);
  }

  // We pass in idx to know which item we want to change
  const updateTodo = (idx) => {
    const copyTodos = [...todos];
    // Now, we're at the item we want to change
    //What we're doing here is make it what it isn't. If it's true make it false... So we can check and uncheck boxes
    copyTodos[idx].completed = !copyTodos[idx].completed;
    setTodos(copyTodos);
  }

  const deleteTodo = (deletedIdx) => {
    const copyTodos = todos.filter((todo, idx) => {
      if (idx !== deletedIdx) {
        return true;
      }
      return false;
    });

    setTodos(copyTodos);

    // This is the same statement as lines 34-39
    // setTodos(todos.filter((todo, i) => i !== deletedIdx ? true : false))
  }

  return (
    <div className="App">
      <h1>App</h1>
      <NewTodo createTodo={createTodo} />
      <TodosList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
