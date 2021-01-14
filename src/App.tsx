import React from 'react';

import { Form } from './components/Form';
import { People } from './components/People';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Owed</h1>
        <Form />
      </header>
      <People />
    </div>
  );
}

export default App;
