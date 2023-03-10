import React, {useState, useMemo} from 'react';

const getAverage = numbers => {
  console.log('(UseMemo) Calculating average ...');
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
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

  const avg = useMemo(() => getAverage(list), [list]);

  // return JSX so return li tag is surrounded brace
  return (
      <div>
        <input value={number} onChange={onChange}/>
        <button onClick={onInsert}> Insert</button>
        <ul>
          {list.map((value, index) => (
              <li key={index}> {value} </li>))
          }
        </ul>
        <div>
          <b>Average: </b> {avg}
        </div>
      </div>
  );
};

export default Average;
