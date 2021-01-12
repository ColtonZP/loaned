import React, { useState, useContext } from 'react';

import { GlobalContext } from '../hooks/Context';
import { inspectText } from '../inspectText';

export const Form = () => {
  const { records, addPerson } = useContext(GlobalContext);
  const [value, updateValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submittedText = inspectText(value);
    if (submittedText.status === 'failed') {
      alert('a(n) ' + submittedText.reason + ' appears to be missing.');
    } else if (submittedText.name && submittedText.amount) {
      console.log(submittedText);
      records.find(record => record.name === submittedText.name)
        ? console.log(`name found`)
        : addPerson(
            submittedText.name,
            submittedText.amount,
            submittedText.change,
          );
      // addRecord(submittedText);
    }
    // updateValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="text-input"
        type="text"
        value={value}
        onChange={e => updateValue(e.target.value)}
      />
    </form>
  );
};
