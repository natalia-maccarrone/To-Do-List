import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';  
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import useLocalStorageState from './hooks/useLocalStorageState';

function TodoApp(){
    const [todos, setTodos] = useLocalStorageState("todos", []);
    const submit = value => {
        setTodos([...todos, value]);
    }
    const deleteTask = todoId => {
        setTodos([...todos].filter(todo => (
            todo.id !== todoId
        )));
    }
    const toggleCompleted = todoId => {
        setTodos([...todos].map(todo => (
            todo.id === todoId ? {...todo, completed: !todo.completed} : todo
        )));
    }
    const updateTodo = (todoId, newTask) => {
        setTodos([...todos].map(todo => (
            todo.id === todoId ? {...todo, task: newTask} : todo
        )));
    }
    return(
        <Paper style={{ padding:0, margin:0, height: "100vh", backgroundColor: "#fafafa" }} elevation={0}>
            <AppBar color="primary" position="static" style={{ height: "64px" }}>
                <ToolBar>
                    <Typography color="inherit">TO DO LIST</Typography>
                </ToolBar>
            </AppBar>
            <Grid container justify="center" style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <TodoForm submit={submit}/>
                    <TodoList todos={todos} deleteTask={deleteTask} toggleCompleted={toggleCompleted} updateTodo={updateTodo}/>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default TodoApp;