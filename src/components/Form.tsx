import React, { useState, useContext } from 'react';
import { GlobalContext } from '../hooks/Context';

export const Form = () => {
  const { addRecord } = useContext(GlobalContext);
  const [value, updateValue] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addRecord(value, 100);
    updateValue('');
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
