import React from 'react';

import { useStore, History, UpdatePerson } from '../store';

type Props = {
  value: {
    name: string;
    amount: number;
    history: History[];
  };
};

export const Person = ({ value }: Props) => {
  const updatePerson: UpdatePerson = useStore(state => state.updatePerson);
  const { name, amount, history } = value;

  return (
    <li className="person">
      <span className="name">{name}</span>
      <span className="amount">
        {amount % 1 !== 0 ? amount.toFixed(2) : amount}
      </span>
      <ul className="records">
        {history.map((record: History) => {
          const { amount, change, id } = record;

          return (
            <li className="record" key={amount}>
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
