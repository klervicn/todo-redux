import { connect } from 'react-redux';
import { addTodo } from '../actions';
import InputTodo from '../components/InputTodo';

const mapStateToProps = state => {
  return {
    todos: state
  };
};

const mapDispatchToProps = dispatch => {
  // spread to children
  return {
    onClick: text => {
      dispatch(addTodo(text));
    }
  };
};

const ManageInputTodo = connect(mapStateToProps, mapDispatchToProps)(InputTodo);
export default ManageInputTodo;
