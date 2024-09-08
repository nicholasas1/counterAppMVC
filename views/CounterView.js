import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CounterView = ({ count, increment, decrement, reset }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Menggunakan MVC</Text>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttons}>
        <Button title="Increment" onPress={increment} />
        <Button title="Decrement" onPress={decrement} />
        <Button title="Reset" onPress={reset} />
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
    fontSize: 38,
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
