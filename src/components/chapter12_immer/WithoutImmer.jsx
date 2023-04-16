import { useRef, useCallback, useState } from 'react';

const WithoutImmer = () => {
  const nextId = useRef(1);
  const [form, setForm] = useState({ name: '', username: ''});
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });

  // function that for modify input
  const onChange = useCallback(
    e => {
      const {name, value} = e.target;
      setForm({
        ...form,
        [name]: [value]
      });
    },
    [form]
  );

  // function for register form
  const onSubmit = useCallback(
    e => {
     e.preventDefault();
     const info = {
       id: nextId.current,
       name: form.name,
       username: form.username
     };

     //register new item to array
     setData({
       ...data,
       array: data.array.concat(info)
     });

     // initialize form
      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  // function that delete item
  const onRemove = useCallback(
    id => {
      setData({
        ...data,
        array: data.array.filter(info => info.id !== id)
      });
    },
    [data]
    );

  return (
    <div>
      <h1>Without Immer</h1>
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

export default WithoutImmer;