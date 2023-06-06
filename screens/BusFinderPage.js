import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  Entypo,
  Icon,
  FontAwesome,
} from "@expo/vector-icons";

const BusFinderPage = ({ navigation }) => {
  const route = useRoute();
  const title = route.params?.title;
  const destinations = route.params?.destinations;

  const lapsList = destinations.map((data) => {
    return <Text>{data.city}</Text>;
  });

  return (
    <View>
      <View style={{ padding: 8 }}>
        <Text style={{ fontSize: 28, fontWeight: "bold" }}>Select your destination: </Text>
      </View>

      <View style={styles.cityBound}>
        <FlatList
          data={destinations}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.listItem}
              onPress={() =>
                navigation.navigate("BookingPage", { Amount: item.price, destination:item.city,title })
              }
            >
              <Text
                style={{ color: "#22223b", fontSize: 18, fontWeight: "bold" }}
              >
                {item.city}
              </Text>
              <Text
                style={{ color: "#22223b", fontSize: 18, fontWeight: "bold" }}
              >
                {item.price}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    height: 80, // Specify the height of your custom header
  },
  cityBound: {
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
});

export default BusFinderPage;
