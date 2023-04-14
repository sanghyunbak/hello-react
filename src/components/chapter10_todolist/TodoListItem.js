import React from 'react';
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({todo, onRemove, onToggle}) => {
  const {id, text, checked} = todo;
  console.log(`😎😎😎todo: ${JSON.stringify(todo)}`);
  console.log(`😎😎😎text: ${JSON.stringify(text)}`);
  console.log(`😎😎😎checked: ${JSON.stringify(text)}`);

  return (
      <div className={"TodoListItem"}>
        <div className={cn("checkbox", {checked})} onClick={() => onToggle(id)}>
          {checked ? <MdCheckBox />: <MdCheckBoxOutlineBlank />}
          <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
          <MdRemoveCircleOutline />
        </div>
        
      </div>
  );
};

export default TodoListItem;
