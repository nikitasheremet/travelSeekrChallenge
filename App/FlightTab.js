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
  function Item({ item }) {
    return (
      <View style={{ width: 300, height: 350 }}>
        <View
          style={{
            borderColor: "white",
            borderWidth: 1,
            borderRadius: "10px",
            margin: 10,
            padding: 10,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 8
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottomColor: "lightgrey",
              borderBottomWidth: 1,
              alignItems: "center",
              paddingBottom: 10
            }}
          >
            <Text style={{ marginRight: 5, fontSize: 12 }}>
              {item.departing.direction}
            </Text>
            <Text>•</Text>
            <Text style={{ marginLeft: 5, fontSize: 12 }}>
              {item.departing.date}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
              marginBottom: 15
            }}
          >
            <Image
              source={{ uri: item.departing.airlineIcon }}
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
                marginLeft: 5
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: 15
              }}
            >
              <Text style={{ fontWeight: "bold" }}>
                {item.departing.departureTime}
              </Text>
              <Text>{item.departing.departureAirportCode}</Text>
            </View>
            <Image
              source={require("./right-arrow.png")}
              style={{ width: 20, height: 20 }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 20
              }}
            >
              <Text style={{ fontWeight: "bold" }}>
                {item.departing.arrivalTime}
              </Text>
              <Text>{item.departing.arrivalAirportCode}</Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Text style={{ fontSize: 10, marginRight: 3 }}>
                {item.departing.numStops}
              </Text>
              <Text style={{ marginRight: 3 }}>•</Text>
              <Text style={{ fontSize: 10, marginRight: 3 }}>
                {item.departing.duration}
              </Text>
              <Text style={{ marginRight: 3 }}>•</Text>
              <Text style={{ fontSize: 10 }}>{item.departing.airlineName}</Text>
            </View>
            <Text style={{ fontWeight: "bold" }}>{item.departing.price}</Text>
          </View>
        </View>
        <View
          style={{
            borderColor: "white",
            borderWidth: 1,
            borderRadius: "10px",
            margin: 10,
            padding: 10,
            backgroundColor: "white",
            shadowColor: "#000",
            shadowOffset: { width: 2, height: 2 },
            shadowOpacity: 0.2,
            shadowRadius: 8
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              borderBottomColor: "lightgrey",
              borderBottomWidth: 1,
              alignItems: "center",
              paddingBottom: 10
            }}
          >
            <Text style={{ marginRight: 5, fontSize: 12 }}>
              {item.returning.direction}
            </Text>
            <Text>•</Text>
            <Text style={{ marginLeft: 5, fontSize: 12 }}>
              {item.returning.date}
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: 15,
              marginBottom: 15
            }}
          >
            <Image
              source={{ uri: item.returning.airlineIcon }}
              style={{
                width: 30,
                height: 30,
                marginRight: 10,
                marginLeft: 5
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: 15
              }}
            >
              <Text style={{ fontWeight: "bold" }}>
                {item.returning.departureTime}
              </Text>
              <Text>{item.returning.departureAirportCode}</Text>
            </View>
            <Image
              source={require("./right-arrow.png")}
              style={{ width: 20, height: 20 }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 20
              }}
            >
              <Text style={{ fontWeight: "bold" }}>
                {item.returning.arrivalTime}
              </Text>
              <Text>{item.returning.arrivalAirportCode}</Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center"
              }}
            >
              <Text style={{ fontSize: 10, marginRight: 3 }}>
                {item.returning.numStops}
              </Text>
              <Text style={{ marginRight: 3 }}>•</Text>
              <Text style={{ fontSize: 10, marginRight: 3 }}>
                {item.returning.duration}
              </Text>
              <Text style={{ marginRight: 3 }}>•</Text>
              <Text style={{ fontSize: 10 }}>{item.returning.airlineName}</Text>
            </View>
            <Text style={{ fontWeight: "bold" }}>{item.returning.price}</Text>
          </View>
        </View>
      </View>
    );
  }
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
            justifyContent: "space-between"
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
            <Image
              source={require("./three-dots.png")}
              style={{ width: 15, height: 15, backgroundColor: "#F1F1F1" }}
            />
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
            marginTop: 20
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
              renderItem={({ item }) => <Item item={item} />}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
