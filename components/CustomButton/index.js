import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Button(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.inputText}>{props.btnName}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width:"100%",
    height:"100%"
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#007500",
    padding: 10,
    width:"100%",
    height:"9%",
    borderRadius:40,
    borderWidth:6,
    borderColor:'#AFE1AF',
  },
  inputText: {
    color: 'white',
    fontSize:24,
    fontWeight:"bold",
    textTransform:"uppercase"
  },
});
