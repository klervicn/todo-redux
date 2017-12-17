import React from 'react';
import PropTypes from 'prop-types';

export default class InputTodo extends React.PureComponent {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

//Proptypes
