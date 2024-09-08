// controllers/CounterController.js
import React from "react";
import { useCounter } from "../models/CounterModel";
import CounterView from "../views/CounterView";

const CounterController = () => {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <CounterView
      count={count}
      increment={increment}
      decrement={decrement}
      reset={reset}
    />
  );
};

export default CounterController;
