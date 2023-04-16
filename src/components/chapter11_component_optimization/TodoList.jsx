import React, {useCallback} from 'react';
import {List} from 'react-virtualized';
import TodoListItem from './TodoListItem';
import './TodoList.scss'

const TodoList = ({todos, onRemove, onToggle}) => {
  const rowRenderer = useCallback(
    ({index, key, style}) => {
      const todo = todos[index];
      return (
        <TodoListItem
          todo={todo}
          key={key}
          onRemove={onRemove}
          onToggle={onToggle}
          style={style}
        />
      );
    },
    [onRemove, onToggle, todos],
  );

  return (
    <List
      className='TodoList'
      width={512} // total width
      height={513} // total height
      rowCount={todos.length}
      rowHeight={57} // item height
      rowRenderer={rowRenderer} //rendering function
      list={todos}
      style={{outline: 'none'}}
    />
  );
};

export default React.memo(TodoList);
