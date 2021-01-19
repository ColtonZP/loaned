import create from 'zustand';

export type History = {
  amount: number;
  change: string;
  id: number;
};

export type Record = {
  name: string;
  amount: number;
  history: History[];
};

export type updatePerson = (
  name: string,
  amount: number,
  change: string,
  deleteValue?: boolean,
  id?: number,
) => void;

export type Store = {
  records: Record[];
  addPerson: (name: string, amount: number, change: string) => void;
  updatePerson: updatePerson;
};

export const useStore = create<Store>(set => ({
  records: [],

  addPerson: (name, amount, change) => {
    const submitAmount = change === 'inc' ? amount : -amount;
    const person = {
      name,
      amount: submitAmount,
      history: [{ amount, change, id: Date.now() }],
    };

    set(state => ({ records: [...state.records, person] }));
  },

  updatePerson: (name, amount, change, deleteValue, id) => {
    set(state => ({
      records: state.records.map(record => {
        if (deleteValue) {
          console.log(`deleted value, changing amount by ${amount}`);
        } else if (record.name === name) {
          return {
            ...record,
            history: [...record.history, { amount, change, id: Date.now() }],
            amount:
              change === 'inc'
                ? (Number(record.amount * 100) + Number(amount * 100)) / 100
                : (Number(record.amount * 100) - Number(amount * 100)) / 100,
          };
        }

        return record;
      }),
    }));
  },
}));
