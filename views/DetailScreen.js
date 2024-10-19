import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { getItemById } from "../controller/ItemController";
import { StatusBar } from "expo-status-bar";

const DetailScreen = ({ route }) => {
  const { itemId } = route.params;
  const item = getItemById(itemId);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="white" />
      <ScrollView style={styles.container}>
        {/* Product Image */}
        <Image source={{ uri: item.image }} style={styles.image} />

        {/* Product Title and Badge */}
        <View style={styles.badgeContainer}>
          <Text style={styles.badge}>Kualitas Terbaik</Text>
        </View>

        {/* Product Title */}
        <Text style={styles.title}>{item.title}</Text>

        {/* Price and Discount */}
        <View style={styles.priceContainer}>
          <Text style={styles.oldPrice}>Rp{item.oldPrice}</Text>
          <Text style={styles.discount}>Hemat {item.discount}%</Text>
        </View>
        <Text style={styles.price}>Rp{item.price}</Text>

        {/* Selectable Size Options */}
        <View style={styles.sizeOptions}>
          <TouchableOpacity style={styles.sizeOption}>
            <Text style={styles.sizeText}>50 gram</Text>
          </TouchableOpacity>
        </View>

        {/* Add to Cart Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Item ditambahkan ke keranjang!")}
        >
          <Text style={styles.buttonText}>Tambah ke Keranjang</Text>
        </TouchableOpacity>

        {/* Product Description */}
        <Text style={styles.sectionTitle}>Deskripsi</Text>
        <Text style={styles.description}>{item.description}</Text>

        {/* View More Products */}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
    marginBottom: 20,
  },
  badgeContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: "#ff5722",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  badge: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 15,
    textAlign: "center",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },
  oldPrice: {
    textDecorationLine: "line-through",
    color: "#999",
    marginRight: 10,
  },
  discount: {
    backgroundColor: "#FF6347",
    color: "#fff",
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
    fontSize: 12,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF5722",
    textAlign: "center",
    marginBottom: 25,
  },
  sizeOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  sizeOption: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  selectedSize: {
    backgroundColor: "#FF6347",
  },
  sizeText: {
    color: "#333",
    fontSize: 14,
  },
  selectedSizeText: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#FF5722",
    padding: 15,
    borderRadius: 10,
    marginBottom: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  viewMoreText: {
    color: "#FF5722",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default DetailScreen;
