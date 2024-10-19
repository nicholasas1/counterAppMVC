import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { getAllItems } from "../controller/ItemController";
import { StatusBar } from "expo-status-bar";

const numColumns = 2; // For grid layout
const screenWidth = Dimensions.get("window").width;

const HomeScreen = ({ navigation }) => {
  const items = getAllItems();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("Detail", { itemId: item.id })}
      style={styles.card}
    >
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.price}>Rp{item.price}</Text>
        <Text style={styles.discount}>Diskon s/d {item.discount}%</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <View style={styles.container}>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          key={numColumns.toString()} // Change key when numColumns changes to force rerender
          numColumns={numColumns} // Set to 2 for grid layout
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: screenWidth / numColumns - 30, // Responsive card width for grid
    alignItems: "center", // Center content inside the card
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
    borderRadius: 18,
  },
  info: {
    alignItems: "center", // Center text inside the card
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: "#FF5722", // Highlight the price in a standout color
    fontWeight: "bold",
    marginBottom: 5,
  },
  discount: {
    fontSize: 12,
    color: "#999", // Subdued color for the discount text
  },
});

export default HomeScreen;
