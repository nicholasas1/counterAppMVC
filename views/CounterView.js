import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useCounterViewModel } from "../viewModels/CounterViewModel";

const CounterView = () => {
  const { count, onIncrement, onDecrement, onReset } = useCounterViewModel();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Menggunakan MVVM</Text>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttons}>
        <Button title="Increment" onPress={onIncrement} />
        <Button title="Decrement" onPress={onDecrement} />
        <Button title="Reset" onPress={onReset} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontSize: 36,
    marginBottom: 20,
  },
  counter: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
});

export default CounterView;
