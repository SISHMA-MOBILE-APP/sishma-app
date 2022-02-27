import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/CustomButton";
import { NavigationContainer } from "@react-navigation/native";

const Hello = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "teal",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text>Logged IN succesfully</Text>
      <View style={{ justifyContent: "center", width: 100, margin: 10 }}>
        <Button
          text="close"
          onPress={() => navigation.navigate("RoutePage")}
        ></Button>
      </View>
    </View>
  );
};

export default Hello;
