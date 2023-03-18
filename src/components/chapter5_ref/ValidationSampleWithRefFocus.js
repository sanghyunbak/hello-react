import React, {Component} from 'react';
import './ValidationSample.css';

class ValidationSampleWithRefFocus extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  handleChange = (e) => {
    this.setState({
      password: e.target.value
    });
  };

  handleButtonClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password == '0000'
    })
    this.input.focus();
  }

  render() {
    return (
        <div>
          <p>Ref with focus</p>
          <input
              type={'password'}
              value={this.state.password}
              onChange={this.handleChange}
              ref={(ref) => this.input = ref}
              className={this.state.clicked ?
                  (this.state.validated ? 'success' : 'failure') :
                  ''}
          />
          <button onClick={this.handleButtonClick}
          > Validated
          </button>
        </div>
    );
  }
}

export default ValidationSampleWithRefFocus;