
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Modal,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,ScrollView, KeyboardAvoidingView 
  } from "react-native";
 
  import NumericInput from 'react-native-numeric-input'
  import { LinearGradient } from "expo-linear-gradient";
  import React, {useContext,useState} from "react";
  import { AntDesign } from "@expo/vector-icons";
  import colors from "../../utils/colors";
  import RouteButton from "../../components/CustomButton";
  import InputText from "../../components/CustomTextField";
  import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
  
  // Language Provider
  import { Language } from "../../providers/languageProvider";
  import { transcription } from "../../utils/lang";   
import SoilText from "../../components/CustomTextField/SoilText";

  let count = 0
  const Officer = ({navigation}) => {
    const [page, setPage] = React.useState(0);
    const [signInOptions, setSignOptions] = React.useState(false);
    const lang = useContext(Language);
   
    const [data, setData] = useState(
      { Ph:0.00,
        Moisture:0.00,
        Nitrogen:0.00,
        Phosphorus:0.00,
        Potassium:0.00,
        Sulphur:0.00,
        Iron:0.00,
        Boron:0.00,
        Copper:0.00,
        Manganese:0.00,
        Zinc:0.00
      });

    
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
        <Text style={styles.greet}> {transcription[lang.language]["soilSampDetails"]}</Text>
        <View style={{position:"absolute",top:hp("4"),right:0}}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('LanguagePicker')
          }} style={styles.changeLanguage}>
          <Image source={require("../../assets/translation.png")} style={{width: 20, height: 20, marginRight: 5}} />
          <Text style={{ fontWeight: "bold", color: "#2b2b2b", fontSize: 14, }}>Language</Text>
        </TouchableOpacity>
      </View>
        <View style={styles.buttonContainer}>
        <KeyboardAvoidingView behavior="padding" >
          <View style={{ flexDirection: "row", justifyContent: "space-around", marginBottom: 20, }}>
            <View style={{ width: "30%", height: 5, borderRadius: 2.5, backgroundColor: page === 0 ? "green" : "rgba(0, 255, 0, 0.5)" }} />
            <View style={{ width: "30%", height: 5, borderRadius: 2.5, backgroundColor: page === 1 ? "green" : "rgba(0, 255, 0, 0.5)" }} />
            <View style={{ width: "30%", height: 5, borderRadius: 2.5, backgroundColor: page === 2 ? "green" : "rgba(0, 255, 0, 0.5)" }} />
          </View>
          <Text style={styles.pagetitle}>{page === 0 ? transcription[lang.language]["soilSampDetails"] : page===1? transcription[lang.language]["soilTestDetails"]: transcription[lang.language]["soilTestDetails"]}</Text>
          {page == 0 && 
           <ScrollView>
           <View style={{ flexDirection: "row",marginBottom: hp(1), marginTop: hp(2)}}>
           <Image style={styles.icon} source={require('../../utils/icons/soil.png')} />
           <Text style={styles.iconName}>{transcription[lang.language]["soilSampleNum"]}</Text>
           <InputText keyboardType="number-pad" style={{}} />
           </View>

           <View style={{ flexDirection: "row",marginBottom: hp(1)}}>
           <Image style={styles.icon} source={require('../../utils/icons/date.png')}/>
           <Text style={styles.iconName}>{transcription[lang.language]["date"]} </Text>
           <InputText style={{}}/>
          
    
           </View>

           <View style={{ flexDirection: "row",marginBottom: hp(1)}}>
           <Image style={styles.icon} source={require('../../utils/icons/surveyNum.png')} />
           <Text style={styles.iconName}>{transcription[lang.language]["surveyNum"]}</Text>
           <InputText style={{}} keyboardType="number-pad"/> 
            </View>

           <View style={{ flexDirection: "row",marginBottom: hp(1)}}>
           <Image style={styles.icon} source={require('../../utils/icons/farmSize.png')} />
           <Text style={styles.iconName}>{transcription[lang.language]["farmSize"]}</Text>
           <InputText style={{}} keyboardType="number-pad"/> 
            </View>

           <View style={{ flexDirection: "row",marginBottom: hp(1)}}>
           <Image style={styles.icon} source={require('../../utils/icons/gps.png')} />
           <Text style={styles.iconName}>{transcription[lang.language]["gps"]}</Text>
           <InputText style={{}}keyboardType="number-pad"/> 
           </View>

           <View style={{ flexDirection: "row",marginBottom: hp(1)}}>
           <Image style={styles.icon} source={require('../../utils/icons/crops.png')} />
           <Text style={styles.iconName}>{transcription[lang.language]["crop"]}</Text>
           <InputText style={{}}keyboardType="number-pad"/> 
           </View>

           </ScrollView>
          }
          {page == 1 && 
          <ScrollView>

           <View style={{ flexDirection: "row",marginBottom: hp(1), marginTop: hp(2)}}>
           <Image style={styles.icon} source={require('../../utils/icons/pH.png')} />
           <Text style={styles.iconName}>{transcription[lang.language]["pH"]}</Text>
           <SoilText value={data.Ph} 
             onChange={(val) => { setData({
              ...data,
              Ph: val,
              
            })}}
            
            valueType="real"
            maxValue={14}
            onLimitReached={(isMax,msg) => isMax?console.log("hello"):console.log(data)}/> 
           </View>

           <View style={{ flexDirection: "row",marginBottom: hp(2)}}>
           <Image style={styles.icon} source={require('../../utils/icons/soilMoisture.png')} />
           <Text style={styles.iconName}>{transcription[lang.language]["soilMoisture"]}</Text>
           <SoilText value={data.Moisture} 
             onChange={(val) => { setData({
              ...data,
              Moisture: val,
              
            })}}
            
            valueType="real"
          
            onLimitReached={(isMax,msg) => isMax?console.log("hello"):console.log(data)}/> 
           </View>

           <View style={{ flexDirection: "row",marginBottom: hp(2)}}>
           <Image style={styles.icon} source={require('../../utils/icons/nitrogen.png')} />
           <Text style={styles.iconName}>{transcription[lang.language]["nitrogen"]} </Text>
           <SoilText value={data.Nitrogen} 
             onChange={(val) => { setData({
              ...data,
              Nitrogen: val,
              
            })}}
            
            valueType="real"
           
            onLimitReached={(isMax,msg) => isMax?console.log("hello"):console.log(data)}/>
           </View>

           <View style={{ flexDirection: "row",marginBottom: hp(2)}}>
           <Image style={styles.icon} source={require('../../utils/icons/phosphorus.png')} />
           <Text style={styles.iconName}>{transcription[lang.language]["phosphorus"]}</Text>
           <SoilText value={data.Phosphorus} 
             onChange={(val) => { setData({
              ...data,
              Phosphorus: val,
              
            })}}
            
            valueType="real"
           
            onLimitReached={(isMax,msg) => isMax?console.log("hello"):console.log(data)}/>
           </View>

           <View style={{ flexDirection: "row",marginBottom: hp(2)}}>
           <Image style={styles.icon} source={require('../../utils/icons/potassium.png')} />
           <Text style={styles.iconName}>{transcription[lang.language]["potassium"]}</Text>
           <SoilText value={data.Potassium} 
             onChange={(val) => { setData({
              ...data,
              Potassium: val,
              
            })}}
            
            valueType="real"
            
            onLimitReached={(isMax,msg) => isMax?console.log("hello"):console.log(data)}/> 
           </View>

          </ScrollView>
          }
          {page == 2 &&
          <ScrollView>
           <View style={{ flexDirection: "row",marginBottom: hp(1), marginTop: hp(2)}}>
           <Image style={styles.icon} source={require('../../utils/icons/sulphur.png')} />
           <Text style={styles.iconName}>{transcription[lang.language]["sulphur"]}</Text>
           {/* <NumericInput 
            value={data} 
            onChange={(val) => {
      
              setData(val)
            }}

            onLimitReached={(isMax,msg) => isMax?console.log(msg):console.log(data)}
             
            maxValue={14}
            
            valueType='real'
            rounded 
            textColor='black' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='black' 
            leftButtonBackgroundColor='black'/> */}
           <SoilText value={data.Sulphur} 
             onChange={(val) => { setData({
              ...data,
              Sulphur: val,
              
            })}}
            
            valueType="real"
            
            onLimitReached={(isMax,msg) => isMax?console.log("hello"):console.log(data)}/> 
           {/* <InputText style={{}}/>  */}
           </View>

           <View style={{ flexDirection: "row",marginBottom: hp(1)}}>
           <Image style={styles.icon} source={require('../../utils/icons/iron.png')} />
           <Text style={styles.iconName}>{transcription[lang.language]["iron"]}</Text>
           <SoilText value={data.Iron} 
             onChange={(val) => { setData({
              ...data,
              Iron: val,
              
            })}}
            valueType="real"
            
            onLimitReached={(isMax,msg) => isMax==false?console.log("hello"):console.log(data)}/> 
           </View>

           <View style={{ flexDirection: "row",marginBottom: hp(1)}}>
           <Image style={styles.icon} source={require('../../utils/icons/boron.png')} />
           <Text style={styles.iconName}>{transcription[lang.language]["boron"]}</Text>
           <SoilText value={data.Boron} 
             onChange={(val) => { setData({
              ...data,
              Boron: val,
              
            })}}
            valueType="real"
            
            onLimitReached={(isMax,msg) => isMax==false?console.log("hello"):console.log(data)}/> 
           </View>

           <View style={{ flexDirection: "row",marginBottom: hp(1)}}>
           <Image style={styles.icon} source={require('../../utils/icons/copper.png')} />
           <Text style={styles.iconName}>{transcription[lang.language]["copper"]}</Text>
           <SoilText value={data.Copper} 
             onChange={(val) => { setData({
              ...data,
              Copper: val,
              
            })}}
            valueType="real"
            
            onLimitReached={(isMax,msg) => isMax==false?console.log("hello"):console.log(data)}/> 
           </View>

           <View style={{ flexDirection: "row",marginBottom: hp(1)}}>
           <Image style={styles.icon} source={require('../../utils/icons/manganese.png')} />
           <Text style={styles.iconName}>{transcription[lang.language]["manganese"]}</Text>
           <SoilText value={data.Manganese} 
            onChange={(val) => { setData({
              ...data,
              Manganese: val,
              
            })}}
            valueType="real"
            
            onLimitReached={(isMax,msg) => isMax==false?console.log("hello"):console.log(data)}/>
           </View>

           <View style={{ flexDirection: "row",marginBottom: hp(1)}}>
           <Image style={styles.icon} source={require('../../utils/icons/zinc.png')} />
           <Text style={styles.iconName}>{transcription[lang.language]["zinc"]}</Text>
           <SoilText value={data.Zinc} 
            onChange={(val) => { setData({
              ...data,
              Zinc: val,
              
            })}}
            valueType="real"
           
            onLimitReached={(isMax,msg) => isMax==false?console.log("hello"):console.log(data)}/> 
           </View>
           
          </ScrollView>
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

            <Text style={{ alignSelf: "center",width: wp(50),textAlign: "center", }}>{transcription[lang.language]["back"]}</Text>
             </TouchableOpacity> : 

             page === 2 ?
             <TouchableOpacity
             onPress={()=>{
               setPage(1)
               count=1
               }}>

            <Text style={{ alignSelf: "center",width: wp(50),textAlign: "center", }}>{transcription[lang.language]["back"]}</Text>
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
      width:"100%",
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
      bottom: hp(0),
      paddingTop: 30,
      backgroundColor: "#d0e8db",
      borderTopRightRadius: 30,
      borderTopLeftRadius: 30,
      padding: "5%",
      paddingBottom: "30%",
      height: hp(75),
      alignItems: "center",
      elevation: 20,
      opacity: 1,
      position:"absolute",
      width:"100%"
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
      textAlign:"center",
    },
    icon:{
      width:40,
      height:40,
    },
    iconName: {
      alignSelf: "center",
      color: "#444",
      fontSize: 18,
      paddingLeft:"5%",
      paddingRight:"5%",
      minWidth:hp('20%')
    },
    inputView: {
      width: "100%",
      height: hp('8%'),
      flexDirection: "row",
      alignSelf: "center",
      elevation:0,
      borderRadius: 5,
      borderBottomWidth:1,
      borderBottomColor:'rgba(54, 69, 79, 0.5)' ,
      alignItems: "center",
      marginBottom: 6,
      backgroundColor:"transparent",
      padding:hp('1%')
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
  