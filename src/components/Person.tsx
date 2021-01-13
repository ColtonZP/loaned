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
    <li>
      <span className="Name">{name}</span>
      <span className="Amount">{amount.toFixed(2)}</span>
      <ul>
        {history.map((record: History) => (
          <li className={record.change} key={record.amount}>
            {record.amount}
          </li>
        ))}
      </ul>
    </li>
  );
};
