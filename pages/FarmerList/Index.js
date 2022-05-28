import { StyleSheet, Text, View, FlatList, Button, Modal, ImageBackground,StatusBar,Image } from 'react-native'
import React, { useState } from 'react'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ScrollView } from 'react-native';
import FarmerDashboard from '../FarmerDashboard';
import { TouchableOpacity } from 'react-native';
import FieldOfficerSuggestion from '../FieldOfficerSuggestion';
import { LinearGradient } from "expo-linear-gradient";



const List = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const data = [
    { id: 'Sno.', name: 'Farmer Name', kitNo: 'Kit no.', j: 'Soil Details', k: 'Advice' },
    { id: 1, name: 'Sukesh Kumar', kitNo: 555555, j: 'View', k: 'View' },
    { id: 2, name: 'Hareesh Ketu', kitNo: 552555, j: 'View', k: 'View' },
    { id: 3, name: 'Raman Nivasan', kitNo: 553555, j: 'View', k: 'View' },
    { id: 4, name: 'Sukesh Kumar Sahoo', kitNo: 585555, j: 'View', k: 'View' },
    { id: 5, name: 'Sukesh Kumar', kitNo: 555755, j: 'View', k: 'View' },
    { id: 6, name: 'Sukesh Kumar', kitNo: 555755, j: 'View', k: 'View' },
    { id: 7, name: 'Sukesh Kumar', kitNo: 555755, j: 'View', k: 'View' },
    { id: 8, name: 'Sukesh Kumar', kitNo: 555755, j: 'View', k: 'View' },
    { id: 9, name: 'Sukesh Kumar', kitNo: 555755, j: 'View', k: 'View' },
    { id: 10, name: 'Sukesh Kumar', kitNo: 555755, j: 'View', k: 'View' },
    { id: 11, name: 'Sukesh Kumar', kitNo: 555755, j: 'View', k: 'View' },
    { id: 12, name: 'Sukesh Kumar', kitNo: 555755, j: 'View', k: 'View' },
    { id: 13, name: 'Sukesh Kumar', kitNo: 555755, j: 'View', k: 'View' },
  ]
  const image = [
    {
      imageUrl: require("../../assets/sishma.png")
    }]
    const [disabled,setDisabled]=useState(false)
  const item = ({ item }) => {

    return (
      
      <View style={{ flexDirection: 'row'}}>

        <View style={{ width: wp("12%"), height: hp("12.5%"), alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: hp('2%'), fontWeight: 'bold' }}>{item.id}</Text></View>
        <View style={{width:wp('0.5%'),backgroundColor:'black'}} />
       
        <View style={{ width: wp("30%"), alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: hp('2%'), fontWeight: 'bold' }}>{item.name}</Text></View>
        <View style={{width:wp('0.5%'),backgroundColor:'black'}} />
        <View style={{ width: wp('19.5%'), alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: hp('2%'), fontWeight: 'bold' }}>{item.kitNo}</Text></View>
        <View style={{width:wp('0.5%'),backgroundColor:'black'}} />
        <TouchableOpacity  onPress={() => item.id > 0 ? setModalVisible(true):console.log('Nope')} style={{ width: wp('14.5%'), alignItems: 'center', justifyContent: 'center' }}><Text style={{ fontSize: hp('2%'), fontWeight: 'bold',color:'black' }} >{item.j}</Text></TouchableOpacity>
        <View style={{width:wp('0.5%'),backgroundColor:'black'}} />
        <TouchableOpacity onPress={() => item.id > 0 ? setModalVisible1(true) : console.log('Nope')} style={{ width: wp('22%'), alignItems: 'center', justifyContent: 'center' }}>{item.id > 0 ? <Text style={{ fontSize: hp('2%'), fontWeight: 'bold',color:'black'}}>Respond</Text> : <Text style={{ fontSize: hp('2%'), fontWeight: 'bold' }}>Suggest</Text>}</TouchableOpacity>
        


      </View>

    )
  }

  return (
    <>
    <ScrollView  style={[{ backgroundColor: 'white',padding:0,margin:0 },styles.AndroidSafeArea]} horizontal={true} >

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#107c42' }}>
       
          <LinearGradient 
        colors={["green", "white",'green']}
       >
          
          <ImageBackground source={require("../../assets/sishma-white.png")} style={{width:wp('100%'),height:hp('100%'),flex:1,justifyContent: "center",alignItems:'center',opacity:.075}} resizeMode="contain"/>
         
          <FlatList data={data}
            renderItem={item}
            keyExtractor={(item, index) => index.toString()}
          />
         
       </LinearGradient>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}>

        <FarmerDashboard />
        <Button title="close" onPress={() => setModalVisible(false)}></Button>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible1}>
        <Button title="Confirm" onPress={() => setModalVisible1(false)}></Button>
        <FieldOfficerSuggestion />
      </Modal>
     
    </ScrollView>
    </>
  )
}

export default List

const styles = StyleSheet.create({ AndroidSafeArea: {
  paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
}, image: {
  flex: 1,
  justifyContent: "center"
},
})