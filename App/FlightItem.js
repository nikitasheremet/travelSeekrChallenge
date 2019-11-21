import React from "react";

import { StyleSheet, Text, View, Image } from "react-native";

export default function FlightItem({ item }) {
  return (
    <View style={{ width: 300 }}>
      {Object.values(item)
        .slice(1)
        .map((flightDirection, index) => {
          return (
            <View
              key={index}
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
                  {flightDirection.direction}
                </Text>
                <Text>•</Text>
                <Text style={{ marginLeft: 5, fontSize: 12 }}>
                  {flightDirection.date}
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
                  source={{ uri: flightDirection.airlineIcon }}
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
                    {flightDirection.departureTime}
                  </Text>
                  <Text>{flightDirection.departureAirportCode}</Text>
                </View>
                <Image
                  source={require("./assets/right-arrow.png")}
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
                    {flightDirection.arrivalTime}
                  </Text>
                  <Text>{flightDirection.arrivalAirportCode}</Text>
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
                    {flightDirection.numStops}
                  </Text>
                  <Text style={{ marginRight: 3 }}>•</Text>
                  <Text style={{ fontSize: 10, marginRight: 3 }}>
                    {flightDirection.duration}
                  </Text>
                  <Text style={{ marginRight: 3 }}>•</Text>
                  <Text style={{ fontSize: 10 }}>
                    {flightDirection.airlineName}
                  </Text>
                </View>
                <Text style={{ fontWeight: "bold" }}>
                  {flightDirection.price}
                </Text>
              </View>
            </View>
          );
        })}
    </View>
  );
}
