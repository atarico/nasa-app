import React, { FC } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { PostImage as PostImageTypes, RootStackParams } from "../../types";

type PostImageNavigationProps = NativeStackNavigationProp<RootStackParams, "Detail">;

export const PostImage: FC<PostImageTypes> = ({ title, date, url, explanation }) => {
  const { navigate } = useNavigation<PostImageNavigationProps>();

  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      {/* <View>
        <Button title="View" color={"rgb(45, 100, 180)"} />
      </View> */}
      <View>
        <TouchableOpacity style={styles.btnContainer} onPress={handleViewPress}>
          <Text style={styles.btnText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(45, 100, 180)",
    borderRadius: 20,
    marginBottom: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 6,
  },
  date: {
    color: "#fff",
    fontSize: 16,
    paddingVertical: 6,
  },

  btnContainer: {
    width: "100%",
    alignItems: "center",
    marginVertical: 16,
    padding: 8,
    backgroundColor: "rgb(45, 100, 210)",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  square: {
    shadowColor: "black",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    paddingVertical: 6,
  },
});
