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
import HotelItem from "./HotelItem";

export default function HotetlTab({ tabClicked, setTabClicked }) {
  const [modalVisible, setModalVisible] = useState(false);
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
              Hotel
            </Text>
            <Text style={{ fontSize: 12, color: "#525252" }}>
              2 Nights, 1 Room
            </Text>
          </View>
          <View style={styles.tabHeaderRight}>
            <Text style={{ fontSize: 14, fontWeight: "bold", marginRight: 10 }}>
              C$ 326
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
            <Text style={styles.filtersText}>Name</Text>
            <Text style={styles.filtersText}>Type</Text>
            <Text style={styles.filtersText}>Price</Text>
            <Text style={styles.filtersText}>Location</Text>
          </View>
          <View style={{ marginTop: 10 }}>
            <FlatList
              horizontal
              data={DATA}
              renderItem={({ item }) => <HotelItem item={item} />}
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
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    zIndex: 2
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
