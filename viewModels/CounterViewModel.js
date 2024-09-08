import { useCounter } from "../models/CounterModel";

export function useCounterViewModel() {
  const { count, increment, decrement, reset } = useCounter();

  return {
    count,
    onIncrement: increment,
    onDecrement: decrement,
    onReset: reset,
  };
}
