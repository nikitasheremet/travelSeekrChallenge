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
  return (
    <View style={styles.container}>
      <FlightTab
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
      />
      <HotelTab
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
      />
      <CarTab
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
