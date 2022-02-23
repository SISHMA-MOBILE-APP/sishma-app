import React,{useState} from 'react';
import {StyleSheet, TextInput,View} from 'react-native';

export default function InputText(props) {
  const [text, onChangeText] = React.useState(null);
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputText}
        placeholder={props.placeholderText}
        placeholderTextColor="#003f5c"
        secureTextEntry={props.visibility}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    
    inputView:{
        alignItems: "center",
        justifyContent: "center",
        width:"100%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        padding:20
      },
      inputText: {
      alignItems: "center",
      justifyContent: "center",
      height:50,
      color:"white"
    },
  });