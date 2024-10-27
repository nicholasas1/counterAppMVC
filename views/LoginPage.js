import React, { useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  Image,
} from "react-native";
import { ThemeProvider } from "react-native-elements";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { GoogleSigninButton } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export const LoginPage = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userDataString = await AsyncStorage.getItem("userData");
        if (userDataString) {
          navigation.navigate("Registration of Election Participants");
        }
      } catch (error) {
        console.error("Failed to load user data:", error);
      }
    };

    fetchUserData();
  }, []);

  async function onGoogleButtonPress() {
    try {
      GoogleSignin.configure({
        webClientId:
          "507440970921-gfcnjs6iajogh60nt2qadn7l1fm8gqf8.apps.googleusercontent.com",
      });

      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      const data = await GoogleSignin.signIn();

      console.log(data.data.idToken);

      const googleCredential = auth.GoogleAuthProvider.credential(
        data.data.idToken
      );

      const userCredential = await auth().signInWithCredential(
        googleCredential
      );

      const userData = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        name: userCredential.user.displayName,
        photo: userCredential.user.photoURL,
      };

      await AsyncStorage.setItem("userData", JSON.stringify(userData));

      console.log("User data saved:", userData);

      navigation.navigate("Registration of Election Participants");
      return userData; // Kembalikan data pengguna jika diperlukan
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <Image
          source={{
            uri: "https://i.ibb.co.com/wJWdXHS/Screenshot-2024-10-27-at-09-32-43.png",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Hello!</Text>
        <Text style={styles.subtitle}>Login Now</Text>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={() =>
            onGoogleButtonPress().then(() =>
              console.log("Signed in with Google!")
            )
          }
        />
      </SafeAreaView>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: "100%",
  },
  orText: {
    marginVertical: 10,
    textAlign: "center",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
