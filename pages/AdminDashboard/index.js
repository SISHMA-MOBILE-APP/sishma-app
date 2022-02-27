import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../utils/colors";
import RouteButton from "../../components/CustomButton";
import InputText from "../../components/CustomTextField";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { NavigationContainer } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";

// Language Provider
import { Language } from "../../providers/languageProvider";
import { transcription } from "../../utils/lang";
import Validation from "../../components/CustomTextField/Validation";

const Admin = ({ navigation }) => {
  const [signInOptions, setSignOptions] = React.useState(false);
  const lang = useContext(Language);
  const [data, setData] = useState([
    {
      Aadhar: "",
      Mobile: "",
      Pin: "",
      isValidPin: false,
      isValidMobile: false,
      isValidAadhar: false,
      check_textInputAadhar: false,
      check_textInputMobile: false,
      check_textInputPin: false,
      isValidUser: false,
    },
  ]);
  const textInputAadhar = (val) => {
    if (val.trim().length == 10) {
      setData({
        ...data,
        Aadhar: val,
        check_textInputAadhar: true,
      });
    } else {
      setData({
        ...data,
        Aadhar: val,
        check_textInputAadhar: false,
      });
    }
  };
  const textInputPin = (val) => {
    if (val.trim().length == 6) {
      setData({
        ...data,
        Pin: val,
        check_textInputPin: true,
      });
    } else {
      setData({
        ...data,
        Pin: val,
        check_textInputPin: false,
      });
    }
  };
  {
    /*const textInputMobile= (val) => {
    if( val.trim().length == 10 ) {
        setData({
            ...data,
            Mobile: val,
            check_textInputMobile: true,
          
        });
    } else {
        setData({
            ...data,
            Mobile: val,
            check_textInputPin: false,
          
        });
    }
  } */
  }
  const handleValidAadhar = (val) => {
    if (val.trim().length == 10) {
      setData({
        ...data,
        isValidAadhar: true,
      });
    } else {
      setData({
        ...data,
        isValidAadhar: false,
      });
    }
  };
  {
    /*} const handleValidMobile = (val) => {
    if( val.trim().length == 10 ) {
        setData({
            ...data,
            isValidMobile: true
        });
    } else {
        setData({
            ...data,
            isValidMobile: false
        });
    }
  } */
  }
  const handleValidPin = (val) => {
    if (val.trim().length == 6) {
      setData({
        ...data,
        isValidPin: true,
      });
    } else {
      setData({
        ...data,
        isValidPin: false,
      });
    }
  };
  return (
    <ScrollView style={styles.container}>
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
      <Text style={styles.greet}>{"REGISTER"}</Text>
      <View style={styles.buttonContainer}>
        <KeyboardAvoidingView behavior="padding">
          <InputText placeholderText={transcription[lang.language]["name"]} />
          <InputText placeholderText="Employee Code" />
          <InputText placeholderText="Designation " />
          <InputText placeholderText="Officialc address" multiline={true} />
          <InputText placeholderText="Sub-district" />
          <InputText placeholderText=" Village" />
          <InputText placeholderText="Sub-District" />
          <InputText placeholderText="District" />
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Validation
              placeholderText="Pin"
              onChangeText={(val) => textInputPin(val)}
              onEndEditing={(e) => handleValidPin(e.nativeEvent.text)}
              maxLength={6}
            />
            {data.check_textInputPin ? (
              <Animatable.View animation="bounceIn">
                <Feather
                  style={{ right: wp("10%") }}
                  name="check-circle"
                  color="green"
                  size={20}
                />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidPin ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={{ color: "red" }}>
                Pincode must be 6 characters long.
              </Text>
            </Animatable.View>
          )}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Validation
              placeholderText="AAdhar Number"
              onChangeText={(val) => textInputAadhar(val)}
              onEndEditing={(e) => handleValidAadhar(e.nativeEvent.text)}
              maxLength={10}
            />
            {data.check_textInputAadhar ? (
              <Animatable.View animation="bounceIn">
                <Feather
                  style={{ right: wp("10%") }}
                  name="check-circle"
                  color="green"
                  size={20}
                />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidAadhar ? (
            true
          ) : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={{ color: "red" }}>
                Aadhar must be 10 characters long.
              </Text>
            </Animatable.View>
          )}
        </KeyboardAvoidingView>
        <View style={styles.submit}>
          <RouteButton
            text="Register Now"
            onPress={() => navigation.navigate("Login")}
          />
          <Text> Or Go back</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Admin;

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
    top: hp("2.5%"),
    alignSelf: "center",
    letterSpacing: 10,
    color: "white",
    fontSize: hp("5%"),
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
    fontSize: hp("3%"),
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
    justifyContent: "center",
    backgroundColor: "#e7f3ed",
    alignItems: "center",
    marginBottom: 6,
  },
  routetext: {
    fontSize: hp("4%"),
    alignSelf: "center",
    color: "white",
    marginLeft: "10%",
  },
  buttonContainer: {
    top: hp("5%"),
    paddingTop: 30,
    height: "100%",
    backgroundColor: "#d0e8db",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: "5%",
    alignItems: "center",
    elevation: 20,
  },
  submit: {
    width: wp("80%"),
    justifyContent: "center",
    marginTop: hp("3"),
  },
});
