import { StatusBar } from "expo-status-bar";
import { StyleSheet, Platform, SafeAreaView, TouchableOpacity } from "react-native";

// import { Home } from "./src/views/Home/Home";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" && 50,
    backgroundColor: "rgb(7, 56, 170)",
  },
});
