// /src/views/AddDataPage.js
import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { addNewData } from "../controller/DataController";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/FormStyles";

export const AddDataPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const navigation = useNavigation();

  const handleSubmit = async () => {
    await addNewData(name, parseInt(age), gender, () => {
      navigation.goBack();
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Gender"
        value={gender}
        onChangeText={setGender}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};
