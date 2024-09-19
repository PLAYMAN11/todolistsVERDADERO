import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { motion } from 'framer-motion';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addTask = () => {
        if (inputValue) {
            setTasks([...tasks, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const toggleTaskCompletion = (index) => {
        const newTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
    };

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Añadir tarea..."
            />
            <button onClick={addTask}>Añadir</button>
            <motion.ul>
                {tasks.map((task, index) => (
                    <TodoItem
                        key={index}
                        task={task}
                        index={index}
                        toggleCompletion={toggleTaskCompletion}
                        deleteTask={deleteTask}
                    />
                ))}
            </motion.ul>
        </div>
    );
};

export default TodoList;
