import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Todo from './Todo';

function TodoList(props){
    if (props.todos.length) return(
        <Paper>
            <List>
                {props.todos.map((todo, i) => (
                    <>
                        <Todo id={todo.id} 
                              key={todo.id} 
                              task={todo.task} 
                              completed={todo.completed} 
                              deleteTask={props.deleteTask} 
                              toggleCompleted={props.toggleCompleted}
                              updateTodo={props.updateTodo}
                        />
                        {i < props.todos.length -1 && <Divider/>}
                    </>
                ))}
            </List>
        </Paper>
    )
    return null;
}

export default TodoList;