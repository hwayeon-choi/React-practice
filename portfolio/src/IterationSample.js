import { useState } from 'react';

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: 'a' },
    { id: 2, text: 'b' },
    { id: 3, text: 'c' },
    { id: 4, text: 'd' },
  ]);
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id

  const onChange = e => setInputText(e.target.value);
  const onClick = () => {
    const nextNames = names.concat({
      id : nextId,
      text: inputText
    });
    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText('');
  };
  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map(name => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));
  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>add</button>
      <ul>{namesList}</ul>
    </>
  );
};

export default IterationSample;