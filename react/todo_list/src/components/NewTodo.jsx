import React, { useState } from 'react';

const NewTodo = ({ createTodo }) => {

    // Store user's input data as they type
    const [todoText, setTodoText] = useState("");

    const submitTodo = (e) => {
        e.preventDefault();

        createTodo({
            'body': todoText,
            'completed': false
        });

        setTodoText("");
    }


    return (
        <div>
            {todoText}
            <form onSubmit={submitTodo}>
                Hmm, what to do? <input type="text" value={todoText} onChange={e => setTodoText(e.target.value)} />
                <input type="submit" value="Create a new Todo!" />

            </form>

        </div>
    )
}

export default NewTodo;