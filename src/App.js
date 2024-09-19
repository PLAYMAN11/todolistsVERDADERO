import React, { useState } from 'react';
import TodoList from './components/TodoList';

function App() {
    return (
        <div style={{ padding: '20px' }}>
            <h1>Lista de Tareas</h1>
            <TodoList />
        </div>
    );
}

export default App;

