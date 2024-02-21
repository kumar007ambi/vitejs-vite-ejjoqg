import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('hello');

  function handleChange(e) {
    setText(e.target.value);
  }
  
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
    </>
  );
}

export default App;
