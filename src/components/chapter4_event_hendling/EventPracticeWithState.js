import React, {Component} from 'react';

class EventPracticeWithState extends Component {
  state = {
    message: ''
  }
  render() {
    return (
        <div>
          <h1>이벤트 연습</h1>
          <input
              type="text"
              name="message"
              value={this.state.message}
              placeholder="아무거나 입력해 보세요"
              onChange={
                (e) => {
                  e.persist() // v17부터 아무 의미 없음
                  console.log(e);
                  setTimeout(()=>{
                        console.warn(e.type);
                        console.warn(e.target.value);
                      }
                      , 1);
                  this.setState({
                    message: e.target.value
                  })
                  // this.state.message = e.target.value;
                }
              }
          />

          <button onClick={
            ()=> {
              alert(this.state.message)
              this.setState({
                message: ''
              })
            }
          }>
            확인
          </button>
        </div>
    );
  }
}

export default EventPracticeWithState;