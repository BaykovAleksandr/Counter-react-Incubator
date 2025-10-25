

type ButtonPropsType = {
  name: string;
  callback: () => void;
  disabled?: boolean;
};

export const Button = ({ name, callback, disabled }: ButtonPropsType) => {
  return (
    <button onClick={callback} disabled={disabled}>
      {name}
    </button>
  );
};
