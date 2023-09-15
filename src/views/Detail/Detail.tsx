import React from "react";
import { View, Text, StyleSheet, Platform, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Header } from "../../components/Header";

import { RootStackParams } from "../../types";

export const Detail = () => {
  const {
    params: { title, url, explanation, date },
  } = useRoute<NativeStackScreenProps<RootStackParams, "Detail">["route"]>();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{ uri: url }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(7, 56, 170)",
    paddingHorizontal: 16,
    paddingTop: Platform.OS === "android" && 10,
  },
  content: {
    backgroundColor: "rgb(7, 112, 221)",
    borderRadius: 32,
    marginVertical: 20,
    padding: 24,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "50%",
    borderColor: "#fff",
    borderRadius: 32,
    borderWidth: 2,
    marginBottom: 16,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },
  explanationContainer: {
    marginVertical: 16,
  },
  explanation: {
    color: "#fff",
    fontSize: 18,
  },
});
