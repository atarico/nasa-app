import React, { FC } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { PostImage as PostImageTypes } from "../../types";

export const PostImage: FC<PostImageTypes> = ({ title, date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      {/* <View>
        <Button title="View" color={"rgb(45, 100, 180)"} />
      </View> */}
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[
            styles.square,
            {
              shadowOffset: {
                width: 10,
                height: 10,
              },
              shadowOpacity: 3,
              shadowRadius: 4,
            },
          ]}
        >
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
