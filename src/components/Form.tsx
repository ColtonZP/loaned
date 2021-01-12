import React, { useState, useContext } from 'react';

import { GlobalContext } from '../hooks/Context';
import { inspectText } from '../inspectText';

export const Form = () => {
  const { addRecord } = useContext(GlobalContext);
  const [value, updateValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submittedText = inspectText(value);
    console.log(submittedText);
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
