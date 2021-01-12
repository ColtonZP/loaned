import React, { useState, createContext } from 'react';

type Record = {
  name: string;
  amount: number;
};

type State = {
  records: Record[];
  addRecord: () => void;
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
        addRecord: () => {
          const person = { name: 'person', amount: 0 };
          const newRecords = [...records, person];
          updateRecords(newRecords);
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
