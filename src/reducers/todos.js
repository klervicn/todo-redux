// Make reducers for all cases (ADD, CHECK OR UNCHECK => TOGGLE ?, DELETE )

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          isCompleted: false
        }
      ];
    case 'TOGGLE_TODO':
      return state.map(
        todo =>
          todo.id === action.id // Todo researched
            ? {
                ...todo, // keep all info about the todo except completed
                isCompleted: !todo.isCompleted // inverse value
              }
            : todo // if not the todo searched, keep it in the same state
      );
    case 'DELETE_TODO':
      return state;
    default:
      return state;
  }
};

export default todos;
