import produce from 'immer';

const originalState = [
  {
    id: 1,
    todo: 'destructuring assignment operator and built-in array function work with immutability',
    checked: true,
  },
  {
    id: 2,
    todo: 'work with immutability using immer',
    checked: false,
  }
];

const nextStag = produce(originalState, draft => {
  // value that you want to change
  const todo = draft.find(t => t.id === 2); // find item with 'id'
  todo.checked = true; // or draft[1].checked = true;

  // add data to array
  draft.push({
    id: 3,
    todo: 'Aply immer in TodoList App',
    checked: false,
  });

  // delete item with id=1
  draft.splice(draft.findIndex(t => t.id === 1), 1);
});