import React, { useState } from 'react';
import { inject, observer } from 'mobx-react';

import { inspectText } from './function';
import './App.scss';
import Person from './Person';

const App = inject('OwedStore')(
  observer(props => {
    const [input, changeInput] = useState('');
    const { OwedStore } = props;
    const records = OwedStore.records;
    console.log(records);

    function handleSubmit(e) {
      e.preventDefault();
      const inspectedText = inspectText(input);
      if (inspectedText.status === 'failed') {
        alert('a(n) ' + inspectedText.reason + ' appears to be missing.');
      } else {
        OwedStore.addRecord(inspectedText);
        changeInput('');
      }
    }

    return (
      <div className="App">
        <form onSubmit={e => handleSubmit(e)}>
          <input
            type="text"
            name=""
            id=""
            value={input}
            onChange={e => changeInput(e.target.value)}
          />
        </form>
        <div className="people">
          {OwedStore.records.map(person => (
            <Person person={person} key={person.name} />
          ))}
        </div>
      </div>
    );
  })
);

export default App;
