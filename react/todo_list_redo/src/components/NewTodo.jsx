import React, { useState } from 'react';

const NewTodo = ({ createTodo }) => {

    // -------- STORE USER'S INPUT DATA AS THEY TYPE --------- //
    const [todoText, setTodoText] = useState("");

    const submitTodo = (e) => {
        e.preventDefault();

        createTodo({
            'body': todoText,
            'completed': false
        })

        // -------SETS THE TEXTFIELD TO BE EMPTY AFTER SUBMITTING------ //
        setTodoText("");
    }


    return (
        <div>
            <form onSubmit={submitTodo}>
                Hmm, what to do next? <input type="text" value={todoText} onChange=
                    {e => setTodoText(e.target.value)} />
                <input type="submit" value="Create a new Todo!" />
            </form>
        </div>
    )
}



export default NewTodo;