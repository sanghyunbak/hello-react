import React, {useCallback, useRef, useState} from 'react';
import TodoTemplate from './TodoTemplate';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Let's check it out react basic",
      checked: true,
    },
    {
      id: 2,
      text: "Let's styling component",
      checked: true,
    },
    {
      id: 3,
      text: "create todo app",
      checked: false,
    }
  ]);

  const nextId = useRef(4);

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
        setTodos( todos =>
            todos.map(todo =>
              todo.id === id ? { ...todo, checked: !todo.checked } : todo,
            ),
        );
      },
      [],
  )

  return (
      <TodoTemplate>
        If you set onInsert attribute's value to onInsert() not onInsert
        chrome will raise exception of 'too many rerender'
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
  );
};

export default TodoApp;
