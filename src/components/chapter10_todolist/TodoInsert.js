import {MdAdd} from 'react-icons/md' // md: material design
import React, {useCallback, useState} from 'react';
import './TodoInsert.scss'

const TodoInsert = () => {
  const [value, setValue] = useState('');

  const onChange = useCallback(
      (e) => {
        setValue(e.target.value)
      },
      [],
  );

  return (
      <form className={"TodoInsert"}>
        <input
            placeholder={'Insert todo job'}
            value={value}
            onChange={onChange}
            style={{color: 'black'}}
        />
        <button type={"submit"}>
          <MdAdd />
        </button>
      </form>
  );
};

export default TodoInsert;
