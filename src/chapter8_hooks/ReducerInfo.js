import React, {useReducer, useState} from 'react';

const Info = () => {
  // It will change to useReducer
  // const [name, setName] = useState('');
  // const [nickname, setNickname] = useState('');

  // const onChangeName = e => {
  //   setName(e.target.value);
  // };
  //
  // const onChangeNickname = e => {
  //   setNickname(e.target.value);
  // };

  function reducer(state, action) {
    return {
      ...state, [action.name]: action.value,
    };
  }

  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });

  const {name, nickname} = state;
  const onChange = e => {
    dispatch(e.target);
  };

  return (
      <div>
        <div>
          <input name="name" value={name} onChange={onChange}></input>
          <input name="nickname" value={nickname} onChange={onChange}></input>
        </div>
        <div>
          <div>
            <b>Name: </b> {name}
          </div>
          <div>
            <b>Nickname: </b> {nickname}
          </div>
        </div>
      </div>
  );
};

export default Info;
