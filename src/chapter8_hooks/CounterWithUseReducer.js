import React, {useReducer, useState} from 'react';

function reducer(state, action) {

  switch (action.type) {
    case 'INCREMENT':
      return {value: state.value + 1};
    case 'DECREMENT':
      return {value: state.value - 1};
    default:
      return state;
  }

}

const MyComponent = () => {
  const [state, dispatch] = useReducer(reducer, {value: 0});
  return (
      <div>
        <p>
          current counter value is <b>{state.value}</b>
        </p>
        <button onClick={() => dispatch({type: 'INCREMENT'})}> +1</button>
        <button onClick={() => dispatch({type: 'DECREMENT'})}> -1</button>
      </div>
  );
};

export default MyComponent;
