import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { v4 as uuidv4 } from 'uuid';

function TodoForm(props){
    const [value, handleChange, reset] = useInputState('');
    const handleSubmit = e => {
        e.preventDefault();
        if(value === '') {
            alert(`Please enter new task`);
        } else {
            props.submit({id: uuidv4(), task: value, completed: false});
            reset();
        }
    }
    return(
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form onSubmit={handleSubmit}>
                <TextField value={value} onChange={handleChange} style={{ margin: "normal" }} label="Add new To Do Task" fullWidth/>
            </form>
        </Paper>
    )
}

export default TodoForm;