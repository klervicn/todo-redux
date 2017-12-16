// Make reducers for all cases (ADD, CHECK OR UNCHECK => TOGGLE ?, DELETE )

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return 'Todo added';
    case 'TOGGLE_TODO':
      return 'Todo toggled';
    case 'DELETE_TODO':
      return 'Todo deleted';
    default:
      return state;
  }
};

export default todos;
