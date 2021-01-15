import React from 'react';

import { useStore } from '../store';
import { Person } from './Person';

type Record = {
  name: string;
  amount: number;
  history: History[];
};

type History = {
  amount: number;
  change: string;
};

export const People = () => {
  const records: any = useStore(state => state.records);

  return (
    <ul className="people">
      {records.map((person: Record) => (
        <Person key={person.name} value={person} />
      ))}
    </ul>
  );
};
