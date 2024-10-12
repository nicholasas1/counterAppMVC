import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; // Import this for gesture handling

import { MainPage } from './views/MainPage';
import { AddDataPage } from './views/AddDataPage';
import { DetailPage } from './views/DetailPage';
import { initDB } from './models/DataModel';

const Stack = createStackNavigator();

export default function App() {
  React.useEffect(() => {
    initDB();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="white" />
          <NavigationContainer>
            <Stack.Navigator initialRouteName="MainPage">
              <Stack.Screen name="MainPage" component={MainPage} />
              <Stack.Screen name="AddDataPage" component={AddDataPage} />
              <Stack.Screen name="DetailPage" component={DetailPage} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
