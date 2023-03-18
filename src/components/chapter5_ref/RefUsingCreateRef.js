import React, {Component} from 'react';

class RefUsingCreateRef extends Component {
  input =  React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  }

  render() {
    return (
        <div>
          <p>RefUsingCreateRef</p>
          <input ref={this.input} />
        </div>
    )
  }
}

export default RefUsingCreateRef;