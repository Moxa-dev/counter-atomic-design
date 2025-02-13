// src/components/organisms/Counter/CounterView.tsx
import React, { useCallback } from "react";
import { useCounterContext } from "./CounterContext";
import useDebounce from "./debounceHook";
import ButtonText from "../../molecules/ButtonText";

const CounterView: React.FC = () => {
  const { count, increment, decrement } = useCounterContext();

  const debouncedIncrement = useDebounce(increment, 500);
  const debouncedDecrement = useDebounce(decrement, 500);

  const handleIncrement = useCallback(() => {
    debouncedIncrement();
  }, [debouncedIncrement]);

  const handleDecrement = useCallback(() => {
    debouncedDecrement();
  }, [debouncedDecrement]);

  return (
    <div>
      <ButtonText onClick={handleDecrement} label="-" />
      <p>Count: {count}</p>
      <ButtonText onClick={handleIncrement} label="+" />
    </div>
  );
};

export default CounterView;
