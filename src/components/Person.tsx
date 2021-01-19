import React, { useEffect } from 'react';

import { useStore, History, UpdatePerson, RemovePerson } from '../store';

type Props = {
  value: {
    name: string;
    amount: number;
    history: History[];
  };
};

export const Person = ({ value }: Props) => {
  const { updatePerson, removePerson } = useStore(state => ({
    updatePerson: state.updatePerson,
    removePerson: state.removePerson,
  }));
  const { name, amount, history } = value;

  useEffect(() => {
    if (amount === 0) {
      removePerson(name);
    }
    // return () => {
    //   cleanup
    // }
  }, [amount]);

  return (
    <li className="person">
      <span className="name">{name}</span>
      <span className="amount">
        {amount % 1 !== 0 ? amount.toFixed(2) : amount}
      </span>
      <ul className="records">
        <button className="removePerson" onClick={() => removePerson(name)}>
          Remove person
        </button>
        {history.map((record: History) => {
          const { amount, change, id } = record;

          return (
            <li className="record" key={id}>
              <span className={change}>{`${
                change === 'inc' ? `+` : `-`
              }${amount.toFixed(2)}`}</span>
              <button
                onClick={() => updatePerson(name, amount, change, true, id)}
              >
                &#x2715;
              </button>
            </li>
          );
        })}
      </ul>
    </li>
  );
};
