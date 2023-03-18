import React, {Component} from 'react';
import ErrorLifeCycle from './ErrorLifeCycle';
import ErrorBoundary from './ErrorBoundary';


function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class ParentLifeCycleSample extends Component {
  state = {
    color: '#000000',
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }


  render() {
    return (
        <div>
          <button onClick={this.handleClick}>Random Color</button>
          <ErrorBoundary>
            <ErrorLifeCycle color={this.state.color} />
          </ErrorBoundary>
        </div>
    );
  }
}

export default ParentLifeCycleSample;