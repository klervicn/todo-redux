import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, isCompleted, text }) => (
  <li onClick={onClick}>
    {text} <button>Delete</button>
  </li>
);

//PropTypes

export default Todo;
