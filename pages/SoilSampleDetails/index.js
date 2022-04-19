
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
  let count = 0
  const Officer = ({navigation}) => {
    const [page, setPage] = React.useState(0);
    const [signInOptions, setSignOptions] = React.useState(false);
    const lang = useContext(Language);
    return (
      <ScrollView  style={styles.container} contentContainerStyle={{flex: 1, minHeight: hp(100)}}>
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
        </View>
        <Text style={styles.greet}>{"Soil Sample\nDetails"}</Text>
        <View style={styles.buttonContainer}>
        <KeyboardAvoidingView behavior="padding" >
          <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 20, }}>
            <View style={{ width: "30%", height: 5, borderRadius: 2.5, backgroundColor: page === 0 ? "green" : "rgba(0, 255, 0, 0.5)" }} />
            <View style={{ width: "30%", height: 5, borderRadius: 2.5, backgroundColor: page === 1 ? "green" : "rgba(0, 255, 0, 0.5)" }} />
            <View style={{ width: "30%", height: 5, borderRadius: 2.5, backgroundColor: page === 2 ? "green" : "rgba(0, 255, 0, 0.5)" }} />
          </View>
          <Text style={styles.pagetitle}>{page === 0 ? "Soil Sample Details" : page===1? "Soil Test Details": "Soil Test Details"}</Text>
          {page == 0 && 
           <View>
           <InputText style={{marginBottom: hp(1), marginTop: hp(2)}} placeholderText={transcription[lang.language]["soilSampleNum"]}/> 
           <InputText style={{marginBottom: hp(1)}} placeholderText={transcription[lang.language]["date"]} /> 
           <InputText style={{marginBottom: hp(1)}} placeholderText={transcription[lang.language]["surveyNum"]} /> 
           <InputText style={{marginBottom: hp(1)}} placeholderText={transcription[lang.language]["farmSize"]}/> 
           <InputText style={{marginBottom: hp(1)}} placeholderText={transcription[lang.language]["gps"]}/> 
           <InputText style={{marginBottom: hp(1)}} placeholderText={transcription[lang.language]["crop"]}/> 
           </View>
          }
          {page == 1 && 
           <View>
           <InputText style={{marginBottom: hp(2), marginTop: hp(2)}} placeholderText={transcription[lang.language]["pH"]}/> 
           <InputText style={{marginBottom: hp(2)}} placeholderText={transcription[lang.language]["soilMoisture"]}/> 
           <InputText style={{marginBottom: hp(2)}} placeholderText={transcription[lang.language]["nitrogen"]} /> 
           <InputText style={{marginBottom: hp(2)}} placeholderText={transcription[lang.language]["phosphorus"]}/> 
           <InputText style={{marginBottom: hp(2)}} placeholderText={transcription[lang.language]["potassium"]}/> 
           </View>
          }
          {page == 2 &&
          <View>
           <InputText style={{marginBottom: hp(1), marginTop: hp(1)}}  placeholderText={transcription[lang.language]["sulphur"]}/> 
           <InputText style={{marginBottom: hp(1)}} placeholderText={transcription[lang.language]["iron"]}/> 
           <InputText style={{marginBottom: hp(1)}} placeholderText={transcription[lang.language]["boron"]}/> 
           <InputText style={{marginBottom: hp(1)}} placeholderText={transcription[lang.language]["copper"]}/> 
           <InputText style={{marginBottom: hp(1)}} placeholderText={transcription[lang.language]["manganese"]}/> 
           <InputText style={{marginBottom: hp(1)}} placeholderText={transcription[lang.language]["zinc"]}/> 
           </View>
          }
           </KeyboardAvoidingView>
           <View style={styles.submit}>
            <RouteButton  onPress={() => {
              count === 0? setPage(1) : setPage(2);
              count++
              // navigation.navigate('Login')
            }} text={transcription[lang.language]["next"]}/>
      
            {
            page === 1 ?
            <TouchableOpacity
             onPress={()=>{
               setPage(0)
               count=0
               }}>

            <Text style={{ alignSelf: "center",width: wp(50),textAlign: "center", }}>Go back</Text>
             </TouchableOpacity> : 

             page === 2 ?
             <TouchableOpacity
             onPress={()=>{
               setPage(1)
               count=1
               }}>

            <Text style={{ alignSelf: "center",width: wp(50),textAlign: "center", }}>Go back</Text>
             </TouchableOpacity> : null
          }
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
      position: "absolute",
      top: hp(10),
      alignSelf: "center",
      letterSpacing: 7,
      color: "white",
      fontSize: hp('5%'),
      textAlign: "center"
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
      top: hp(30),
      paddingTop: 30,
      backgroundColor: "#d0e8db",
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      padding: "5%",
      paddingBottom: "20%",
      height: hp(70),
      alignItems: "center",
      elevation: 20,
      opacity: 1,
    },
    submit:{
      marginTop: hp("4"),
      width:wp('80%'),
      justifyContent:'center',
      // alignItems:'center',
    },
    pagetitle: {
      alignSelf: "center",
      color: "#444",
      fontSize: 25,
    }
  });
  