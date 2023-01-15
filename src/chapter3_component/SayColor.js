import {useState} from 'react';

const SayColor = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('안녕하세요');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('black');

  return (
      <div>
        <button onClick={onClickEnter}>입장</button>
        <button onClick={onClickLeave}>퇴장</button>
        <h1 style={{color}}>{message}</h1>

        <button onClick={() => setColor('red')}>빨강</button>
        <button onClick={() => setColor('green')}>초록</button>
        <button onClick={() => setColor('blue')}>파랑</button>
      </div>
  );
};

export default SayColor;