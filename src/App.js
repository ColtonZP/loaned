import React, { useState } from 'react';
import { inspectText } from './function';

import './App.css';

function App() {
  const [input, changeInput] = useState('');
  const [history, rewriteHistory] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    rewriteHistory([...history, inspectText(input)]);
    changeInput('');
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={input}
          onChange={e => changeInput(e.target.value)}
        />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
