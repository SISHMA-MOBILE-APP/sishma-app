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
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../utils/colors";
import RouteButton from "../../components/CustomButton";
import InputText from "../../components/CustomTextField";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export default function Option({ navigation }) {
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
      <Text style={styles.greet}>{"SISHMA"}</Text>
      <View style={styles.buttonContainer}>
        <RouteButton
          text="LOGIN"
          icon={<AntDesign name="right" size={30} color="white" />}
          onPress={() => navigation.navigate("Login")}
        />

        <RouteButton
          text="Register"
          icon={<AntDesign name="right" size={30} color="white" />}
          onPress={() => navigation.navigate("RoutePage")}
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
  buttonContainer: {
    flex: 1,

    paddingTop: hp("55%"),
  },
});
