function AppNull() {
  const name = undefined;
  return <div>{name || 'null 입니다.'}</div>;
}

export default AppNull;
