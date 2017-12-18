import React from 'react';
import ManageTodoList from '../containers/ManageTodoList';
import ManageInputTodo from '../containers/ManageInputTodo';

const App = () => (
  <div className="App">
    <ManageInputTodo />
    <ManageTodoList />
  </div>
);

export default App;
