import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Tabs from "./App/Tabs";

export default function App() {
  const [tabClicked, setTabClicked] = useState({
    flight: false,
    hotel: false,
    car: false
  });
  return (
    <View style={styles.container}>
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
