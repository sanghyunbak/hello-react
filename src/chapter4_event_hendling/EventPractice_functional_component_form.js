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

  // Reason why use Spread operator
  // let a = {1: "2", "2": 3};
  // let b = {...a, "2": 2};
  // let c = {a, "2": 2};
  //
  // result
  // b = {1: "2", "2": 2};
  // c = {{1: "2", "2": 3}, "2": 2};

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