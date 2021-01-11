import React, { createContext } from 'react';

export const Books = createContext([]);

function App() {
  return (
    <Books.Provider value={[]}>
      <div className="App">
        <h1>Owed</h1>
        <button onClick={() => console.log('add clicked')}>Add</button>
      </div>
    </Books.Provider>
  );
}

export default App;
