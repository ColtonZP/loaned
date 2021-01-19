import React from 'react';

import { useStore, Record } from '../store';
import { Person } from './Person';

export const People = () => {
  const records: Record[] = useStore(state => state.records);

  return (
    <ul className="people">
      {records.map((person: Record) => (
        <Person key={person.name} value={person} />
      ))}
    </ul>
  );
};
