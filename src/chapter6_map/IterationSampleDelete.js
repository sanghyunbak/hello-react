// filter example : get number that bigger than 3

// const numbers = [1,2,3,4,5,6];
// const biggerThanThree = numbers.filter(number => number > 3);

import React, {useState} from 'react';

const MyComponent = () => {
  const [names, setNames] = useState([
    {id: 1, text: 'Snowman'},
    {id: 2, text: 'Ice'},
    {id: 3, text: 'Snow'},
    {id: 4, text: 'Wind'},
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);

  const onChange = e => setInputText(e.target.value);
  const onClick = (e) => {
    // push add data to origianl variable, that make performance degradation, use concat to performance.
    // let newNames = names;
    // newNames.push({id: nextId, text: inputText});

    let newNames = names.concat({id: nextId, text: inputText});
    setNextId(nextId + 1);
    setNames(newNames);
    console.log(names);
  };

  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map(name => (<li key={name.id}
                                          onDoubleClick={() => onRemove(
                                              name.id)}>{name.text}</li>));

  return (
      <>
        <input value={inputText} onChange={onChange}/>
        <button onClick={onClick}>Add</button>
        <ul>
          {namesList}
        </ul>
      </>

  );
};

export default MyComponent;
