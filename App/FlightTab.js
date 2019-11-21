import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList,
  Image,
  Modal
} from "react-native";

import FlightItem from "./FlightItem";

export default function FlightTab({ tabClicked, setTabClicked }) {
  const [modalVisible, setModalVisible] = useState(false);
  const DATA = [
    {
      id: "1",
      departing: {
        direction: "Departing",
        date: "24 July",
        airlineIcon:
          "https://pbs.twimg.com/profile_images/1145701560049004544/uJB7ZUgL_400x400.jpg",
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
        airlineIcon:
          "https://pbs.twimg.com/profile_images/1145701560049004544/uJB7ZUgL_400x400.jpg",
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
      id: "2",
      departing: {
        direction: "Departing",
        date: "24 July",
        airlineIcon:
          "https://pbs.twimg.com/profile_images/1145701560049004544/uJB7ZUgL_400x400.jpg",
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
        airlineIcon:
          "https://pbs.twimg.com/profile_images/1145701560049004544/uJB7ZUgL_400x400.jpg",
        departureTime: "20:00",
        departureAirportCode: "YYZ",
        arrivalTime: "22:12",
        arrivalAirportCode: "YYC",
        numStops: "1 Stop",
        duration: "4h 12m",
        airlineName: "Westjet",
        price: "C$163"
      }
    },
    {
      id: "3",
      departing: {
        direction: "Departing",
        date: "24 July",
        airlineIcon:
          "https://pbs.twimg.com/profile_images/1145701560049004544/uJB7ZUgL_400x400.jpg",
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
        airlineIcon:
          "https://pbs.twimg.com/profile_images/1145701560049004544/uJB7ZUgL_400x400.jpg",
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

  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "#F1F1F1",
        borderTopLeftRadius: "30px",
        borderBottomWidth: "none"
      }}
    >
      <TouchableHighlight onPress={() => setTabClicked()}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 30,
            alignItems: "center",
            marginTop: 20,
            justifyContent: "space-between",
            marginBottom: 15
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <Image
              source={require("./plane.png")}
              style={{ width: 15, height: 15, marginRight: 15 }}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold", marginRight: 15 }}>
              Flight
            </Text>
            <Text style={{ fontSize: 12, color: "#525252" }}>
              Return, 1 Person
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingRight: 15
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: "bold", marginRight: 10 }}>
              C$ 650
            </Text>
            <TouchableHighlight
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Image
                source={require("./three-dots.png")}
                style={{ width: 15, height: 15, backgroundColor: "#F1F1F1" }}
              />
            </TouchableHighlight>
          </View>
        </View>
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
            width: "100%",
            paddingLeft: 20,
            marginTop: 10
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginLeft: 10
            }}
          >
            <Text
              style={{
                borderWidth: 1,
                borderRadius: 15,
                borderColor: "#B9DEB9",
                padding: 5,
                backgroundColor: "#B9DEB9",
                overflow: "hidden",
                color: "#00AF95",
                marginRight: 20
              }}
            >
              Airlines
            </Text>
            <Text
              style={{
                borderWidth: 1,
                borderRadius: 15,
                borderColor: "#B9DEB9",
                padding: 5,
                backgroundColor: "#B9DEB9",
                overflow: "hidden",
                color: "#00AF95",
                marginRight: 20
              }}
            >
              Stops
            </Text>
            <Text
              style={{
                borderWidth: 1,
                borderRadius: 15,
                borderColor: "#B9DEB9",
                padding: 5,
                backgroundColor: "#B9DEB9",
                overflow: "hidden",
                color: "#00AF95",
                marginRight: 20
              }}
            >
              Time In
            </Text>
            <Text
              style={{
                borderWidth: 1,
                borderRadius: 15,
                borderColor: "#B9DEB9",
                padding: 5,
                backgroundColor: "#B9DEB9",
                overflow: "hidden",
                color: "#00AF95"
              }}
            >
              Time Out
            </Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <FlatList
              horizontal
              data={DATA}
              renderItem={({ item }) => <FlightItem item={item} />}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
      <Modal
        animationType="fade"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={{ padding: 50, display: "flex", alignItems: "flex-end" }}>
          <View>
            <TouchableHighlight onPress={() => setModalVisible(!modalVisible)}>
              <Text style={{ fontSize: 20 }}>X</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
}
