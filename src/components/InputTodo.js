import React from 'react';
import PropTypes from 'prop-types';

export default class InputTodo extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.addATodo = this.addATodo.bind(this);
  }

  updateInputValue(evt) {
    // Update state when text is typed
    this.setState({
      inputValue: evt.target.value
    });
  }

  addATodo(evt) {
    evt.preventDefault(); // No refresh
    this.props.onClick(this.state.inputValue);
    this.setState({
      inputValue: ''
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.addATodo}>
          <input
            type="text"
            onChange={this.updateInputValue}
            value={this.state.inputValue}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}
InputTodo.propTypes = {
  onClick: PropTypes.func.isRequired
};
