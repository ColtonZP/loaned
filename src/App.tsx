import React from 'react';

import { ContextComponent } from './hooks/Context';
import { Form } from './components/Form';
import { People } from './components/People';

function App() {
  return (
    <ContextComponent>
      <div className="App">
        <Form />
        <People />
      </div>
    </ContextComponent>
  );
}

export default App;
