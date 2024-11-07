import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { ThemeProvider } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Import this for gesture handling
import UserListScreen from "./views/UserListScreen";
import UserDetailScreen from "./views/UserDetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="white" />

          <NavigationContainer>
            <Stack.Navigator initialRouteName="UserList">
              <Stack.Screen name="UserList" component={UserListScreen} />
              <Stack.Screen name="UserDetail" component={UserDetailScreen} />
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
    backgroundColor: "#fff",
  },
});
