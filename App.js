import React from "react";
import { StyleSheet, View } from "react-native";
import Tabs from "./App/Tabs";
import Itinerary from "./App/Itinerary";

export default function App() {
  return (
    <View style={styles.container}>
      <Itinerary />
      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#66C1C1",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  }
});
