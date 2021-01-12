import React from 'react';
import { ContextComponent } from './hooks/Context';

function App() {
  return (
    <ContextComponent>
      <div className="App">
        <h1>Owed</h1>
        <button onClick={() => ContextComponent.addRecord()}>Add</button>
      </div>
    </ContextComponent>
  );
}

export default App;
