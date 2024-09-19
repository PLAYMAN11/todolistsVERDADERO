import React from 'react';
import { motion } from 'framer-motion';

const TodoItem = ({ task, index, toggleCompletion, deleteTask }) => {
    return (
        <motion.li
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 1}}
            exit={{ opacity: 0 }}
            style={{
                textDecoration: task.completed ? 'line-through' : 'none',
                margin: '5px 0',
            }}
        >
      <span onClick={() => toggleCompletion(index)} style={{ cursor: 'pointer' }}>
        {task.text}
      </span>
            <motion.button
                animate={{x:100}}
                onClick={() => deleteTask(index)} style={{ marginLeft: '10px' }}>
                Eliminar
            </motion.button>
        </motion.li>
    );
};

export default TodoItem;
