import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList,
  Image
} from "react-native";

export default function FlightTab({ tabClicked, setTabClicked }) {
  const DATA = [
    {
      id: 1,
      departing: {
        direction: "Departing",
        date: "24 July",
        airlineIcon: "",
        departureTime: "20:00",
        departureAirportCode: "YYZ",
        arrivalTime: "22:12",
        arrivalAirportCode: "YYC",
        numStops: "1 Stop",
        duration: "4h 12m",
        airlineName: "Westjet",
        price: "C$163"
      },
      returning: {
        direction: "Returning",
        date: "29 July",
        airlineIcon: "",
        departureTime: "19:00",
        departureAirportCode: "YYC",
        arrivalTime: "21:12",
        arrivalAirportCode: "YYZ",
        numStops: "Non Stop",
        duration: "4h 12m",
        airlineName: "Westjet",
        price: "C$163"
      }
    },
    {
      id: 2,
      departing: {
        direction: "Departing",
        date: "24 July",
        airlineIcon: "",
        departureTime: "20:00",
        departureAirportCode: "YYZ",
        arrivalTime: "22:12",
        arrivalAirportCode: "YYC",
        numStops: "1 Stop",
        duration: "4h 12m",
        airlineName: "Westjet",
        price: "C$163"
      },
      returning: {
        direction: "Returning",
        date: "24 July",
        airlineIcon: "",
        departureTime: "20:00",
        departureAirportCode: "YYZ",
        arrivalTime: "22:12",
        arrivalAirportCode: "YYC",
        numStops: "1 Stop",
        duration: "4h 12m",
        airlineName: "Westjet",
        price: "C$163"
      }
    }
  ];
  function Item({ item }) {
    return (
      <View style={{ width: 300 }}>
        <View style={{ border: "1px solid black", margin: 20 }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text>{item.departing.direction}</Text>
            <Text>{item.departing.date}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image source={item.departing.airlineIcon} />
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text>{item.departing.departureTime}</Text>
              <Text>{item.departing.departureAirportCode}</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text>{item.departing.arrivalTime}</Text>
              <Text>{item.departing.arrivalAirportCode}</Text>
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text>{item.departing.numStops}</Text>
            <Text>{item.departing.duration}</Text>
            <Text>{item.departing.airlineName}</Text>
            <Text>{item.departing.price}</Text>
          </View>
        </View>
        <View style={{ border: "1px solid black", margin: 20 }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text>{item.returning.direction}</Text>
            <Text>{item.returning.date}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image source={item.returning.airlineIcon} />
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text>{item.returning.departureTime}</Text>
              <Text>{item.returning.departureAirportCode}</Text>
            </View>
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text>{item.returning.arrivalTime}</Text>
              <Text>{item.returning.arrivalAirportCode}</Text>
            </View>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text>{item.returning.numStops}</Text>
            <Text>{item.returning.duration}</Text>
            <Text>{item.returning.airlineName}</Text>
            <Text>{item.returning.price}</Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <View
      style={{
        width: "100%"
      }}
    >
      <TouchableHighlight onPress={() => setTabClicked()}>
        <Text>Flight</Text>
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
            width: "90%",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <FlatList
            horizontal
            data={DATA}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
}
