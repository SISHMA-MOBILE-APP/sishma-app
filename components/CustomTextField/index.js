import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default function InputText(props) {
  const [text, setText] = useState(null);
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder={props.placeholderText}
        placeholderTextColor="#808080"
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
    height: 60,
    flexDirection: "row",
    alignSelf: "center",
    elevation:0,
    borderRadius: 2,
    borderBottomWidth:1,
    borderBottomColor:'rgba(54, 69, 79, 0.5)' ,
    backgroundColor: "#d0e8db",
    alignItems: "center",
    marginBottom: 6,
  },
  inputText: {
    fontSize: 18,
    alignSelf: "center",
    color: "#36454F",
    width:'100%',
    height:'100%',
    opacity:0.8,
    letterSpacing:1
  },
});
