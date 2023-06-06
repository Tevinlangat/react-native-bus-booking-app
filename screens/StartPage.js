import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialCommunityIcons,
  Entypo,
  Icon,
  FontAwesome,
} from "@expo/vector-icons";

import { cities_images } from "../models/data";
import ImageSlider from "../components/ImageSlider";
import { windowWidth } from "../utils/Dimensions";
import { AuthContext } from "../context/AuthContext";

import {
  Nairobi,
  Mombasa,
  Kisumu,
  Machakos,
  Nyeri,
  Kakamega,
  Nakuru,
  Eldoret,
  Kericho,
} from "../models/data";

const StartPage = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  const [city, setCity] = useState();

  return (
    <>
      <SafeAreaView style={styles.page}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#22223b" }}>
            BOOK NOW
          </Text>
          <TouchableOpacity onPress={logout}>
            <FontAwesome name="sign-out" size={32} color="#22223b" />
          </TouchableOpacity>
        </View>

        <View style={styles.searchView}>
          <FontAwesome
            name="search"
            size={20}
            color="#22223b"
            style={{ marginLeft: 8 }}
          />
          <Text style={{margin:8,fontSize: 15, fontWeight: "bold"}}
          >where are you from?</Text>
        </View>

        <View>
          {/* <ImageSlider/> */}
          <FlatList
            horizontal
            data={cities_images}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("BusFinderPage", {
                    destinations: item.destinations,
                    title: item.title,
                  })
                }
              >
                <Image source={item.image} style={styles.cardImage} />
                <Text style={styles.cardText}>{item.title}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.cityBound}>
          <FlatList
            data={cities_images}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.listItem}
                onPress={() =>
                  navigation.navigate("BusFinderPage", {
                    destinations: item.destinations,
                    title: item.title,
                  })
                }
              >
                <Text
                  style={{ color: "#22223b", fontSize: 18, fontWeight: "bold" }}
                >
                  {item.title}
                </Text>
                <FontAwesome
                  name="caret-square-o-right"
                  size={24}
                  color="#22223b"
                />
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default StartPage;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginHorizontal: 10,
    padding: 6,
    backgroundColor: "#fff",
  },
  searchView: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 6,
    marginVertical: 10,
    borderColor: "#c6c6c6",
    backgroundColor: "#dee2e6",
    height: 35,
  },
  cityBound: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 40,
    borderWidth: 3,
    borderColor: "#a4133c",
    borderRadius: 6,
  },
  listItem: {
    padding: 16,
    borderWidth: 1,
    margin: 5,
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#a53860",
  },
  cardText: {
    position: "absolute",
    bottom: 1,
    left: 1,
    color: "white",
    fontWeight: "bold",
    padding: 10,
    fontSize: 15,
  },
  cardImage: {
    height: 200,
    width: 300,
    borderRadius: 12,
    marginLeft: 2,
    position: "relative",
  },
});
