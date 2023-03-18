import React, {useState} from 'react';

const getAverage = numbers => {
  console.log('Calculating average ...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const MyComponent = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState('');

  const onChange = e => {
    setNumber(e.target.value);
  };

  const onInsert = e => {
    const nextList = list.concat(parseInt(number));
    setList(nextList);
    setNumber('');
  };

  return (
      <div>
        <input value={number} onChange={onChange}/>
        <button onClick={onInsert}> Insert</button>
        <ul>
          {list.map((value, index) => (
              <li key={index}> {value} </li>))
          }
          // return JSX so return li tag is surrounded brace
        </ul>
        <div>
          <b>Average: </b> {getAverage(list)}
        </div>
      </div>
  );
};

export default MyComponent;
