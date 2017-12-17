import React, { Component } from 'react';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
class App extends Component {
  render() {
    return (
      <div className="App">
        <InputTodo />
        <TodoList />
      </div>
    );
  }
}

export default App;
