import { combineReducers } from 'redux';
import todos from './todos';

//regroup all reducers

const todoApp = combineReducers({
  todos
});

export default todoApp;
