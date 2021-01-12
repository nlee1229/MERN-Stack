import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodosList = ({ todos, updateTodo, deleteTodo }) => {



    return (
        todos.map((todo, idx) =>
            <TodoItem todo={todo} index={idx} key={idx} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        )
    )
}





export default TodosList;