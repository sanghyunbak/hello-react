import React, {useEffect, useState} from 'react';

const Info = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    console.log('rendering completed only first render');
    console.log({
      name,
      nickname
    });
  }, []) // add second argument empty array
  const onChangeName = e => {
    setName(e.target.value);
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
  };

  return (
      <div>
        <div>
          <input value={name} onChange={onChangeName}></input>
          <input value={nickname} onChange={onChangeNickname}></input>
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
