import React from "react";
import { SafeAreaView, StyleSheet } from 'react-native';
import { ThemeProvider } from 'react-native-elements';
import { StatusBar } from "expo-status-bar";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <ThemeProvider>
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="white" />
      {isLoggedIn ? (
        <HomeView />
      ) : (
        <LoginView onLoginSuccess={handleLoginSuccess} />
      )}
    </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    alignItems: "center",
    paddingTop: 40,
  },
});
