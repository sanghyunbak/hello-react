import {MdAdd} from 'react-icons/md' // md: material design
import React, {useCallback, useState} from 'react';
import './TodoInsert.scss'

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');

  const onChange = useCallback(
      (e) => {
        setValue(e.target.value)
      },
      [],
  );

  const onSubmit = useCallback(
      e => {
        onInsert(value);
        setValue(''); // initialize value

        // submit event make browser's refresh
        // so call this function to prevent this
        e.preventDefault();
      },
      [onInsert, value],
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
