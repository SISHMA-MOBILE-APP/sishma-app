import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  Dimensions,
  TouchableOpacity,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState, useContext } from "react";
import Icon from 'react-native-vector-icons/FontAwesome5';
import colors from "../../utils/colors";
import RouteButton from "../../components/CustomButton";
import InputText from "../../components/CustomTextField";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import * as Animatable from "react-native-animatable";
import Feather from "react-native-vector-icons/Feather";
import Validation from "../CustomTextField/Validation";
import Routepage from "../../pages/RoutePage";

// Language Provider
import { Language } from "../../providers/languageProvider";
import { transcription } from "../../utils/lang";
import ConfirmGoogleCaptcha from "react-native-google-recaptcha-v2";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";

import { initializeApp } from "firebase/app";
import { getAuth, PhoneAuthProvider, signInWithCredential } from 'firebase/auth';
import { gql, useQuery } from "@apollo/client";
import { User } from "../../providers/userProvider";


const GET_FARMER=gql`
          query Farmer($aadhar: String!){
            farmer(
              aadhar: $aadhar
            ){
              name
              village
              district
              state
              kitno
              phone
            }
          }
          `;
const GET_FIELD_OFFICER=gql`
          query GetFieldOfficer($aadhar: String!){
            fieldofficer(
              aadhar: $aadhar
            ){
              phone
            }
          }
          `;
const GET_ADMIN=gql`
          query GetAdmin($aadhar: String!){
            admin(
              aadhar: $aadhar
            ){
              phone
            }
          }
          `;
const queries = [GET_FARMER, GET_FIELD_OFFICER, GET_ADMIN];


const firebaseConfig = {
  apiKey: "AIzaSyBBd2Q6yuZ1gBpOw33d-SkUB0zvZ9vWyUc",
  authDomain: "sishma-c002d.firebaseapp.com",
  projectId: "sishma-c002d",
  storageBucket: "sishma-c002d.appspot.com",
  messagingSenderId: "246497938994",
  appId: "1:246497938994:web:535fd218a5cfd0a043762b",
  measurementId: "G-TB15DW4XZY"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default function Login({ navigation }) {

  const recaptchaVerifier = React.useRef(null);
  const [phoneData, setPhoneData] = useState();
  const [verificationId, setVerificationId] = React.useState();
  const [verificationCode, setVerificationCode] = React.useState();
  const [step, setStep] = React.useState(1);
  const [option, setOption] = React.useState(1);
  const userContext = useContext(User);

  const {loading, error, queryData, refetch} = useQuery(queries[option-1], {variables:{aadhar:phoneData}});

  const lang = useContext(Language);
  const [data, setData] = useState([
    {
      Aadhar: "",
      Mobile: "",
      Pin: "",
      isValidAadhar: false,
      check_textInputAadhar: false,
    },
  ]);
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

  // Captcha Setup
  let captchaForm = null;
  onMessage = event => {
    if (event && event.nativeEvent.data) {
      if (['cancel', 'error', 'expired'].includes(event.nativeEvent.data)) {
        captchaForm.hide();
        return;
      } else {
        console.log('Verified code from Google', event.nativeEvent.data);
        setTimeout(() => {
          captchaForm.hide();
          // do what ever you want here
        }, 1500);
      }
    }
  };

  return (
    <View style={styles.container}>
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
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

      <Image source={require("../../assets/sishma-white.png")} style={[styles.logo, { width: 140, height: 140, borderRadius: 70 }]} />
      <Text style={styles.greet}>{transcription[lang.language]["login"]}</Text>

      <View style={{ position: "absolute", top: hp("4"), right: 0 }}>
        <TouchableOpacity onPress={() => {
          navigation.navigate('LanguagePicker')
        }} style={styles.changeLanguage}>
          <Image source={require("../../assets/translation.png")} style={{ width: 20, height: 20, marginRight: 5 }} />
          <Text style={{ fontWeight: "bold", color: "#2b2b2b", fontSize: 14, }}>Language</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.loginContainer}>
        <View style={{ width: wp("75%") }}>
          {step === 1 && <><View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Validation
              placeholderText={transcription[lang.language]["aadhaarnum"]}
              onChangeText={(val) => setPhoneData(val)}
              onEndEditing={(e) => handleValidAadhar(e.nativeEvent.text)}
              maxLength={14}
            />
            <Icon name="address-card" style={{ left: -20, bottom: 5 }} size={25} color="#6e6e6e" />
            {step === 1 &&  data.check_textInputAadhar ? (
              <Animatable.View animation="bounceIn">
                <Feather
                  style={{ right: wp("15%") }}
                  name="check-circle"
                  color="green"
                  size={20}
                />
              </Animatable.View>
            ) : null}
          </View>
          </>
          }
          {data.isValidAadhar ? (
            null
          ) : (
            <>
            {step === 1 &&(

              <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={{ color: "red" }}>
                Aadhar must be 12 characters long.
              </Text>
            </Animatable.View>
              )}
            {step === 1 && 
          <View style={{flexDirection: "row", marginTop:10, width: "100%", alignSelf:"center", borderRadius: 10, backgroundColor:"#128a49", borderRadius: 20}}>
          <TouchableOpacity onPress={()=>setOption(1)} style={[styles.tabs, {backgroundColor: option === 1 ? "#128a49":"#41a16d"}]}><Text style={styles.tabstext}>Farmers</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>setOption(2)} style={[styles.tabs, {backgroundColor: option === 2 ? "#128a49":"#41a16d"}]}><Text style={styles.tabstext}>Field Officer</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>setOption(3)} style={[styles.tabs, {backgroundColor: option === 3 ? "#128a49":"#41a16d"}]}><Text style={styles.tabstext}>Admin</Text></TouchableOpacity>
        </View>
          }
            </>
          )
          }
          <View style={{ paddingBottom: wp("2%") }} />
          {step === 2 && <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <InputText onChangeText={(val) => setVerificationCode(val)} placeholderText={transcription[lang.language]["password"]} visibility={true} />
            <Icon name="ellipsis-h" style={{ left: -20, bottom: 5 }} size={25} color="#6e6e6e" />
          </View>
          }
          <View style={{ padding: wp("5%") }} />
          <RouteButton
            onPress={async () => {
              if (step === 1) {
                try {
                  console.log(phoneData)
                  refetch({aadhar: phoneData})
                  .then(async (val)=>{
                    if(val.data.farmer != null){
                      userContext.setUserData(val.data.farmer);
                      const phoneProvider = new PhoneAuthProvider(auth);
                      const verificationId = await phoneProvider.verifyPhoneNumber(
                        val.data.farmer.phone,
                        recaptchaVerifier.current
                      );
                      setVerificationId(verificationId);
                      console.log(userContext.userData)
                      setStep(2);
                    }else {
                      //handle error case
                    }
                  })

                  console.log("done")
                } catch (err) {
                  console.log(err)
                }
              } else {
                try {
                  console.log(verificationCode);
                  const credential = PhoneAuthProvider.credential(verificationId, verificationCode)
                  const result = await signInWithCredential(auth, credential);
                  if(!result.user.isAnonymous){
                    if(option == 1){
                      navigation.navigate("FarmerDashboard");
                    }else if(option == 2){
                      navigation.navigate("OfficerDashboard");
                    }else if(option == 3){
                      navigation.navigate("AdminDashboard");
                    }
                  }
                  console.log("Done");
                } catch (err) {
                  console.log(err)
                }
              }
            }}
            text={transcription[lang.language]["submit"]}
          />
        </View>
        {/* <ConfirmGoogleCaptcha
            ref={_ref => captchaForm = _ref}
            siteKey={siteKey}
            baseUrl={baseUrl}
            languageCode='en'
            onMessage={this.onMessage}
        /> */}

        <TouchableOpacity onPress={() => {
          //setPage(1);
          //navigation.navigate('RoutePage')
        }}>
          <Text
            style={{
              // marginTop: hp(0),
              // textAlign:"left",
              padding: "2%",
              // paddingLeft:"8%",
            }}
          >{transcription[lang.language]["forgotPassword"]}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          //setPage(1);
          navigation.navigate('RoutePage')
        }}>
          <Text
            style={{
              // marginTop: hp(2),
              textAlign: "center",
              padding: "2%",
              // paddingRight:"10%",
            }}
          >
            {transcription[lang.language]["notReg"]}
          </Text>
        </TouchableOpacity>
        {/* <View style={{position:"absolute",top:hp("4"),right:0}}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('LanguagePicker')
          }}>
          <Text style={{ alignSelf:"flex-end",textAlign: "center", padding:"3%", color: "white", fontSize: 15, }}>Change Language</Text>
        </TouchableOpacity>
      </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#d0e8db",
  },
  circle: {
    position: "absolute",
    width: 469, //469
    height: 469, //469
    borderRadius: 469 / 2, //469/2
  },
  greet: {
    top: hp(35),
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
    top: 75,
    left: Dimensions.get("screen").width / 2 - 70,
    borderWidth: 1.17,
    borderColor: "white",
    padding: 4,
    borderRadius: 15,
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
  },
  loginContainer: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    position: "absolute",
    opacity: 0.8,
    bottom: hp("0"),
    height: hp(50),
    width: wp("100%"),
    elevation: 80,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingBottom: 10
  },
  changeLanguage: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    elevation: 10,
    flexDirection: "row",
    right: 10
  },
  tabs:{
    width: "33.33%",
    paddingVertical: 10,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#41a16d",
    borderRadius: 20
  },
  tabstext:{
    color:"white",
    fontWeight:"bold",
    textAlign:"center"
  }
});
