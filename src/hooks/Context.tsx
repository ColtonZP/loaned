import React, { useState, createContext } from 'react';

type Record = {
  name: string;
  amount: number;
  history: History[];
};

type History = { amount: number; change: string };

type State = {
  records: Record[];
  addPerson: (name: string, amount: number, change: string) => void;
  updatePerson: (name: string, amount: number, change: string) => void;
};

const initialState: State = {
  records: [],
  addPerson: () => {},
  updatePerson: () => {},
};

export const GlobalContext = createContext<State>(initialState);

export const ContextComponent: React.FC = ({ children }) => {
  const [records, updateRecords] = useState<Record[]>(initialState.records);

  return (
    <GlobalContext.Provider
      value={{
        records: records,

        addPerson: (name, amount, change) => {
          const submitAmount = change === 'inc' ? amount : -amount;
          const person = {
            name,
            amount: submitAmount,
            history: [{ amount, change }],
          };
          const newRecord = [...records, person];
          updateRecords(newRecord);
        },

        updatePerson: (name, amount, change) => {
          const person = records.find(record => record.name === name);
          if (person) {
            person.history = [...person.history, { amount, change }];
            const currentAmount = person.amount * 100;
            const changeAmount = amount * 100;
            const newAmount =
              change === 'inc'
                ? (currentAmount + changeAmount) / 100
                : (currentAmount - changeAmount) / 100;
            person.amount = newAmount;
          }
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
