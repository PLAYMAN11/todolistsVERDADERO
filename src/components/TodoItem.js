import React from 'react';
import { motion } from 'framer-motion';
import x from '../icons/x.png';
import check from '../icons/comprobado.png';

const TodoItem = ({ task, index, toggleCompletion, deleteTask }) => {
    const Background = {
        backgroundColor: task.completed ? 'white' : '',
        color: task.completed ? '#346eee' : '',
        border: task.completed ? '2px solid blue' : 'none',
    };

    return (
        <motion.li
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100, transition: { duration: 0.3 } }}
            style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                maxWidth: '90%',
                padding: '10px',
            }}
        >
            <span style={{ marginRight: '10px', wordWrap: 'break-word', width: '100%' }}>
                {task.title}
                {task.text}
            </span>
            <div style={{ display: 'flex', marginTop: '5px', gap: '10px' }}>
                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    onClick={() => toggleCompletion(index)}
                    style={Background}
                >
                    {task.completed ? (
                            "Desmarcar"
                        ) :
                        "Completar"
                    }
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    style={Background}
                    onClick={() => deleteTask(index)}
                >
                    Eliminar
                </motion.button>
            </div>
        </motion.li>
    );
};

export default TodoItem;
