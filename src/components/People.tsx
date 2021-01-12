import React, { useContext } from 'react';

import { GlobalContext } from '../hooks/Context';
import { Person } from './Person';

export const People = () => {
  const { records } = useContext(GlobalContext);
  return (
    <ul>
      {records.map(person => (
        <Person key={person.name} value={person} />
      ))}
    </ul>
  );
};
