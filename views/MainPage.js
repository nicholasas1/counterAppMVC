import React, { useEffect, useState } from "react";
import { View, FlatList, Text, Button, Image, StyleSheet } from "react-native";
import { getAllData } from "../controller/DataController";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const MainPage = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem("userData");
        if (userDataString) {
          const userData = JSON.parse(userDataString);
          setName(userData);
        }
      } catch (error) {
        console.error("Failed to load user data:", error);
      }
    };

    fetchUserData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        const result = await new Promise((resolve) => {
          getAllData(resolve);
        });
        setData(result);
      };

      fetchData();
    }, [])
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.nameContainer}>
          <Text style={styles.greetingText}>Hai, {name.name}</Text>
        </View>
        <View style={styles.profileContainer}>
          <Image source={{ uri: name.photo }} style={styles.profileImage} />
        </View>
      </View>

      {/* Daftar Item */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate("Detail", { id: item.id })}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.age}>Age: {item.age}</Text>
            <Text style={styles.gender}>Gender: {item.gender}</Text>
          </TouchableOpacity>
        )}
      />

      <Button
        title="Add Data"
        onPress={() => navigation.navigate("Add Data")}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  nameContainer: {
    flex: 1,
  },
  profileContainer: {},
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20, // Membuat gambar menjadi bulat
  },
  greetingText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  item: {
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#f9c2ff",
    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  age: {
    fontSize: 14,
  },
  gender: {
    fontSize: 14,
    color: "gray",
  },
});
