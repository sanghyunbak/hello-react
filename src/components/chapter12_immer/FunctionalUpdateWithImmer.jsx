import {useRef, useCallback, useState} from 'react';
import produce from 'immer';

const FunctionalUpdateWithImmer = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: ''});
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  //function for modify input
  const onChange = useCallback(
    e => {
      const {name, value} = e.target;
      setForm(
        produce(draft => {
          draft[name] = value;
        })
      );
    },
    []
  );

  // function for form register
  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };

      // new item register to array variable
      setData(
        produce(draft => {
          draft.array.push(info);
        })
      );

      // form initialize
      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  //function that delete item
  const onRemove = useCallback(
    id => {
      setData(
        produce(draft => {
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1);
        })
      )
    },
    [],
  );

  return (
    <div>
      <h1>Functional update With Immer</h1>
      <form onSubmit={onSubmit}>
        <input
          name='username'
          placeholder="id"
          value={form.username}
          onChange={onChange}
        />
        <input
          name='name'
          placeholder="name"
          value={form.name}
          onChange={onChange}
        />
        <button type='submit'>Register</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={()=> onRemove(info.id)}>
              {info.username} ({info.name})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FunctionalUpdateWithImmer;