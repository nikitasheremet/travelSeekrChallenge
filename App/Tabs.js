import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import Tab from "./Tab";

export default function App() {
  const [tabClicked, setTabClicked] = useState({
    flight: false,
    hotel: false,
    car: false
  });
  let flightDetails = { title: "Flight", description: "Flight Details" };
  let hotelDetails = { title: "Hotel", description: "Hotel Details" };
  let carDetails = { title: "Car", description: "Car Details" };
  return (
    <View style={styles.container}>
      <Tab
        key="flight"
        setTabClicked={() =>
          setTabClicked({
            ...tabClicked,
            flight: !tabClicked.flight,
            hotel: false,
            car: false
          })
        }
        tabClicked={tabClicked.flight}
        details={flightDetails}
      />
      <Tab
        key="hotel"
        setTabClicked={() =>
          setTabClicked({
            ...tabClicked,
            hotel: !tabClicked.hotel,
            flight: false,
            car: false
          })
        }
        tabClicked={tabClicked.hotel}
        details={hotelDetails}
      />
      <Tab
        key="car"
        setTabClicked={() =>
          setTabClicked({
            ...tabClicked,
            car: !tabClicked.car,
            hotel: false,
            flight: false
          })
        }
        tabClicked={tabClicked.car}
        details={carDetails}
      />
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
