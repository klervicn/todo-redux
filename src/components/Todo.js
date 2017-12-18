import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onTodoClick, onDeleteClick, isCompleted, text }) => (
  <li
    style={{
      textDecoration: isCompleted ? 'line-through' : 'none'
    }}
  >
    {text}
    <button onClick={onTodoClick}>Check</button>
    <button onClick={onDeleteClick}>Delete</button>
  </li>
);

//PropTypes

export default Todo;
