import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { fetchUserDetails } from "../controller/UserController";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const UserDetailScreen = ({ route }) => {
  const { userId } = route.params;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loadUserDetails = async () => {
      const userData = await fetchUserDetails(userId);
      setUser(userData);
    };
    loadUserDetails();
  }, [userId]);

  if (!user) return null;

  const latitude = parseFloat(user.address.geo.lat);
  const longitude = parseFloat(user.address.geo.lng);

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={{ uri: `https://i.pravatar.cc/150?img=${userId}` }}
          style={styles.profileImage}
        />

        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.username}>@{user.username}</Text>
        <Text style={styles.email}>{user.email}</Text>

        <View style={styles.addressCard}>
          <Text style={styles.addressTitle}>Address</Text>
          <Text style={styles.addressText}>
            {user.address.street}, {user.address.city}, {user.address.zipcode}
          </Text>
        </View>

        <Text style={styles.mapTitle}>Location</Text>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
            title={user.name}
            description={user.address.street}
          />
        </MapView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#f9f9f9",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 20,
  },
  userName: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#333",
  },
  username: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "center",
    color: "#555",
    marginBottom: 10,
  },
  email: {
    fontSize: 16,
    textAlign: "center",
    color: "#777",
    marginBottom: 20,
  },
  addressCard: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    marginBottom: 20,
  },
  addressTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  addressText: {
    fontSize: 16,
    color: "#555",
  },
  mapTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "#333",
  },
  map: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginTop: 10,
  },
});

export default UserDetailScreen;
