import { connect } from 'react-redux';
import { addTodo } from '../actions';
import InputTodo from '../components/InputTodo';

const mapStateToProps = state => {
  return {}; // No state needed in InputTodo
};

const mapDispatchToProps = dispatch => {
  // Spread to children
  return {
    onClick: text => {
      dispatch(addTodo(text));
    }
  };
};

const ManageInputTodo = connect(mapStateToProps, mapDispatchToProps)(InputTodo);
export default ManageInputTodo;
