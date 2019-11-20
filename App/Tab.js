import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default function App({
  setTabClicked,
  tabClicked,
  details: { title, description }
}) {
  return (
    <View>
      <TouchableHighlight onPress={() => setTabClicked()}>
        <Text>{title}</Text>
      </TouchableHighlight>
      <View
        style={{
          display: tabClicked ? "flex" : "none",
          height: "60%",
          flexDirection: "column"
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "70%"
          }}
        >
          <Text>Departing</Text>
          <Text>24 July</Text>
          <Text>Shortest</Text>
        </View>
        <Text>{description}</Text>
      </View>
    </View>
  );
}
