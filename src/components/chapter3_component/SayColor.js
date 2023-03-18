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
        <button style={{'color': message}} onClick={()=> setMessage('Test')}>Test</button>
        <button style={{message}} onClick={()=> setMessage('Test')}>Test</button>
        <h1 style={{color}}>{message}</h1>
        <h1 style={{color}}>Color: {color}</h1>
        <h2> style attribute에 들어가면 color 변수는 color: {color} 형태로 들어가고...</h2>
        <h2> 태그사이 값으로 들어가면 {color} 형태로 들어가는데... 왜 그러지? </h2>
        <button style={{color: 'red'}} onClick={() => setColor('red')}>빨강
        </button>
        <button style={{color: 'green'}} onClick={() => setColor('green')}>초록
        </button>
        <button style={{color: 'blue'}} onClick={() => setColor('blue')}>파랑
        </button>
      </div>
  );
};

export default SayColor;