/**
 * Actions creators :
 * add
 * delete
 * toggle
 *
 */
let nextId = 0;
export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    text,
    id: nextId++
  };
};

export const deleteTodo = id => {
  return {
    type: 'DELETE_TODO',
    id
  };
};

export const toggleTodo = id => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
};
