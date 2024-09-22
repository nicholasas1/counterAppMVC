import React, { useState } from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="white" />
        {isLoggedIn ? (
          <HomeView />
        ) : (
          <LoginView onLoginSuccess={handleLoginSuccess} />
        )}
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    alignItems: "center",
    paddingTop: 30,
  },
});
