import React, { useContext } from 'react';

import { useStore } from '../store';
import { Person } from './Person';

export const People = () => {
  const records: any = useStore(state => state.records);

  return (
    <ul>
      {records.map((person: { amount: any; name: string }) => (
        <Person key={person.name} value={person} />
      ))}
    </ul>
  );
};
