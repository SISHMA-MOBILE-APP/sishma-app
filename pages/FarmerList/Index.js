import { StyleSheet, Text, View,FlatList,Button,Modal,ImageBackground } from 'react-native'
import React,{useState} from 'react'

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
const data=[
  {id:'Sno.',name:'Farmer Name',kitNo:'Kit no.',j:'Soil Details',k:'Advice'},
  {id:1,name:'Sukesh Kumar',kitNo:555555,j:'View',k:'View'},
  {id:2,name:'Hareesh Ketu',kitNo:552555,j:'View',k:'View'},
  {id:3,name:'Raman Nivasan',kitNo:553555,j:'View',k:'View'},
  {id:4,name:'Sukesh Kumar Sahoo',kitNo:585555,j:'View',k:'View'},
  {id:5,name:'Sukesh Kumar',kitNo:555755,j:'View',k:'View'},
  {id:6,name:'Sukesh Kumar',kitNo:555755,j:'View',k:'View'},
  {id:7,name:'Sukesh Kumar',kitNo:555755,j:'View',k:'View'},
  {id:8,name:'Sukesh Kumar',kitNo:555755,j:'View',k:'View'},
  {id:9,name:'Sukesh Kumar',kitNo:555755,j:'View',k:'View'},
  {id:10,name:'Sukesh Kumar',kitNo:555755,j:'View',k:'View'},
  {id:11,name:'Sukesh Kumar',kitNo:555755,j:'View',k:'View'},
  {id:12,name:'Sukesh Kumar',kitNo:555755,j:'View',k:'View'},
  {id:13,name:'Sukesh Kumar',kitNo:555755,j:'View',k:'View'},
]
const image = { uri: "https://reactjs.org/logo-og.png" };
const item=({item})=>{

return(
 
<View style={{flexDirection:'row'}}>

<View style={{width:wp("10%"),height:hp("20%"),alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:hp('2%'),fontWeight:'bold'}}>{item.id}</Text></View> 
  
 <View style={{width:wp("30%"),alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:hp('2%'),fontWeight:'bold'}}>{item.name}</Text></View> 
 <View style={{width:wp('20%'),alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:hp('2%'),fontWeight:'bold'}}>{item.kitNo}</Text></View> 
 <TouchableOpacity   onPress={() =>item.id>0?setModalVisible(true):console.log('Nope')} style={{width:wp('15%'),alignItems:'center',justifyContent:'center'}}><Text style={{fontSize:hp('2%'),fontWeight:'bold'}} >{item.j}</Text></TouchableOpacity>
 <TouchableOpacity onPress={() =>item.id>0?setModalVisible1(true):console.log('Nope')} style={{width:wp('25%'),alignItems:'center',justifyContent:'center'}}>{item.id>0?<Text style={{fontSize:hp('2%'),fontWeight:'bold'}}>Respond</Text>:<Text style={{fontSize:hp('2%'),fontWeight:'bold'}}>Suggest</Text>}</TouchableOpacity>



</View>

)
}

  return (
   <ScrollView  contentContainerStyle={{ }}  style={{backgroundColor:'#0bab64'}} horizontal={true} >
   
 
  <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:'20%',backgroundColor:'#107c42'}}>
  <LinearGradient
        start={{ x: 0.0, y: 0.25 }}
        end={{ x: 0.5, y: 1.0 }}
        locations={[0, 0.5, 0.6]}
        colors={['#80ff72','#0bab64','#3bb78f']}
    
      > 
  
<FlatList data={data} 
renderItem={item}
keyExtractor={(item,index)=>index.toString()}
/>
</LinearGradient>
</View>

<Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}>

<FarmerDashboard/>
<Button title="close" onPress={()=>setModalVisible(false)}></Button>
</Modal>
<Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible1}>
<Button title="Confirm" onPress={()=>setModalVisible1(false)}></Button>
<FieldOfficerSuggestion/>
</Modal>

</ScrollView>
  )
}

export default List

const styles = StyleSheet.create({})