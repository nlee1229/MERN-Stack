import './App.css';
import react, { useState } from 'react';
import TodosList from './components/TodosList';
import TodoItem from './components/TodoItem';
import NewTodo from './components/NewTodo';

function App() {

  const [todos, setTodos] = useState([
    {
      body: "Wash the dishes",
      completed: false
    },
    {
      body: "Walk the dog",
      completed: true
    },
    {
      body: "Wash the car",
      completed: false
    },
  ])

  // ------------METHOD TO CREATE A NEW TODO ------------- //
  const createTodo = (todo) => {
    setTodos([...todos, todo]);

  }

  // ------------METHOD TO UPDATE CHECKBOX FOR COMPLETED OR INCOMPLETE ------------- //
  const updateTodo = (index) => {
    const copyTodos = [...todos];

    // ----IF IT'S COMPLETED(TRUE) CHANGE IT TO FALSE(NOT COMPLETED)---- //
    copyTodos[index].completed = !copyTodos[index].completed;
    setTodos(copyTodos);
  }

  // ------------METHOD TO DELETE TODOS ------------- //
  const deleteTodo = (deletedIdx) => {
    const copyTodos = todos.filter((todo, ind) => {
      if (ind !== deletedIdx) {
        return true;
      }
      return false;
    });
    setTodos(copyTodos);
  }


  return (
    <div className="App">
      <NewTodo createTodo={createTodo} />
      <TodosList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />

    </div>
  )


}
export default App;
