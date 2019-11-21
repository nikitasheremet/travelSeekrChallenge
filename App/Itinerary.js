import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  Button
} from "react-native";

export default function Itinerary() {
  const [bookmarkClicked, setBookmarkClicked] = useState(true);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        paddingTop: 100,
        alignItems: "flex-start"
      }}
    >
      <Image
        source={require("./assets/right-arrow-white.png")}
        style={{ width: 25, height: 25, transform: [{ rotate: "180deg" }] }}
      />
      <View
        style={{ display: "flex", flexDirection: "column", marginLeft: 20 }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "white",
            marginBottom: 20
          }}
        >
          Calgary Tech Conference
        </Text>
        <View
          style={{ display: "flex", flexDirection: "row", marginBottom: 20 }}
        >
          <Text
            style={{
              color: "white",
              marginRight: 10,
              fontWeight: "bold"
            }}
          >
            July 25 • 8:30
          </Text>
          <Image
            source={require("./assets/pencil-edit-button-white.png")}
            style={{ width: 15, height: 15 }}
          />
          <Text
            style={{
              color: "white",
              marginLeft: 10,
              fontWeight: "bold"
            }}
          >
            July 29 • 8:30
          </Text>
        </View>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Text
            style={{
              color: "white",
              marginRight: 10,
              fontWeight: "bold"
            }}
          >
            Toronto, ON
          </Text>
          <Image
            source={require("./assets/transfer-white.png")}
            style={{ width: 15, height: 15 }}
          />
          <Text
            style={{
              color: "white",
              marginLeft: 10,
              fontWeight: "bold"
            }}
          >
            Calgary, AB
          </Text>
        </View>
      </View>
      <TouchableWithoutFeedback
        onPress={() => setBookmarkClicked(!bookmarkClicked)}
      >
        <View
          style={{
            backgroundColor: bookmarkClicked ? "#FFB732" : "white",
            padding: 10,
            borderColor: bookmarkClicked ? "#FFB732" : "white",
            borderRadius: 30,
            marginLeft: 30
          }}
        >
          <Image
            source={
              bookmarkClicked
                ? require("./assets/bookmark-white.png")
                : require("./assets/bookmark-black.png")
            }
            style={{
              width: 20,
              height: 20
            }}
          />
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}
