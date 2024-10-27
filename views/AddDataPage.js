// /src/views/AddDataPage.js
import React, { useState } from "react";
import { View, TextInput, Button } from "react-native";
import { addNewData } from "../controller/DataController";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../styles/FormStyles";
import { Select } from "@mui/material";
import { Picker } from "@react-native-picker/picker";
import { Text } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import "react-native-get-random-values";

export const AddDataPage = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [id_card_number, setId_card_number] = useState("");

  const navigation = useNavigation();

  const handleSubmit = async () => {
    await addNewData(
      name,
      parseInt(age),
      gender,
      address,
      id_card_number,
      () => {
        navigation.goBack();
      }
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Id Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Id Number"
        value={id_card_number}
        onChangeText={setId_card_number}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>Age</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Gender</Text>
      <Picker
        selectedValue={gender}
        style={styles.picker}
        onValueChange={(itemValue) => setGender(itemValue)}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="Male" />
        <Picker.Item label="Female" value="Female" />
        <Picker.Item label="Other" value="Other" />
      </Picker>

      <Text style={styles.label}>Address</Text>
      <GooglePlacesAutocomplete
        style={styles.input}
        placeholder="Search"
        onPress={(data, details = null) => {
          setAddress(data.description);
        }}
        query={{
          key: "AIzaSyCYSACWyuHjNDhCNh1HpUSOMR5PzXG53_I",
          language: "en",
        }}
      />

      <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};
