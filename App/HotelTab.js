import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList,
  Image,
  ImageBackground
} from "react-native";

export default function FlightTab({ tabClicked, setTabClicked }) {
  const DATA = [
    {
      id: "1",
      rating: "9.5",
      ratingText: "Superb",
      ratingDesc: "4 Star Hotel",
      hotelPicture:
        "https://cdn.images.express.co.uk/img/dynamic/25/590x/cheap-holidays-2019-five-star-hotel-luxury-hotels-deals-1097745.jpg?r=1552085337339",
      hotelName: "Alt Hotel Calgary East Village",
      partnerInfo: "Event Partner",
      deal: "Exclusive Deal",
      distance: "5 minute walk to destination",
      price: "C$163"
    },
    {
      id: "2",
      rating: "9.5",
      ratingText: "Superb",
      ratingDesc: "4 Star Hotel",
      hotelPicture:
        "https://cdn.images.express.co.uk/img/dynamic/25/590x/cheap-holidays-2019-five-star-hotel-luxury-hotels-deals-1097745.jpg?r=1552085337339",
      hotelName: "Alt Hotel Calgary East Village",
      partnerInfo: "Event Partner",
      deal: "Exclusive Deal",
      distance: "5 minute walk to destination",
      price: "C$163"
    },
    {
      id: "3",
      rating: "9.5",
      ratingText: "Superb",
      ratingDesc: "4 Star Hotel",
      hotelPicture:
        "https://cdn.images.express.co.uk/img/dynamic/25/590x/cheap-holidays-2019-five-star-hotel-luxury-hotels-deals-1097745.jpg?r=1552085337339",
      hotelName: "Alt Hotel Calgary East Village",
      partnerInfo: "Event Partner",
      deal: "Exclusive Deal",
      distance: "5 minute walk to destination",
      price: "C$163"
    }
  ];
  function Item({ item }) {
    let image = item.hotelPicture;
    return (
      <View style={{ width: 300, height: "50%", margin: 20 }}>
        <ImageBackground
          source={{
            uri: item.hotelPicture
          }}
          style={{ width: 300, height: 100 }}
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
            <Text
              style={{ color: "white", fontWeight: "bold", marginRight: 8 }}
            >
              {item.rating}
            </Text>
            <Text
              style={{ color: "white", fontWeight: "bold", marginRight: 8 }}
            >
              {item.ratingText}
            </Text>
            <Text
              style={{ color: "white", fontWeight: "bold", marginRight: 8 }}
            >
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
              marginBottom: 10
            }}
          >
            {item.hotelName}
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text>{item.partnerInfo}</Text>
            <Text>{item.deal}</Text>
          </View>
        </View>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 30 }}>
          <Text>{item.distance}</Text>
          <Text>{item.price}</Text>
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
        <Text>Hotel</Text>
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
