// src/components/organisms/Counter/Counter.tsx
import React from "react";
import { CounterProvider } from "./CounterContext";
import CounterView from "./CounterView";

const Counter: React.FC = () => (
  <CounterProvider>
    <CounterView />
  </CounterProvider>
);

export default Counter;
