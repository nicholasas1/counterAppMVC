import React, { useState, useEffect } from "react";
import { View, FlatList, Text, Button } from "react-native";
import { getAllData } from "../controller/DataController";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { styles } from "../styles/MainPageStyles";
import { TouchableOpacity } from "react-native-gesture-handler";

export const MainPage = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

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
    <View style={styles.container}>
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
    </View>
  );
};
