import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform, SafeAreaView, TouchableOpacity } from "react-native";

import { Home } from "./src/views/Home/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Home />

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" && 50,
    backgroundColor: "rgb(7, 26, 123)",
  },
});
