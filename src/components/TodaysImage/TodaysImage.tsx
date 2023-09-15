import React, { FC } from "react";
import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { PostImage, RootStackParams } from "../../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, "Detail">;

export const TodaysImageView: FC<PostImage> = ({ date, title, url, explanation }) => {
  const { navigate } = useNavigation<PostImageNavigationProps>();

  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation });
  };

  return (
    <View style={styles.container}>
      <View>
        <Image source={{ uri: url }} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>

      <TouchableOpacity style={styles.btnContainer} onPress={handleViewPress}>
        <Text style={styles.btn}>View</Text>
      </TouchableOpacity>
      {/* <View style={styles.btnbtn}>
        <Button title="View" />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(7, 112, 221)",
    marginVertical: 16,
    borderRadius: 32,
    padding: 16,
    marginHorizontal: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

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
