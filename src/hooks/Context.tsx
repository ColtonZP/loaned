import React, { useState, createContext } from 'react';

type Record = {
  name: string;
  amount: number;
  history?: [{ amount: number; change: string }];
};

type State = {
  records: Record[];
  addPerson: (name: string, amount: number, change: string) => void;
};

const initialState: State = {
  records: [],
  addPerson: () => {},
};

export const GlobalContext = createContext<State>(initialState);

export const ContextComponent: React.FC = ({ children }) => {
  const [records, updateRecords] = useState<Record[]>(initialState.records);

  return (
    <GlobalContext.Provider
      value={{
        records: records,

        addPerson: (name, amount, change) => {
          const person = { name, amount: change === 'inc' ? amount : -amount };
          const newRecord = [...records, person];
          updateRecords(newRecord);
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
