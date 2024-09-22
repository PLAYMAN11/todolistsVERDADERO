import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { motion, AnimatePresence } from 'framer-motion';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');

    const addTask = (e) => {
        e.preventDefault(); // Prevent form submission
        if (inputValue1 && inputValue2) {
            setTasks([...tasks, { title: inputValue1, text: inputValue2, completed: false }]);
            setInputValue1('');
            setInputValue2('');
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
            <form>
                <input
                    type="text"
                    value={inputValue1}
                    onChange={(e) => setInputValue1(e.target.value)}
                    placeholder="Titulo de la tarea..."
                    style={{margin: '0 0 3% 0'}}
                />
                <br/>
                <textarea
                    value={inputValue2}
                    onChange={(e) => setInputValue2(e.target.value)}
                    placeholder="Descripcion de la tarea..."
                    style={{
                        margin: '0 0 1% 0',
                        border: '2px solid black',
                        padding: '10px',
                        width: '95%',
                        height: '150px',
                        boxSizing: 'border-box',
                        resize: 'vertical'
                    }}
                />


                <br></br>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    pe="button" onClick={addTask}>Añadir</motion.button>
            </form>
            <motion.h2>Tareas</motion.h2>
            <motion.ul>
                <AnimatePresence>
                    {tasks.map((task, index) => (
                        <motion.li
                            key={index}
                            initial={{opacity: 0, width: 0}}
                            animate={{opacity: 1, width: 'auto'}}
                            exit={{opacity: 0, width: 0}}
                            transition={{duration: 0.5}}
                            style={{ border: '1px solid #ccc', borderRadius: '3px' }}
                        >
                            <TodoItem
                                task={task}
                                index={index}
                                toggleCompletion={toggleTaskCompletion}
                                deleteTask={deleteTask}
                            />
                        </motion.li>
                    ))}
                </AnimatePresence>
            </motion.ul>
        </div>
    );
};

export default TodoList;
