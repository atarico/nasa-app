import React, { FC } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { PostImage as PostImagesTypes } from "../../types";
import { PostImage } from "../PostImage";

export const LastFiveDaysImages: FC<{ postImages?: PostImagesTypes[] }> = ({ postImages }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days Images</Text>
      <ScrollView style={styles.content}>
        {postImages?.map((postImages) => (
          <PostImage key={`post-image-${postImages.title}`} {...postImages} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 12,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 18,
  },
  content: {
    paddingHorizontal: 24,
  },
});
