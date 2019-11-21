import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  FlatList,
  Image,
  ImageBackground,
  Modal
} from "react-native";

import CarItem from "./CarItem";
export default function CarTab({ tabClicked, setTabClicked }) {
  const [modalVisible, setModalVisible] = useState(false);
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

  return (
    <View style={styles.tab}>
      <TouchableWithoutFeedback onPress={() => setTabClicked()}>
        <View style={styles.tabHeaderLayout}>
          <View style={styles.tabHeaderLeft}>
            <Image
              source={require("./assets/bed.png")}
              style={{ width: 15, height: 15, marginRight: 15 }}
            />
            <Text style={{ fontSize: 16, fontWeight: "bold", marginRight: 15 }}>
              Car
            </Text>
            <Text style={{ fontSize: 12, color: "#525252" }}>2 Days</Text>
          </View>
          <View style={styles.tabHeaderRight}>
            <Text style={{ fontSize: 14, fontWeight: "bold", marginRight: 10 }}>
              C$ 129
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
            <Text style={styles.filtersText}>Supplier</Text>
            <Text style={styles.filtersText}>Price</Text>
            <Text style={styles.filtersText}>Type</Text>
            <Text style={styles.filtersText}>Pickup</Text>
            <Text style={styles.filtersText}>Drop Off</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <FlatList
              horizontal
              data={DATA}
              renderItem={({ item }) => <CarItem item={item} />}
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
    zIndex: 3
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
  tabBody: { width: "100%", paddingLeft: 20, marginTop: 10, height: 400 },
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
