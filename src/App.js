import React, { useState } from 'react';
import TodoList from './components/TodoList';
import {motion} from "framer-motion";
import classes from "./App.module.css";

function App() {
    return (
        <div>
            <header className={classes.header}>

                <h1>Lista de Tareas</h1>


            </header>
            <TodoList />
        </div>
    );
}

export default App;

