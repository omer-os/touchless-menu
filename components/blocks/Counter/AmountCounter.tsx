import Button from "../../elements/button/Button";
import React from "react";

interface AmountCounterProps {
  className?: string;
  State: number;
  setState: (value: number) => void;
  min?: number;
  max?: number;
}

const AmountCounter: React.FC<AmountCounterProps> = ({
  className,
  State,
  setState,
  min = 0,
  max = Infinity,
}) => {
  const decrement = () => {
    if (State > min) {
      setState(State - 1);
    }
  };

  const increment = () => {
    if (State < max) {
      setState(State + 1);
    }
  };

  return (
    <div className={className + " flex items-center gap-2"}>
      <Button size={"sm"} intent={"bordered"} onClick={decrement}>
        -
      </Button>
      <span>{State}</span>
      <Button size={"sm"} onClick={increment}>
        +
      </Button>
    </div>
  );
};

export default AmountCounter;
