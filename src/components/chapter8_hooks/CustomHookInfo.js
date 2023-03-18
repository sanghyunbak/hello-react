import React, {useState} from 'react';
import useInputs from './useInputs';

const Info = () => {
  const [state, onChange] = useInputs({
    name: '',
    nickname: ''
  })
  const [name, nickname] = state;

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
