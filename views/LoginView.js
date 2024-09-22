import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput, Button, Card } from 'react-native-paper'; // Menggunakan material.io
import LoginController from '../controller/LoginController';

const LoginView = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { handleLogin, errorMessage } = LoginController({ onLoginSuccess });

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Title title="Login" />
        <Card.Content>
          <TextInput
            label="Username"
            value={username}
            onChangeText={setUsername}
            mode="outlined"
            style={styles.input}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            mode="outlined"
            style={styles.input}
          />
          {errorMessage ? <Text style={styles.errorText}>{errorMessage}</Text> : null}
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => handleLogin(username, password)}>
            Login
          </Button>
        </Card.Actions>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    padding: 20,
  },
  input: {
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default LoginView;
