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
      <span>
        {task.text}
      </span>
            <motion.button
            onClick={() => toggleCompletion(index)}
            style={{ marginLeft: '5px' }}
            >
                Completar
            </motion.button>

            <motion.button
                animate={{x:100}}
                onClick={() => deleteTask(index)} style={{ marginLeft: '5px' }}>
                Eliminar
            </motion.button>
        </motion.li>
    );
};

export default TodoItem;
