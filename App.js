import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default function App() {
  const [tabClicked, setTabClicked] = useState({
    flight: false,
    hotel: false,
    car: false
  });
  return (
    <View style={styles.container}>
      <View>
        <TouchableHighlight
          onPress={() =>
            setTabClicked({ ...tabClicked, flight: !tabClicked.flight })
          }
        >
          <Text>Flight</Text>
        </TouchableHighlight>
        <View
          style={{
            display: tabClicked.flight ? "flex" : "none",
            height: "60%"
          }}
        >
          <Text>Flight Details</Text>
        </View>
      </View>
      <View>
        <TouchableHighlight
          onPress={() =>
            setTabClicked({ ...tabClicked, hotel: !tabClicked.hotel })
          }
        >
          <Text>Hotel</Text>
        </TouchableHighlight>
        <View
          style={{ display: tabClicked.hotel ? "flex" : "none", height: "60%" }}
        >
          <Text>Hotel Details</Text>
        </View>
      </View>
      <View>
        <TouchableHighlight
          onPress={() => setTabClicked({ ...tabClicked, car: !tabClicked.car })}
        >
          <Text>Car</Text>
        </TouchableHighlight>
        <View
          style={{ display: tabClicked.car ? "flex" : "none", height: "60%" }}
        >
          <Text>Car Details</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 25
  }
});
