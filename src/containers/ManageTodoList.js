import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = state => {
  return {
    todos: state
  };
};

const mapDispatchToProps = dispatch => {
  // Spread to children
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    },
    onDeleteClick: id => {
      dispatch(deleteTodo(id));
    }
  };
};

const ManageTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);
export default ManageTodoList;
