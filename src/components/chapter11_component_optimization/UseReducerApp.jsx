import {useState, useRef, useCallback, useReducer} from 'react';
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

function todoReducer(todos, action) {
  switch (action.type) {
    case 'INSERT': // new item add
      // {type: 'INSERT', todo: { id: 1, text: 'todo', checked: false}}
      return todos.concat(action.todo);
    case 'REMOVE': //delete
      // {type: 'REMOVE', id: 1}
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE':
      // {type: 'TOGGLE', id: 1}
      return todos.map(todo =>
          todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const UseReducerApp = () => {
  // const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos)
  // unique id
  const nextId = useRef(2501);


  const onInsert = useCallback(
      (text) => {
        const todo = {
          id: nextId.current,
          text,
          checked: false,
        };
        // setTodos(todos => todos.concat(todo));
        dispatch({ type: 'INSERT', todo })
        nextId.current += 1; // add one to nextId
      },
      [],
  );

  const onRemove = useCallback(
      (id) => {
        // setTodos(todos => todos.filter(todo => todo.id !== id));
        dispatch({type: 'REMOVE', id})
      },
      [],
  );

  const onToggle = useCallback(
      id => {
        // setTodos(todos =>
        //     todos.map(todo =>
        //         todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        //     ),
        // );
        dispatch({type: 'TOGGLE', id})
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

export default UseReducerApp;
