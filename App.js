import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Text } from "react-native";
import PetList from "./PetList";
import SignUp from "./SignUp";
import Pet from "./components/Pet";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <SignUp /> */}
      <PetList />
      {/* <Pet /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
