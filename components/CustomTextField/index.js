import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function InputText(props) {
  const [text, setText] = useState(null);
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder={props.placeholderText}
        placeholderTextColor="#a0d0b6"
        secureTextEntry={props.visibility}
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignSelf: "center",
    borderWidth: 5,
    elevation: 1,
    borderRadius: 35,
    borderColor: "#a0d0b6",
    justifyContent: "space-around",
    backgroundColor: "#e7f3ed",
    alignItems: "center",
    marginBottom: 6,
  },
  inputText: {
    fontSize: 18,
    alignSelf: "center",
    color: "#41a16d",
  },
});
