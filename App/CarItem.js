import React from "react";

import { Text, View, Image } from "react-native";

export default function FlightItem({ item }) {
  return (
    <View
      style={{
        borderColor: "white",
        borderWidth: 1,
        borderRadius: "10px",
        margin: 10,
        backgroundColor: "white",
        shadowColor: "#000",
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        marginBottom: 40
      }}
    >
      <Image
        source={{
          uri: item.carPhoto
        }}
        style={{ width: 300, height: 130 }}
      ></Image>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 10
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.carMake}</Text>
        <Image
          source={{
            uri: item.companyLogo
          }}
          style={{ width: 50, height: 10 }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 20
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <Text style={{ fontSize: 12, marginRight: 5, color: "#656565" }}>
            {item.carType}
          </Text>
          <Text style={{ fontSize: 12, color: "#656565" }}>
            {item.numSeats}
          </Text>
        </View>
        <Text style={{ fontSize: 12, color: "#656565" }}>{item.deal}</Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: 10,
          marginRight: 10,
          marginBottom: 10
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <Text style={{ fontSize: 12, color: "#656565" }}>Pick Up: </Text>
          <Text style={{ fontSize: 13 }}>{item.pickUpLocation}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end"
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{item.price}</Text>
          <Text style={{ fontSize: 10, color: "#656565" }}> /night</Text>
        </View>
      </View>
    </View>
  );
}
