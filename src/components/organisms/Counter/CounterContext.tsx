import React, { createContext, useContext, useState } from "react";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterContext = createContext<CounterState | undefined>(undefined);

const CounterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <CounterContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

const useCounterContext = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error("useCounterContext must be used within a CounterProvider");
  }
  return context;
};

export { CounterProvider, useCounterContext };
