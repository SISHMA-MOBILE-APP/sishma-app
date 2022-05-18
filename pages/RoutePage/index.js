import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../utils/colors";
import RouteButton from "../../components/CustomButton";
import InputText from "../../components/CustomTextField";
// Language Provider
import { Language } from "../../providers/languageProvider";
import { transcription } from "../../utils/lang";

export default function Welcome({navigation}) {
  const lang = useContext(Language);
  const [signInOptions, setSignOptions] = React.useState(false);
  return (
    <View style={styles.container}>
      <LinearGradient
        style={[
          styles.circle,
          { transform: [{ rotate: "0deg" }], top: -140, left: -160 },
        ]}
        colors={["#094525", colors.greenTint80]}
        start={{ x: 0.25, y: 0.75 }}
        end={{ x: 1, y: 1 }}
      />
      <LinearGradient
        style={[
          styles.circle,
          { transform: [{ rotate: "103deg" }], top: -145, left: 30 },
        ]}
        colors={["#1ddf76", "#128a49"]}
      />
      <LinearGradient
        style={[
          styles.circle,
          { transform: [{ rotate: "6.5deg" }], top: -60, left: -95 },
        ]}
        colors={["rgba(30,182,103,0.49)", "rgba(6,105,44, 0.8)"]}
        start={{ x: 0.25, y: 0.25 }}
        end={{ x: 1, y: 1 }}
      />
      <LinearGradient
        style={[
          styles.circle,
          { transform: [{ rotate: "123deg" }], top: -240, left: -40 },
        ]}
        colors={["#128a49", "#1ddf76"]}
        start={{ x: 0.75, y: 0.25 }}
        end={{ x: 0.75, y: 0.8 }}
      />

      <View style={styles.logo}>
        <View style={{ flexDirection: "row" }}>
          <View style={[styles.dots, { marginRight: 5, marginBottom: 5 }]} />
          <View style={styles.dots} />
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={[styles.dots, { marginRight: 5 }]} />
          <View style={styles.dots} />
        </View>
      </View>
      <Text style={styles.greet}>{transcription[lang.language]["sishma"]}</Text>
      <View style={styles.buttonContainer}>
        <RouteButton onPress={() => navigation.navigate('FarmerReg')}
          text={transcription[lang.language]["farmerRegistration"]}
          style={{borderWidth: 5, height: 70, marginBottom: 10}}
          icon={<AntDesign name="right" size={30} color="white" />}
        />
        <RouteButton  onPress={() => navigation.navigate('AdminReg')}
          text={transcription[lang.language]["adminRegistration"]}
          style={{borderWidth: 5, height: 70, marginBottom: 10}}
          icon={<AntDesign name="right" size={30} color="white" />}
        />
        <RouteButton onPress={() => navigation.navigate('OfficerReg')}
          text={transcription[lang.language]["officerRegistration"]}
          style={{borderWidth: 5, height: 70, marginBottom: 10}}
          icon={<AntDesign name="right" size={30} color="white" />}
        />
        <RouteButton onPress={() => navigation.navigate('SoilSampleDetails')}
          text={transcription[lang.language]["soilSampDetails"]}
          style={{borderWidth: 5, height: 70, marginBottom: 10}}
          icon={<AntDesign name="right" size={30} color="white" />}
        />
        {/* <InputText placeholderText="Full name"/> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d0e8db",
  },
  circle: {
    position: "absolute",
    width: 469,
    height: 469,
    borderRadius: 469 / 2,
  },
  greet: {
    top: 240,
    alignSelf: "center",
    letterSpacing: 10,
    color: "white",
    fontSize: 30,
  },
  dots: {
    width: 23.82,
    height: 23.82,
    borderRadius: 23.82 / 2,
    backgroundColor: "white",
  },
  logo: {
    position: "absolute",
    top: 114,
    left: Dimensions.get("screen").width / 2 - 27,
    borderWidth: 1.17,
    borderColor: "white",
    padding: 4,
    borderRadius: 15,
    transform: [{ rotate: "45deg" }, { scale: 1.7 }],
  },
  centeredView: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    width: "80%",
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
  },
  textStyle: {
    width: "100%",
    textAlign: "center",
    fontSize: 24,
    marginTop: 10,
  },
  button: {
    width: "94%",
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
  routetext: {
    fontSize: 18,
    alignSelf: "center",
    color: "white",
    marginLeft: "10%",
  },
  buttonContainer: {
    top: 380,
    paddingTop: 30,
    height: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: "8%",
    alignItems: "center",
    elevation: 20,
  }
});
