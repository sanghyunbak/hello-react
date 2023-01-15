import {Component} from 'react';

class SyncSetStateWithArrowFunction extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const {number, fixedNumber} = this.state;
    return (
        <div>
          <h1>State without constructor</h1>
          <h1>{number}</h1>
          <h2>바뀌지 않는 값: {fixedNumber}</h2>
          <button
              // onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
              onClick={() => {
                this.setState({number: number + 1});
                this.setState({number: this.state.number + 1});
              }}
          >
            +1 (Async version)
          </button>

          <button
              onClick={() => {
                this.setState(prevState => {
                  return {
                    number: prevState.number + 1
                  };
                });

                this.setState(prevState => ({
                  number: prevState.number + 1
                }));
              }}
          >
            +1 (Sync version)
          </button>
        </div>
    );
  }
};

export default SyncSetStateWithArrowFunction;