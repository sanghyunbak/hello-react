import { useState, useRef, useCallback } from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

import React from 'react';

function createBulkTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    })
  }
  return array;
}

const OptApp = () => {
  const [todos, setTodos] = useState(createBulkTodos);

  // unique id
  const nextId = useRef(2501);


  const onInsert = useCallback(
      (text) => {
        const todo = {
          id: nextId.current,
          text,
          checked: false,
        };
        setTodos(todos => todos.concat(todo));
        nextId.current += 1; // add one to nextId
      },
      [],
  );

  const onRemove = useCallback(
      (id) => {
        setTodos(todos => todos.filter(todo => todo.id !== id));
      },
      [],
  );

  const onToggle = useCallback(
      id => {
        setTodos(todos =>
            todos.map(todo =>
                todo.id === id ? { ...todo, checked: !todo.checked } : todo,
            ),
        );
      },
      [],
  )

  return (
      <>
        <h1> Bulk insert version of todo Apps</h1>
        <TodoTemplate>
          If you set onInsert attribute's value to onInsert() not onInsert
          chrome will raise exception of 'too many rerender'
          <TodoInsert onInsert={onInsert}/>
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
        </TodoTemplate>
      </>
  );
};

export default OptApp;
