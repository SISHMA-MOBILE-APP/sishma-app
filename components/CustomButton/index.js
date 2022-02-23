import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

export default function Button(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
            <LinearGradient
            style={styles.button}
                    colors={['#41a16d', '#107c42']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }} >
                <Text style={styles.inputText}>{props.text}</Text>
                <AntDesign name="right" size={30} color="white"/>
            </LinearGradient>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
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
    color: "white",
    marginLeft: "10%",
  },
});
