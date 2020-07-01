import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

function EditForm(props) {
    const [value, setValue, reset] = useInputState(props.task);
    const handleChange = (e) => {
        setValue(e);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.updateTodo(props.id, value);
        reset();
        props.toggleIsEditing(true);
    }
    return(
        <form onSubmit={handleSubmit} style={{marginLeft: "1rem", width:"100%"}}>
            <TextField value={value} onChange={handleChange} style={{ margin: "normal" }} fullWidth autoFocus/>
        </form>
    )
}
export default EditForm;