import React, { useState, createContext } from 'react';

type Record = {
  name: string;
  amount: number;
};

type State = {
  records: Record[];
  addRecord: (name: string, amount: number) => void;
};

const initialState: State = {
  records: [],
  addRecord: () => {},
};

export const GlobalContext = createContext<State>(initialState);

export const ContextComponent: React.FC = ({ children }) => {
  const [records, updateRecords] = useState<Record[]>(initialState.records);

  return (
    <GlobalContext.Provider
      value={{
        records: records,
        addRecord: (name, amount) => {
          const person = { name: name, amount: amount };
          const newRecords = [...records, person];
          updateRecords(newRecords);
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
