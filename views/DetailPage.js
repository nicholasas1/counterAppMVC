import React, { useState, useEffect, useRef } from "react";
import { View, TextInput, Button } from "react-native";
import {
  getDataById,
  editData,
  removeData,
} from "../controller/DataController";
import { useRoute, useNavigation } from "@react-navigation/native";
import { styles } from "../styles/FormStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "react-native-elements";
import { Picker } from "@react-native-picker/picker";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

export const DetailPage = () => {
  const route = useRoute();
  const ref = useRef(null);
  const { id } = route.params;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [id_card_number, setId_card_number] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    // Set initial address text when the component mounts
    ref.current?.setAddressText("Some Text"); // Replace 'Some Text' with your initial address
  }, []);

  useEffect(() => {
    getDataById(id, (data) => {
      ref.current.setAddressText(data.address);
      setName(data.name);
      setAge(data.age.toString());
      setGender(data.gender);
      setId_card_number(data.number);
      setAddress(data.address);
    });
  }, [id]);

  const handleEdit = () => {
    editData(id, name, parseInt(age), gender, address, id_card_number, () => {
      navigation.goBack();
    });
  };

  const handleDelete = () => {
    removeData(id, () => {
      navigation.goBack();
    });
  };

  return (
    <ScrollView style={styles.container}>
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
        ref={ref}
        onPress={(data, details = null) => {
          setAddress(data.description);
        }}
        query={{
          key: "AIzaSyCYSACWyuHjNDhCNh1HpUSOMR5PzXG53_I",
          language: "en",
        }}
      />

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
