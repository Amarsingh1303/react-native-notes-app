import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>MyTodos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: "#74b9ff",
  },
  headerText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
