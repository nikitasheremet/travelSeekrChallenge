import React from "react";

import { Text, View, ImageBackground } from "react-native";

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
      <ImageBackground
        source={{
          uri: item.hotelPicture
        }}
        style={{
          width: 300,
          height: 100
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignSelf: "flex-end",
            paddingTop: 80,
            paddingLeft: 10
          }}
        >
          <Text style={{ color: "white", fontWeight: "bold", marginRight: 8 }}>
            {item.rating}
          </Text>
          <Text style={{ color: "white", fontWeight: "bold", marginRight: 8 }}>
            {item.ratingText}
          </Text>
          <Text style={{ color: "white", fontWeight: "bold", marginRight: 8 }}>
            {item.ratingDesc}
          </Text>
        </View>
      </ImageBackground>

      <View style={{ display: "flex", flexDirection: "column" }}>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 18,
            marginTop: 10,
            marginBottom: 10,
            paddingLeft: 10
          }}
        >
          {item.hotelName}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginLeft: 10
          }}
        >
          <Text style={{ fontSize: 12, marginRight: 10, color: "#656565" }}>
            {item.partnerInfo}
          </Text>
          <Text style={{ fontSize: 12, color: "#656565" }}>{item.deal}</Text>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: 30,
          marginLeft: 10,
          marginBottom: 18,
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Text style={{ fontSize: 10, marginRight: 10 }}>{item.distance}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-end"
          }}
        >
          <Text style={{ fontWeight: "bold" }}>{item.price}</Text>
          <Text style={{ marginRight: 10, fontSize: 10 }}> /night</Text>
        </View>
      </View>
    </View>
  );
}
