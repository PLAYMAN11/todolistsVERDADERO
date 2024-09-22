import React, { useState } from 'react';
import TodoList from './components/TodoList';
import {motion} from "framer-motion";
import classes from "./App.module.css";

function App() {
    return (
        <div>
            <header className={classes.header}>
                <motion.h1

                >Lista de Tareas</motion.h1>
            </header>
            <div className={classes.contenedorPrincipal}>
              <></>
                <motion.h2
                transition={{
                    duration: 1,

                }}
                >Agregar Tarea</motion.h2>
                <TodoList/>

            </div>
        </div>
    );
}

export default App;

