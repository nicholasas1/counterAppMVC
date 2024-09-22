import React from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  StyleSheet,
} from "react-native";
import { TextInput, Button, Card, Avatar, Title } from "react-native-paper";

export default function HomePage() {
  const catalogItems = [
    {
      title: "Lobak",
      image:
        "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2022/09/29035721/Kandungan-Nutrisi-pada-Lobak-Putih-yang-Baik-bagi-Kesehatan.jpg",
    },
    {
      title: "Wortel",
      image:
        "https://s3-ap-southeast-1.amazonaws.com/blog-assets.segari.id/2022/12/manfaat-wortel-cover.jpg",
    },
    {
      title: "Timun",
      image:
        "https://asset.kompas.com/crops/wxP17Yrh68rvSvPf3yuz8_I4i88=/0x1:1000x668/750x500/data/photo/2020/11/24/5fbca020a13ac.jpg",
    },
    {
      title: "Bayam",
      image:
        "https://www.astronauts.id/blog/wp-content/uploads/2023/01/7-Manfaat-Sayur-Bayam-Untuk-Tubuh--1200x900.jpg",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.searchContainer}>
          <TextInput
            mode="outlined"
            placeholder="Cari di Sayuria..."
            left={<TextInput.Icon name="magnify" />}
            style={styles.searchBar}
          />
        </View>

        <View style={styles.selectorContainer}>
          <View style={styles.scheduleOption}>
            <Text style={styles.scheduleText}>Hari ini</Text>
            <Text style={styles.closedText}>Tutup</Text>
          </View>
          <View style={styles.scheduleOption}>
            <Text style={styles.scheduleText}>
              Cari sayur yang kamu mau tersedia
            </Text>
            <Text style={styles.scheduleSubText}>6,000+ Produk</Text>
          </View>
        </View>

        <Card style={styles.bannerCard}>
          <Card.Cover
            source={{
              uri: "https://media.suara.com/pictures/480x260/2018/09/05/44800-sayuran.jpg",
            }}
          />
          <Card.Content>
            <Text style={styles.bannerText}>Selamat Datang Sayuria!</Text>
            <Text style={styles.bannerSubText}>
              Yuk, pakai 3 voucher buat 3 transaksi pertama kamu!
            </Text>
          </Card.Content>
        </Card>

        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Kategori</Text>
          <View style={styles.categoryRow}>
            <CategoryItem label="Sayur" icon="leaf" />
            <CategoryItem label="Buah" icon="apple" />
            <CategoryItem label="Ikan" icon="fish" />
            <CategoryItem label="Siap Saji" icon="food" />
          </View>
        </View>

        <View style={styles.grid}>
          {catalogItems.map((item, index) => (
            <Card key={index} style={styles.card}>
              <Card.Cover source={{ uri: item.image }} style={styles.image} />
              <Card.Content>
                <Title style={styles.title}>{item.title}</Title>
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const CategoryItem = ({ label, icon }) => (
  <View style={styles.categoryItem}>
    <Avatar.Icon size={48} icon={icon} />
    <Text style={styles.categoryLabel}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: 20,
  },
  card: {
    width: "48%",
    marginBottom: 20,
    elevation: 4,
  },
  image: {
    height: 150,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 10,
    fontSize: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  searchContainer: {
    padding: 10,
  },
  searchBar: {
    backgroundColor: "#fff",
    borderRadius: 20,
  },
  selectorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  scheduleOption: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  scheduleText: {
    fontWeight: "bold",
  },
  closedText: {
    color: "red",
  },
  scheduleSubText: {
    color: "green",
  },
  bannerCard: {
    margin: 10,
  },
  bannerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bannerSubText: {
    fontSize: 14,
    marginTop: 5,
  },
  categoryContainer: {
    padding: 10,
  },
  categoryTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  categoryItem: {
    alignItems: "center",
  },
  categoryLabel: {
    marginTop: 5,
    fontSize: 12,
  },
});
