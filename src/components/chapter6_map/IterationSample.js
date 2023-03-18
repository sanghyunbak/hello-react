// const IterationSample = () => {
//   return (
//       <ul>
//         <li>snowman</li>
//         <li>ice</li>
//         <li>snow</li>
//         <li>wind</li>
//       </ul>
//   );
// };

const IterationSample = () => {
  const names = ['snowman', 'ice', 'snow', 'wind'];
  const nameList = names.map((name, index) => <li key={index}>{name}</li>)
  return (
      <ul>
        {nameList}
      </ul>
  );
};

export default IterationSample;