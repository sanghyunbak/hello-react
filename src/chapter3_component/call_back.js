import {Component} from 'react';

class CallBack extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const {number, fixedNumber} = this.state;
    return (
        <div>
          <h1>CallBack Test (show console.log)</h1>
          <h1>{number}</h1>
          <h2>바뀌지 않는 값: {fixedNumber}</h2>

          <button
              onClick={() => {
                this.setState(prevState => {
                  return {
                    number: prevState.number + 1,
                  };
                });

                this.setState(prevState => ({
                      number: prevState.number + 1,
                    }),
                    () => {
                      console.log('setState function is just called...');
                      console.log(this.state);
                    }
                );
              }}
          >
            +1 (Sync and Callback version)
          </button>
        </div>
    );
  }
};

export default CallBack;