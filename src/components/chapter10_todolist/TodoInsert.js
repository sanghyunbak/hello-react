import {MdAdd} from 'react-icons/md' // md: material design
import React from 'react';
import './TodoInsert.scss'

const MyComponent = () => {
  return (
      <form className={"TodoInsert"}>
        <input placeholder={'Insert todo job'} />
        <button type={"submit"}>
          <MdAdd />
        </button>
      </form>
  );
};

export default MyComponent;
