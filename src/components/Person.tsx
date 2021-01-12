import React from 'react';

type Props = {
  value: {
    name: string;
    amount: number;
  };
};

export const Person = ({ value }: Props) => {
  const { name, amount } = value;

  return (
    <li>
      <span>{`${name} ${amount}`}</span>
    </li>
  );
};
