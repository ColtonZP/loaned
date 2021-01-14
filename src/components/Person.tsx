import React from 'react';

type Props = {
  value: {
    name: string;
    amount: number;
    history: History[];
  };
};

type History = {
  amount: number;
  change: string;
};

export const Person = ({ value }: Props) => {
  const { name, amount, history } = value;

  return (
    <li className="person">
      <span className="name">{name}</span>
      <span className="amount">
        {amount % 1 !== 0 ? amount.toFixed(2) : amount}
      </span>
      <ul>
        {history.map((record: History) => {
          const { amount, change } = record;

          return (
            <li className={change} key={amount}>
              {`${change === 'inc' ? `+` : `-`}${amount.toFixed(2)}`}
            </li>
          );
        })}
      </ul>
    </li>
  );
};
