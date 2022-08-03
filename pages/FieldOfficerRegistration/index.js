import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  Image,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';
import villageData, { selum } from '../../utils/villages';

import DropdownComponent from "../../components/Dropdown/dropdown";
import { LinearGradient } from "expo-linear-gradient";
import React, { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import colors from "../../utils/colors";
import RouteButton from "../../components/CustomButton";
import InputText from "../../components/CustomTextField";
import Feather from "react-native-vector-icons/Feather";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Validation from "../../components/CustomTextField/Validation";
import * as Animatable from "react-native-animatable";

// Language Provider
import { Language } from "../../providers/languageProvider";
import { transcription } from "../../utils/lang";
import Login from "../../components/LoginOrRegister/Login";

// Apollo Client
import client from "../../providers/apiProvider";
import { gql, useMutation } from "@apollo/client";
import Loading from "../Loading";

const ADD_FIELD_OFFICER = gql`
  mutation AddFieldOfficer(
    $departmanent: String!,
    $address: String!,
    $state: String!,
    $district: String!,
    $village: String!,
    $pin: String!,
    $name: String!,
    $empcode: String!,
    $designation: String!,
    $aadhar: String!,
    $email: String!,
    $phone: String!
  ) {
    addFieldOfficer(
      departmanent: $departmanent,
      address: $address,
      state: $state,
      district: $district,
      village: $village,
      pin: $pin,
      name: $name,
      empcode: $empcode,
      designation: $designation,
      aadhar: $aadhar,
      email: $email,
      phone: $phone
    ) {
      id
    }
  }
`;

const Officer = ({ navigation }) => {

  const [addFieldOfficer, { fieldOfficerData, loading, error, reset }] = useMutation(ADD_FIELD_OFFICER);

  
  const [page, setPage] = React.useState(0);
  const [signInOptions, setSignOptions] = React.useState(false);
  const lang = useContext(Language);
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
    if (val.trim().length == 12) {
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
    if (val.trim().length == 12) {
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
  if (loading) return <Loading />;
  if (error) return <Text> {`Submission error! ${error.message}`} </Text>;
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, minHeight: "100%" }}>
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

      <Text style={styles.greet}>{transcription[lang.language]["officerReg"]}</Text>

      <View style={{position:"absolute",top:hp("4"),right:0}}>
      <TouchableOpacity onPress={()=>{
          navigation.navigate('LanguagePicker')
          }} style={styles.changeLanguage}>
          <Image source={require("../../assets/translation.png")} style={{width: 20, height: 20, marginRight: 5}} />
          <Text style={{ fontWeight: "bold", color: "#2b2b2b", fontSize: 14, }}>Language</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonContainer}>
        <ScrollView contentContainerStyle={{ width: "95%" }}>
          {/* <KeyboardAvoidingView behavior="padding"> */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: 20,
              }}
            >
              <View
                style={{
                  width: "45%",
                  height: 5,
                  borderRadius: 2.5,
                  backgroundColor: page === 0 ? "green" : "rgba(0, 255, 0, 0.5)",
                }}
              />
              <View
                style={{
                  width: "45%",
                  height: 5,
                  borderRadius: 2.5,
                  backgroundColor: page === 1 ? "green" : "grey",
                }}
              />
            </View>
            <Text style={styles.pagetitle}>
              {page === 0 ? transcription[lang.language]["organisationDetails"] : transcription[lang.language]["personalDetails"]}
            </Text>
            {page == 0 && (
              <View>
                <InputText
                  style={{ marginBottom: hp(3), marginTop: hp(3) }}
                  placeholderText={transcription[lang.language]["deptName"]}
                  />
                {/* <InputText
                  style={{ marginBottom: hp(3) }}
                  placeholderText={transcription[lang.language]["officeAddress"]}
                /> */}
                <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
              <InputText
                value={data.Address}
                placeholderText={transcription[lang.language]["officeAddress"]}
                multiline={true}
                onChangeText={textInputAddress}
                style={{ marginBottom: hp(3), marginTop: hp(1) }}
              />
              <Icon name="building"  style={{left:-20}} size={25} color="#6e6e6e" />
              </View>
              <DropdownComponent
                placeholderText={transcription[lang.language]["state"]}
                data={[{label: "Tamil Nadu", value: "Tamil Nadu"}]}
              />
              <DropdownComponent
                placeholderText={transcription[lang.language]["district"]}
                data = {[{label: "Selum", value: "Selum"}]}
              />
             
              <DropdownComponent
                placeholderText={transcription[lang.language]["village"]}
                data={selum}
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
                  placeholderText={transcription[lang.language]["pin"]}
                  onChangeText={(val) => textInputPin(val)}
                  onEndEditing={(e) => handleValidPin(e.nativeEvent.text)}
                  maxLength={6}
                  />
                <Image style={styles.icon} source={require('../../utils/icons/pin.png')} />
                {data.check_textInputPin ? (
                  <Animatable.View animation="bounceIn">
                    <Feather
                      style={{ right: wp("15%") }}
                      name="check-circle"
                      color="green"
                      size={25}
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
            )}
            {page == 1 && (
              <View>
                 <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginLeft:5
                }}
              >
              <InputText
                value={data.Name}
                style={{marginBottom: hp(3), marginTop: hp(3)}}
                placeholderText={transcription[lang.language]["name"]}
                onChangeText={textInputName}
              />
              <Icon name="user-plus"  style={{left:-20}} size={20} color="#6e6e6e" />
              </View>
                <InputText
                  style={{ marginBottom: hp(3) }}
                  placeholderText={transcription[lang.language]["empCode"]}
                  multiline={true}
                />
                <InputText
                  style={{ marginBottom: hp(3) }}
                  placeholderText={transcription[lang.language]["designation"]}
                />
                {/* <InputText
                  style={{ marginBottom: hp(3) }}
                  placeholderText={transcription[lang.language]["aadhaarnum"]}
                /> */}
                 <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Validation
                 
                  placeholderText={transcription[lang.language]["aadhaarnum"]}
                  value={data.Aadhar}
                  style={{marginBottom: hp(3)}}
                  onChangeText={(val) => textInputAadhar(val)}
                  onEndEditing={(e) => handleValidAadhar(e.nativeEvent.text)}
                  maxLength={12}
                />
                <Icon name="address-card"  style={{left:-20, bottom : 15}} size={25} color="#6e6e6e" />
                {data.check_textInputAadhar ? (
                  <Animatable.View animation="bounceIn">
                    <Feather
                      style={{ right: wp("15%"), bottom : 15 }}
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
                    Aadhar must be 12 characters long.
                  </Text>
                </Animatable.View>
              ) : null}
                <InputText
                  style={{ marginBottom: hp(3) }}
                  placeholderText={transcription[lang.language]["email"]}
                />
                <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Validation
                  placeholderText={transcription[lang.language]["mobileNum"]}
                  value={data.Mobile}
                  style={{marginBottom: hp(3)}}
                  onChangeText={textInputMobile}
                  onEndEditing={(e) => handleValidMobile(e.nativeEvent.text)}
                  maxLength={10}
                />
                <Icon name="phone"  style={{left:-20, bottom: 15}} size={25} color="#6e6e6e" />
                {data.check_textInputMobile ? (
                  <Animatable.View animation="bounceIn">
                    <Feather
                      style={{ right: wp("15%"), bottom : 15 }}
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
              </View>

            )}
          {/* </KeyboardAvoidingView> */}
          <View style={styles.submit}>
            {page === 0 ? (
              <RouteButton
                onPress={() => {data.isValidPin?setPage(1)&&setData({
                  ...data,
                  count: true,
                }): setData({ ...data, count: false,});
                  // navigation.navigate('Login')
                }}
                text={transcription[lang.language]["next"]}
              />
            ) : <RouteButton
              style={{ width: "106%" }}
              onPress={async() => {
              //   data.isValidAadhar&&data.isValidMobile?navigation.navigate('FieldOfficerSuggestion')&&setData({
              //   ...data,
              //   count: true,
              // }): setData({ ...data, count: false,});
                // navigation.navigate('Login')

                var result = await addFieldOfficer({
                  variables: {
                    departmanent: "SCOPE",
                    address: "221B bleekers street",
                    state: "solid",
                    district: "karachi",
                    village: "dholakpur",
                    pin: "123456",
                    name: "Bruce Wayne",
                    empcode: "69",
                    designation: "",
                    aadhar: "123456789039",
                    email: "batman@vit.com",
                    phone: "+91 6969696969",
                  },
                });
                console.log(result)

              }}
              text={transcription[lang.language]["registerNow"]}
            />}


            {
            page === 0 ? 
            <TouchableOpacity onPress={() => navigation.pop()}>
                <Text
                  style={{
                    alignSelf: "center",
                    width: wp(50),
                    textAlign: "center",
                    marginBottom: hp(1),
                    marginTop: hp(1),
                  }}
                >
                  {"Back to Route Page"}
                </Text>
              </TouchableOpacity>:
            page === 1 ? (
              <TouchableOpacity onPress={() => setPage(0)}>
                <Text
                  style={{
                    alignSelf: "center",
                    width: wp(50),
                    textAlign: "center",
                    marginBottom: hp(1),
                    marginTop: hp(1),
                  }}
                >
                  {transcription[lang.language]["back"]}
                </Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default Officer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height:"100%",
    backgroundColor: "#d0e8db",
  },
  circle: {
    position: "absolute",
    width: 469,
    height: 469,
    borderRadius: 469 / 2,
  },
  greet: {
    position: "absolute",
    top: hp(10),
    alignSelf: "center",
    letterSpacing: 7,
    color: "white",
    fontSize: hp("5%"),
    textAlign: "center",
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
    position: "absolute",
    bottom: 0,
    paddingTop: 30,
    width: "100%",
    backgroundColor: "#d0e8db",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: "5%",
    height: hp(70),
    alignItems: "center",
    elevation: 20,
    opacity: 1,
  },
  submit: {
    marginTop: "10%",
    width: "70%",
    alignSelf: "center"
    // justifyContent: "center",
    // width: "80%"
    // alignItems:'center',
  },
  pagetitle: {
    alignSelf: "center",
    color: "#444",
    fontSize: 25,
  },
  icon: {
    width: 30,
    height: 30,
    left: -20,
    bottom: 5
  },
  changeLanguage:{
    backgroundColor:"white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    elevation: 10,
    flexDirection: "row",
    right: 10
  }
});
