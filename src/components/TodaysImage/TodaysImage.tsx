import React, { FC } from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";

import { PostImage } from "../../types";

export const TodaysImageView: FC<PostImage> = ({ date, title, url }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: url }} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>

      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btn}>View</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    borderRadius: 32,
    padding: 16,
    marginHorizontal: 24,
  },
  imageContainer: {},
  image: {
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderRadius: 32,
    borderColor: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },

  date: {
    color: "#fff",
    fontSize: 16,
  },

  btnContainer: {
    alignItems: "flex-end",
    padding: 16,
  },

  btn: {
    fontSize: 16,
    color: "#fff",
  },
});
