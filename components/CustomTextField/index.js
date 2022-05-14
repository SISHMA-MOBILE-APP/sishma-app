import React, { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function InputText(props) {
  return (
    <View style={[styles.inputView, props.style]}>
      <TextInput 
        value= {props.value}
        style={styles.inputText}
        placeholder={props.placeholderText}
        placeholderTextColor="#808080"
        secureTextEntry={props.visibility}
        onChangeText={props.onChangeText}
        multiline={props.multiline}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    width: "100%",
    height: hp('6%'),
    flexDirection: "row",
    alignSelf: "center",
    elevation:0,
    borderRadius: 5,
    borderBottomWidth:1,
    borderBottomColor:'rgba(54, 69, 79, 0.5)' ,
   
    alignItems: "center",
    marginBottom: 6,
    backgroundColor:"transparent",
    padding:hp('1%')
  },
  inputText: {
    fontSize: hp('2%'),
    alignSelf: "center",
    color: "#36454F",
    width:'100%',
    height:'100%',
    // opacity:0.8,
    letterSpacing:1
  },
});
