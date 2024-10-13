import React, { useState, useEffect } from "react";
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

export const DetailPage = () => {
  const route = useRoute();
  const { id } = route.params;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [id_card_number, setId_card_number] = useState("");
  const navigation = useNavigation();

  useEffect(() => {
    getDataById(id, (data) => {
      setName(data.name);
      setAge(data.age.toString());
      setGender(data.gender);
      setId_card_number(data.number);
      setAddress(data.address);
    });
  }, []);

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

      <Text style={styles.label}>Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your address"
        value={address}
        onChangeText={setAddress}
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

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.deleteButton} onPress={handleDelete}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
