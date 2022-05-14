import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
  TouchableOpacity
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../utils/colors";
import RouteButton from "../../components/CustomButton";
import InputText from "../../components/CustomTextField";
import DropdownComponent from "../../components/Dropdown/dropdown";

// Language Provider
import { Language } from "../../providers/languageProvider";
import { transcription } from "../../utils/lang";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Validation from "../../components/CustomTextField/Validation";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";

const Farmer = ({ navigation }) => {
  const [page, setPage] = useState(0);
  const [data, setData] = useState(
    {
      Aadhar: "",
      Mobile: "",
      Pin: "",
      Name: "",
      Address: "",
      Village: "",
      District: "",
      State: "",
      Kit: "",
      isValidPin: false,
      isValidMobile: false,
      isValidAadhar: false,
      check_textInputAadhar: false,
      check_textInputMobile: false,
      check_textInputPin: false,
      count: true,
    });
  const textInputName = (val) => {
    setData({ ...data, Name: val });
  };
  const textInputAddress = (val) => {
    setData({ ...data, Address: val });
  };
  const textInputVillage = (val) => {
    setData({ ...data, Village: val });
  };
  const textInputDistrict = (val) => {
    setData({ ...data, District: val });
  };
  const textInputState = (val) => {
    setData({ ...data, State: val });
  };

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
        isValidAadhar: true,
      });
    }
  };
  const textInputPin = (val) => {
    if (val.trim().length == 6) {
      setData({
        ...data,
        Pin: val,
        check_textInputPin: true,
        isValidPin: true,
      });
    } else {
      setData({
        ...data,
        Pin: val,
        check_textInputPin: false,
      });
    }
  };
  const textInputMobile = (val) => {
    if (val.trim().length == 10) {
      setData({
        ...data,
        Mobile: val,
        check_textInputMobile: true,
        isValidMobile: true,
      });
    } else {
      setData({
        ...data,
        Mobile: val,
        check_textInputMobile: false,
      });
    }
  };
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
  const handleValidMobile = (val) => {
    if (val.trim().length == 10) {
      setData({
        ...data,
        isValidMobile: true,
      });
    } else {
      setData({
        ...data,
        isValidMobile: false,
      });
    }
  };
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
        <ScrollView contentContainerStyle={{flexGrow: 1, minHeight: "100%"}}>
      {/* <View style={styles.container}> */}
    

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

      <Text style={styles.greet}>{"Farmer\nRegistration"}</Text>

      <View style={styles.buttonContainer}>
        <KeyboardAvoidingView behavior="padding">
          <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 20, }}>
            <View style={{ width: "45%", height: 5, borderRadius: 2.5, backgroundColor: page === 0 ? "green" : "rgba(0, 255, 0, 0.5)" }} />
            <View style={{ width: "45%", height: 5, borderRadius: 2.5, backgroundColor: page === 1 ? "green" : "grey" }} />
          </View>
          <Text style={styles.pagetitle}>{page === 0 ? "Personal Details" : "Address Details"}</Text>
          {page == 0 &&
            <View>

              <InputText
                value={data.Name}
                style={{marginBottom: hp(3), marginTop: hp(3)}}
                placeholderText="Full name"
                onChangeText={textInputName}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Validation
                  placeholderText="Aadhar Number"
                  value={data.Aadhar}
                  style={{marginBottom: hp(3)}}
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
              {data.isValidAadhar == false && data.count == false ? (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={{ color: "red" }}>
                    Aadhar must be 10 characters long.
                  </Text>
                </Animatable.View>
              ) : null}
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Validation
                  placeholderText="Mobile Number"
                  value={data.Mobile}
                  style={{marginBottom: hp(3)}}
                  onChangeText={textInputMobile}
                  onEndEditing={(e) => handleValidMobile(e.nativeEvent.text)}
                  maxLength={10}
                />
                {data.check_textInputMobile ? (
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
              {data.isValidMobile == false && data.count == false ? (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={{ color: "red" }}>
                    Mobile must be 10 characters long.
                  </Text>
                </Animatable.View>
              ) : null}

              <InputText value={data.Kit} onChangeText={(e)=>setData({...data, Kit:e })} placeholderText="Kit number" />
            </View>
          }


          {/* Address Section  */}
          {page === 1 &&
            <View>

              <InputText
                value={data.Address}
                placeholderText="Residential Adress"
                multiline={true}
                onChangeText={textInputAddress}
              />
              {/* <InputText
                value={data.State}
                placeholderText="State"
                onChangeText={textInputState}
              /> */}
              <DropdownComponent
                placeholderText="Select State"
              />
              {/* <InputText
                value={data.Village}
                placeholderText="Village "
                onChangeText={textInputVillage}
              /> */}
              <DropdownComponent
                placeholderText="Select Village"
              />
              {/* <InputText
                value={data.District}
                placeholderText="District"
                onChange
                Text={textInputDistrict}
              /> */}
              <DropdownComponent
                placeholderText="Select District"
              />
              
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Validation
                  value={data.Pin}
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
              {data.isValidPin == false && data.count == false ? (
                <Animatable.View animation="fadeInLeft" duration={500}>
                  <Text style={{ color: "red" }}>
                    Pincode must be 6 characters long.
                  </Text>
                </Animatable.View>
              ) : null}
            </View>
          }
        </KeyboardAvoidingView>

        <View style={styles.submit}>
          <RouteButton
            onPress={() => {
              {
                data.isValidAadhar && data.isValidMobile && data.isValidPin
                ? navigation.navigate("Login") &&
                setData({
                  ...data,
                  count: true,
                })
                : setData({
                  ...data,
                  count: false,
                });
                console.log(page);
                if(page == 0 && data.isValidAadhar && data.isValidMobile){
                  setPage(1);
                }
              }
            }}
            text={page===0? "Next" : "Register Now"}
            />
          {
            page === 1 ?
            <TouchableOpacity
             onPress={()=>setPage(0)}>

            <Text style={{ alignSelf: "center",width: wp(50),textAlign: "center", }}>Go back</Text>
             </TouchableOpacity> : null
          }
        </View>
      </View>

      {/* </View> */}
            </ScrollView>
  );
};

export default Farmer;

const styles = StyleSheet.create({
  container: {
    width:"100%",
    height: "100%",
    backgroundColor: "#d0e8db",
  },
  circle: {
    position: "absolute",
    width: 469,
    height: 469,
    borderRadius: 469 / 2,
  },
  greet: {
    textAlign: "center",
    position: "absolute",
    top: hp("7%"),
    alignSelf: "center",
    letterSpacing: 4,
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
    top: hp(30),
    paddingTop: 30,
    backgroundColor: "#d0e8db",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: "5%",
    height: hp(70),
    paddingBottom: "20%",
    alignItems: "center",
    elevation: 20,
    opacity: 1,
  },
  submit: {
    marginTop: hp("4"),
    width: wp("80%"),
    justifyContent: "center",
    // alignItems:'center',
  },
  pagetitle: {
    alignSelf: "center",
    color: "#444",
    fontSize: 25
  }
})
