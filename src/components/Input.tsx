import type { ChangeEvent } from 'react';

type InputPropsType = {
  value: number;
  callback: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  name: string;
};

export const Input = ({ value, callback, disabled, name }: InputPropsType) => {
  return (
    <input
      type="number"
      onChange={callback}
      disabled={disabled}
      value={value}
      name={name}
    ></input>
  );
};
