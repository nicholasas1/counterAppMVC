import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  item: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // For Android shadow effect
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  age: {
    fontSize: 16,
    color: "#666",
  },
  gender: {
    fontSize: 16,
    color: "#666",
  },
});
