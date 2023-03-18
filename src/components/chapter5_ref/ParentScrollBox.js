import React, {Component} from 'react';
import ScrollBoxWithPullDownMethod from './ScrollBoxWithPullDownMethod';

class ParentScrollBox extends Component {
  render() {
    return (
        <div>
          <ScrollBoxWithPullDownMethod ref={(ref) => this.scrollBox = ref} />
          <button onClick={() => {this.scrollBox.scrollToBottom()}}>
            Go to bottom
          </button>
        </div>
    );
  }
}

export default ParentScrollBox;