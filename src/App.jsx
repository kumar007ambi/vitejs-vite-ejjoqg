import { useState,useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('hello');
  const [cnt, setCnt] = useState(0);

  function handleChange(e) {
    setText(e.target.value);
  }
  
  useEffect(() => {
    setTimeout(() => {
      setCnt((cnt) => cnt + 5);
    }, 1000);
  });

  return (
    <>
      <div className="card">
        <button onClick={() =>
          setCount((count) => count + 1)}>
          Increment
        </button>
        <button onClick={() =>
          setCount((count) => count - 1)}>Decrement
        </button>
        <p> count is {count}</p>
      </div>
      <div className="card">
        <input value={text} onChange={handleChange} />
        <p>You typed: {text}</p>
        <button onClick={() => setText('hello')}>
          Reset
        </button>
      </div>
      <h1>The count is : {cnt} </h1>;
    </>
  );
}

export default App;
