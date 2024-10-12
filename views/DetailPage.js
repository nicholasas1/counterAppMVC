import React, { useState, useEffect } from 'react';
import { View, TextInput, Button } from 'react-native';
import { getDataById, editData, removeData } from '../controller/DataController';
import { useRoute, useNavigation } from '@react-navigation/native';
import { styles } from '../styles/FormStyles';

export const DetailPage = () => {
  const route = useRoute();
  const { id } = route.params;
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    getDataById(id, (data) => {
      setName(data.name);
      setAge(data.age.toString());
      setGender(data.gender);
    });
  }, []);

  const handleEdit = () => {
    editData(id, name, parseInt(age), gender, () => {
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
      <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Age" value={age} onChangeText={setAge} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="Gender" value={gender} onChangeText={setGender} />
      <Button title="Edit" onPress={handleEdit} />
      <Button title="Delete" onPress={handleDelete} />
    </View>
  );
};
