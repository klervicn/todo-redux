import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onTodoClick, onDeleteClick, isCompleted, text }) => (
  <li
    onClick={onTodoClick}
    style={{
      textDecoration: isCompleted ? 'line-through' : 'none'
    }}
  >
    {text}
    <button onClick={onDeleteClick}>Delete</button>
  </li>
);

//PropTypes
Todo.propTypes = {
  onTodoClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  isCompleted: PropTypes.bool,
  text: PropTypes.string
};

export default Todo;
