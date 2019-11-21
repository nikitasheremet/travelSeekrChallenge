import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import FlightTab from "./FlightTab";
import HotelTab from "./HotelTab";
import CarTab from "./CarTab";

export default function App() {
  const [tabClicked, setTabClicked] = useState({
    flight: true,
    hotel: false,
    car: false
  });

  const updateTab = (updateState, noUpdate1, noUpdate2) => {
    setTabClicked({
      ...tabClicked,
      [updateState]: !tabClicked[updateState],
      [noUpdate1]: false,
      [noUpdate2]: false
    });
  };
  return (
    <View style={styles.container}>
      <FlightTab
        key="flight"
        setTabClicked={() => updateTab("flight", "hotel", "car")}
        tabClicked={tabClicked.flight}
      />
      <HotelTab
        key="hotel"
        setTabClicked={() => updateTab("hotel", "flight", "car")}
        tabClicked={tabClicked.hotel}
      />
      <CarTab
        key="car"
        setTabClicked={() => updateTab("car", "hotel", "flight")}
        tabClicked={tabClicked.car}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#66C1C1",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 25,
    width: "100%"
  }
});
