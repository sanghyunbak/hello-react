import React, {useState} from 'react';

const EventPracticeUsingFunctionalMethod = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  // useState function get inital state value and return current state and state change function
  const onChangeUsername = e => setUsername(e.target.value);
  const onChangeMessage = e => setMessage(e.target.value);
  // make another functino define... to get a parameter "e" ?
  // functional programming: assign a function to variable onChangexxx
  const onClick = () => {
    alert(username + ':' + message);
    setUsername('');
    setMessage('');
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
      <div>
        <h1>두 개의 인풋 이벤트 연습 (using functional component)</h1>
        <input
            type="text"
            name="username"
            placeholder="사용자명"
            value={username}
            onChange={onChangeUsername}
        />
        <input
          type="text"
          name={"message"}
          placeholder={"아무거나 입력해 보세요"}
          value={message}
          onChange={onChangeMessage}
          onKeyPress={onKeyPress}
          />
        <button onClick={onClick}> 확인</button>
      </div>
  );
};

export default EventPracticeUsingFunctionalMethod;
