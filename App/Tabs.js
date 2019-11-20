import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import FlightTab from "./FlightTab";
import HotelTab from "./HotelTab";
import CarTab from "./CarTab";

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
        details={hotelDetails}
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
