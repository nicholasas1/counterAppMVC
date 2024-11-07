import React, { useState, useEffect } from 'react';
import { FlatList, Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { fetchUsers } from '../controller/UserController';

const UserListScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUsers = async () => {
      const userData = await fetchUsers();
      setUsers(userData);
    };
    loadUsers();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.userItem}
      onPress={() => navigation.navigate('UserDetail', { userId: item.id })}
    >
      <Image
        source={{ uri: `https://i.pravatar.cc/150?img=${item.id}` }}
        style={styles.userImage}
      />
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text>{item.username}</Text>
        <Text>{item.email}</Text>
        <Text>{item.address.street}, {item.address.city}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  userItem: {
    flexDirection: 'row',
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    elevation: 3,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserListScreen;
