import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  FlatList,
  Image
} from "react-native";

export default function CarTab({ tabClicked, setTabClicked }) {
  const DATA = [
    {
      id: "1",
      carPhoto:
        "https://images.netdirector.co.uk/gforces-auto/image/upload/w_392,h_261,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/ae4fc0528b1100d2debd319523c920b0/kia_new_cars_rio_2017_hero_kv_w.jpg.jpg",
      carMake: "Kia Rio",
      companyLogo:
        "https://www.enterprise.ca/content/dam/ecom/logo-enterprise.png",
      carType: "Economy",
      numSeats: "4 Seats",
      deal: "Great Deal",
      rating: "8.7/10",
      pickUpLocation: "In Terminal",
      price: "C$44"
    },
    {
      id: "2",
      carPhoto:
        "https://www.kia.ca/pages/pricing/content/shoppingtools/buildandprice/Rio/shoppingtools-buildandprice-Rio-SnowWhitePearl-RO_46J.jpg",
      carMake: "Kia Rio",
      companyLogo:
        "https://www.enterprise.ca/content/dam/ecom/logo-enterprise.png",
      carType: "Economy",
      numSeats: "4 Seats",
      deal: "Great Deal",
      rating: "8.7/10",
      pickUpLocation: "In Terminal",
      price: "C$44"
    },
    {
      id: "3",
      carPhoto:
        "https://www.kia.ca/pages/pricing/content/shoppingtools/buildandprice/Rio/shoppingtools-buildandprice-Rio-SnowWhitePearl-RO_46J.jpg",
      carMake: "Kia Rio",
      companyLogo:
        "https://www.enterprise.ca/content/dam/ecom/logo-enterprise.png",
      carType: "Economy",
      numSeats: "4 Seats",
      deal: "Great Deal",
      rating: "8.7/10",
      pickUpLocation: "In Terminal",
      price: "C$44"
    }
  ];
  function Item({ item }) {
    return (
      <View style={{ width: 300, height: "50%", margin: 20 }}>
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
            marginTop: 10
          }}
        >
          <Text>{item.carMake}</Text>
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
            justifyContent: "space-between"
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <Text>{item.carType}</Text>
            <Text>{item.numSeats}</Text>
          </View>
          <Text>{item.deal}</Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Text>{item.pickUpLocation}</Text>
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
        <Text>Car</Text>
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
