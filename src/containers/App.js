import React from 'react';
import InputTodo from '../components/InputTodo';
import ManageTodoList from '../containers/ManageTodoList';
import ManageInputTodo from '../containers/ManageInputTodo';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <ManageInputTodo />
        <ManageTodoList />
      </div>
    );
  }
}

export default App;