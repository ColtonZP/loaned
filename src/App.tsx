import React from 'react';
import { ContextComponent } from './hooks/Context';
import { Form } from './components/Form';

function App() {
  return (
    <ContextComponent>
      <div className="App">
        <h1>Owed</h1>
        <Form />
      </div>
    </ContextComponent>
  );
}

export default App;
