
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Modal,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,ScrollView, KeyboardAvoidingView 
  } from "react-native";
  import { LinearGradient } from "expo-linear-gradient";
  import React, {useContext} from "react";
  import { AntDesign } from "@expo/vector-icons";
  import colors from "../../utils/colors";
  import RouteButton from "../../components/CustomButton";
  import InputText from "../../components/CustomTextField";
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  
  // Language Provider
  import { Language } from "../../providers/languageProvider";
  import { transcription } from "../../utils/lang";   
  
  const Officer = ({navigation}) => {
    const [signInOptions, setSignOptions] = React.useState(false);
    const lang = useContext(Language);
    return (
      <ScrollView  style={styles.container}>
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
  
  <View>
  {/*<View style={{ flexDirection: "row" }}>
            <View style={[styles.dots, { marginRight: 5, marginBottom: 5 }]} />
            <View style={styles.dots} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={[styles.dots, { marginRight: 5 }]} />
            <View style={styles.dots} />
        </View>*/}
        </View>
        <Text style={styles.greet}>{"REGISTER"}</Text>
        <View style={styles.buttonContainer}>
        <KeyboardAvoidingView behavior="padding" >
           <InputText placeholderText={transcription[lang.language]["name"]}/> 
           <InputText placeholderText={transcription[lang.language]["empCode"]} multiline={true}/> 
           <InputText placeholderText={transcription[lang.language]["designation"]} /> 
           <InputText placeholderText={transcription[lang.language]["OffAddress"]}/> 
           <InputText placeholderText={transcription[lang.language]["village"]}/> 
           <InputText placeholderText={transcription[lang.language]["subDist"]}/> 
           <InputText placeholderText={transcription[lang.language]["district"]}/> 
           <InputText placeholderText={transcription[lang.language]["pin"]}/> 
           <InputText placeholderText={transcription[lang.language]["aadhaarnum"]}/> 
           </KeyboardAvoidingView>
           <View style={styles.submit}>
            <RouteButton  onPress={() => navigation.navigate('Login')} text={transcription[lang.language]["registerNow"]}/>
      
            <Text style={{alignSelf: "center"}}>Go back</Text>
           </View>
          
        </View>
      </ScrollView>
    )
  }
  
  export default Officer
  
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
      top: hp('2.5%'),
      alignSelf: "center",
      letterSpacing: 10,
      color: "white",
      fontSize: hp('5%'),
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
      fontSize: hp('3%'),
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
      fontSize: hp('4%'),
      alignSelf: "center",
      color: "white",
      marginLeft: "10%",
    },
    buttonContainer: {
      top: hp('5%'),
      paddingTop: 30,
      backgroundColor: "#d0e8db",
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      padding: "5%",
      paddingBottom: "20%",
      alignItems: "center",
      elevation: 20,
      opacity: 0.9,
    },
    submit:{
      marginTop: hp("4"),
      width:wp('80%'),
      justifyContent:'center',
      // alignItems:'center',
    }
  });
  