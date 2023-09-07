import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import { Header } from "../../components/Header";
import { TodaysImageView } from "../../components/TodaysImage";
import { PostImage } from "../../types";

import fetchAPI from "../../utils/fetch";

export const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>([]);

  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todaysImageResponse = await fetchAPI();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error(error);
        setTodaysImage([]);
      }
    };

    loadTodayImage().catch(null);
  }, []);

  console.log(todaysImage);

  return (
    <View style={styles.container}>
      <Header />
      {todaysImage.map((item: React.JSX.IntrinsicAttributes & PostImage, index: React.Key) => (
        <TodaysImageView key={index} {...item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
