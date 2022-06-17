import {
  StyleSheet,
  Text,
  View,
  Image,
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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Icon from 'react-native-vector-icons/FontAwesome5';
export default function Welcome() {
  const lang = useContext(Language);

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
      <Image
        source={require("../../assets/sishma-white.png")}
        style={[styles.logo, { width: 140, height: 140, borderRadius: 70 }]}
      />
   <View>
     <Text style={{top:hp("40%"),fontSize:wp('10%'),alignSelf:'center',letterSpacing:5,color:'white',fontWeight:'bold'}}>Contact Us</Text>
     <View style={{paddingBottom:hp('2%'),flexDirection:'row',paddingHorizontal:wp('10%')}}>
     <Icon style={styles.greet1} name="envelope"  size={25} color="#6e6e6e" /> 
     <Text style={styles.greet}> admin.chennai@vit.ac.in</Text>
   
     </View>
     <View style={{paddingBottom:hp('2%'),flexDirection:'row',paddingHorizontal:wp('10%')}}>
     <Icon style={styles.greet1} name="phone"  size={25} color="#6e6e6e" /> 
     <Text style={styles.greet}> +91 44 3993 1555</Text>
   
     </View>
     <View style={{paddingBottom:hp('2%'),flexDirection:'row',paddingHorizontal:wp('10%')}}>
     <Icon style={styles.greet1} name="building"  size={25} color="#6e6e6e" /> 
     <Text style={styles.greetadd}>Vellore Institute of Technology, Vandalur – Kelambakkam Road Chennai, Tamil Nadu – 600 127</Text>
   
     </View>
     
    
    
     </View>
   
      
      <Text style={{alignSelf:"center", fontSize: 13, color: "#AEAEAE", position: "absolute", bottom: 40}}>
              <Image source={require("../../assets/sishma.png")} style={{width: 12, height: 12, borderRadius: 6}} />  SISHMA 2022</Text>
                <Text style={{alignSelf:"center", fontSize: 13, color: "#AEAEAE", position: "absolute", bottom: 24}}>sponsored by Department of Science and Technology</Text>
                <Text style={{alignSelf:"center", fontSize: 13, color: "#AEAEAE", position: "absolute", bottom: 8}}>[Device Development Programme], Govt. Of India.</Text>
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
    width: 469,
    height: 469,
    borderRadius: 469 / 2,
  },
  greet: {
    top: hp('55%'),
    alignSelf: "center",
    paddingHorizontal:wp('10%'),
    color: "green",
    fontSize: wp('5%'),
  },
  greet1: {
    top: hp('55%'),
    alignSelf:'center',
   
    color: "green",
   fontSize: wp('5%'),
  },
  greetadd: {
    top: hp('55%'),
    alignSelf:'center',
    paddingHorizontal:wp('5%'),
    
    color: "green",
    fontSize: wp('4.75%'),
  },
  dots: {
    width: 23.82,
    height: 23.82,
    borderRadius: 23.82 / 2,
    backgroundColor: "white",
  },
  logo: {
    position: "absolute",
    top: 70,
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
    backgroundColor: "pink",
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
    // top: 380,
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingTop: 30,
    // height: "100%",
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    padding: "8%",
    alignItems: "center",
    elevation: 20,
  },
  changeLanguage: {
    backgroundColor: "white",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    elevation: 10,
    flexDirection: "row",
    right: 10,
  },
});
