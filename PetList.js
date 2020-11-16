import React from "react";
import { FlatList, View, StyleSheet, TextInput, Image } from "react-native";
import Pet from "./components/Pet";
import { Octicons } from "@expo/vector-icons";

export default function PetList() {
  const pets = [
    {
      name: "Pastel",
      type: "Cat",
      age: "2 years old",
      location: "93 Shoreline Drive",
      photo: require("./assets/pastel.jpg"),
    },
    {
      name: "Raja",
      type: "Dog",
      age: "13 years old",
      location: "84 Seacrest Boulevard",
      photo: require("./assets/raja.jpg"),
    },
    {
      name: "Jhony",
      type: "Dog",
      age: "2 years old",
      location: "Shell Lake Avenue on 23rd Street",
      photo: require("./assets/jhony.jpg"),
    },
    {
      name: "Mimu",
      type: "Cat",
      age: "4 years old",
      location: "64th Street",
      photo: require("./assets/mimu.jpg"),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.searchArea}>
        {/* <Octicons name="search" size={21} color="#4e15ab" />
        <Image
          source={require("./assets/icons/search.png")}
          style={styles.iconStyle}
        /> */}
        <TextInput
          // onChangeText={(search) => this.setState({search})}
          placeholder="Search here"
          style={styles.searchBar}
        />
      </View>

      <FlatList
        data={pets}
        renderItem={({ item }) => <Pet {...item} />}
        keyExtractor={(name, type, age) => name + type + age}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingTop: 45,
    paddingLeft: 30,
    backgroundColor: "#e6ebe6",
  },

  searchArea: {
    flexDirection: "row",
    //   flex: 1
  },

//   iconStyle: {
//     paddingTop: 10,
//     margin: 5,
//     height: 25,
//     width: 25,
//     resizeMode: 'stretch',
//     alignItems: 'center',

//     position: "absolute",
//   },

  searchBar: {
    flex: 1,
    fontSize: 18,
    paddingLeft: 10,
    marginVertical: 30,
    width: "95%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 15,
  },
});
