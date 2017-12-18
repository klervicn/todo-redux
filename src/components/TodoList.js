import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo'; //onClick, isCompleted, text

const TodoList = ({ todos, onTodoClick, onDeleteClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo
        key={todo.id}
        isCompleted={todo.isCompleted}
        text={todo.text}
        onTodoClick={() => onTodoClick(todo.id)}
        onDeleteClick={() => onDeleteClick(todo.id)}
      />
    ))}
  </ul>
);

//PropTypes

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isCompleted: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired
};

export default TodoList;
