import create from 'zustand';

type Store = {
  records: {
    name: string;
    amount: number;
    history: {
      amount: number;
      change: string;
      id: number;
    }[];
  }[];
  addPerson: (name: string, amount: number, change: string) => void;
  updatePerson: (
    name: string,
    amount: number,
    change: string,
    deleteValue?: boolean,
  ) => void;
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

  updatePerson: (name, amount, change, deleteValue) => {
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
