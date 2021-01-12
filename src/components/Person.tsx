import React from 'react';

type Props = {
  value: {
    name: string;
    amount: number;
  };
};

export const Person = ({ value }: Props) => {
  return (
    <li>
      <span>{`${value.name} owes ${value.amount}`}</span>
    </li>
  );
};
