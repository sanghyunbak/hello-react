import {useState} from 'react';

const EventPracticeFunctionalComponentForm = () => {
  const [form, setForm] = useState({
    username: '',
    message: '',
  });
  const {username, message} = form;
  const onChange = e => {
    const nextForm = {
      ...form, // 기존의 form 내용 TODO: ... operator의 의미를 잘 모르겠음... Iterable을 표현하는 것은 아닌거 같고
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ': ' + message);
    setForm({
      username: '',
      message: '',
    });
  };
  const onKeyPress = e => {
    if (e.key === 'Enter') {
      onClick();
    }
  };
  return (
      <div>
        <h1>이벤트 연습 form</h1>
        <input
            type={'text'}
            name={'username'}
            placeholder={'user name'}
            value={username}
            onChange={onChange}
        />
        <input
            type={'text'}
            name={'message'}
            placeholder={'Insert any key'}
            value={message}
            onChange={onChange}
            onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>Confirm</button>
      </div>
  );
};

export default EventPracticeFunctionalComponentForm;