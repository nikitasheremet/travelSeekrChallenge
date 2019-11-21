import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
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
    <View style={styles.tab}>
      <TouchableWithoutFeedback onPress={() => setTabClicked()}>
        <View style={styles.tabHeaderLayout}>
          <View style={styles.tabHeaderLeft}>
            <Image
              source={require("./assets/plane.png")}
              style={{ width: 15, height: 15, marginRight: 15 }}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold", marginRight: 15 }}>
              Flight
            </Text>
            <Text style={{ fontSize: 12, color: "#525252" }}>
              Return, 1 Person
            </Text>
          </View>
          <View style={styles.tabHeaderRight}>
            <Text style={{ fontSize: 14, fontWeight: "bold", marginRight: 10 }}>
              C$ 650
            </Text>
            <TouchableWithoutFeedback
              onPress={() => {
                setModalVisible(true);
              }}
            >
              <Image
                source={require("./assets/three-dots.png")}
                style={{ width: 15, height: 15 }}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <View
        style={{
          display: tabClicked ? "flex" : "none",
          height: "65%",
          flexDirection: "column"
        }}
      >
        <View style={styles.tabBody}>
          <View style={styles.filters}>
            <Text style={styles.filtersText}>Airlines</Text>
            <Text style={styles.filtersText}>Stops</Text>
            <Text style={styles.filtersText}>Time In</Text>
            <Text style={styles.filtersText}>Time Out</Text>
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
            <TouchableWithoutFeedback
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{ fontSize: 20 }}>X</Text>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  tab: {
    width: "100%",
    backgroundColor: "#F1F1F1",
    borderTopLeftRadius: 30,
    zIndex: 1
  },
  tabHeaderLayout: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 30,
    alignItems: "center",
    paddingTop: 20,
    justifyContent: "space-between",
    paddingBottom: 15
  },
  tabHeaderLeft: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  tabHeaderRight: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 15
  },
  tabBody: { width: "100%", paddingLeft: 20, marginTop: 10, height: 450 },
  filters: { display: "flex", flexDirection: "row", marginLeft: 10 },
  filtersText: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: "#B9DEB9",
    padding: 5,
    backgroundColor: "#B9DEB9",
    overflow: "hidden",
    color: "#00AF95",
    marginRight: 20
  }
});
