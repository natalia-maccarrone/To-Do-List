import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useToggleState from './hooks/useToggleState';
import EditForm from './EditForm';

function Todo({id, task, completed, deleteTask, toggleCompleted, updateTodo}) {
    const handleDelete = () => {
        deleteTask(id);
    }
    const handleCompleted = () => {
        toggleCompleted(id);
    }
    const [isEditing, toggleIsEditing] = useToggleState();
    const handleEditing = () => {
        toggleIsEditing();
    }
    return(
        <ListItem style={{height: "64px"}}>
            {isEditing ? <EditForm id={id} task={task} updateTodo={updateTodo} toggleIsEditing={toggleIsEditing}/> :
                <>               
                    <Checkbox checked={completed} tabIndex={-1} onClick={handleCompleted}/>
                    <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>{task}</ListItemText>
                    <ListItemSecondaryAction>
                    <IconButton aria-label="Edit" onClick={handleEditing}>
                        <EditIcon/>
                    </IconButton>
                    <IconButton aria-label="Delete" onClick={handleDelete}>
                        <DeleteIcon/>
                    </IconButton>
                    </ListItemSecondaryAction>
                </>
            }
        </ListItem>
    )
}

export default Todo;