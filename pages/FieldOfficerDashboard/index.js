import { StyleSheet, Text, View, FlatList, Button, Modal, StatusBar, Image, Dimensions } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native';
import FieldOfficerSuggestion from '../FieldOfficerSuggestion';
import { LinearGradient } from "expo-linear-gradient";
import { PieChart, BarChart } from 'react-native-chart-kit'
import { User } from '../../providers/userProvider';
import { gql, useQuery } from '@apollo/client';

const GET_ALL_RESULTS = gql`
query{
	getAllSoilDetails{
    farmername,
  	kit,
    nitrogen,
    potassium,
    phosphorus,
    iron,
    manganese,
   	copper
    boron,
    pH,
    moisture,
  }
}
`

const FieldOfficerDashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [dataIndex, setDataIndex] = useState(0);
  const [soilData, setSoilData] = useState([])
  const getSoilDetailsFetch = useQuery(GET_ALL_RESULTS);

  useEffect(()=>{
    console.log("here")
    getSoilDetailsFetch.refetch()
    .then(result=>{
      if(result.data.getAllSoilDetails){
        const data = [];
        result.data.getAllSoilDetails.forEach(val=>data.push({
          name: val.farmername,
          kit: val.kit,
          j:"View",
          k: "View",
          nitrogen: val.nitrogen,
          potassium: val.postassium,
          phosphorus: val.phosphorus,
          iron: val.iron,
          manganese: val.manganese,
          copper: val.copper,
          boron: val.boron,
          pH: val.pH,
          moisture: val.moisture,
        }))
        console.log(data);
        setSoilData(data);
      }
    })
  }, []);

  const userContext = useContext(User);
  const chartConfig = {
    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    color: (opacity = 1) => `green`,

  }
  const item = ({ item, index }) => {

    return (

      <View style={styles.item}>

        <View style={{ width: wp("11%"), alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: hp('2%'), fontWeight: 'bold' }}>{index+1}</Text>
        </View>

        <View style={{ width: wp("30%"), alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: hp('2%') }}>{item.name}</Text>
        </View>
        <View style={{ width: wp('18'), alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: hp('2%') }}>{item.kitNo}</Text>
        </View>
        <TouchableOpacity onPress={() =>{
          console.log(item.nitrogen, item.phosphorus, item.potassium)
          setDataIndex({
            npmData:[ { name: 'Nitrogen', population: item.nitrogen === undefined? 0: Number(item.nitrogen), color: '#128a49', legendFontColor: '#6d6d6d', legendFontSize: 11 },
              { name: 'Phosphorus', population: item.phosphorus === undefined? 0: Number(item.phosphorus), color: '#3BACB6', legendFontColor: '#6d6d6d', legendFontSize: 11 },
              { name: 'Potassium', population: item.potassium === undefined? 0: Number(item.potassium), color: '#D8E9A8', legendFontColor: '#6d6d6d', legendFontSize: 11 }
            ],
            nutrients: {
              labels: ["Fe", "Mn", "Cu", "B",],
              datasets: [
                {
                  data: [
                    item.iron === undefined ? 0: Number(item.iron), 
                    item.manganese === undefined ? 0: Number(item.manganese), 
                    item.copper === undefined ? 0: Number(item.copper), 
                    item.boron === undefined ? 0: Number(item.boron),
                  ]
                }
              ]
            },
            pH: item.pH === undefined ? 0: item.pH,
            moisture: item.moisture === undefined ? 0: item.moisture
          })
          setModalVisible(true)
        }} style={styles.details}>
          <Text style={{ fontSize: hp('2%'), color: 'black', fontWeight: "bold", textAlign: "center" }} >View</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => item.id > 0 ? setModalVisible1(true) : console.log('Nope')} style={styles.respond}>
          <Text style={{ fontSize: hp('2%'), color: 'white', fontWeight: "bold" }}>Respond</Text>
        </TouchableOpacity>

      </View>

    )
  }

  return (
    <LinearGradient
      colors={["#128a49", "#128a49", "white", "white"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}
    >
      <LinearGradient
        style={styles.heading}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#128a49", "#0e6e3a"]}
      >
        <Text style={styles.title}>Dashboard</Text>
      </LinearGradient>
      <View style={styles.body}>
        <View style={styles.farmerdetails}>
          <Image
            source={require("../../assets/officer.png")}
            style={{ width: 90, height: 90 }}
          />
          <View style={{ paddingLeft: "3%" }}>
            <Text style={styles.name}>FO Name</Text>
            <Text style={styles.area}>Village, District, State</Text>
            <Text style={styles.area}>Mobile: +91 9876543120</Text>
            <Text
              style={{ fontSize: 15, color: "#3d3d3d", fontWeight: "bold" }}
            >
              Number of requests: 12345
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.item,
            { backgroundColor: "#2a965b", marginBottom: 0, marginTop: 10 },
          ]}
        >
          <View
            style={{
              width: wp("11.5%"),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontSize: hp("2%"), fontWeight: "bold", color: "white" }}
            >
              S.No.
            </Text>
          </View>

          <View
            style={{
              width: wp("30%"),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontSize: hp("2%"), fontWeight: "bold", color: "white" }}
            >
              Farmer Name
            </Text>
          </View>
          <View
            style={{
              width: wp("18%"),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontSize: hp("2%"), fontWeight: "bold", color: "white" }}
            >
              Kit No.
            </Text>
          </View>
          <View
            style={{
              width: wp("14.5"),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontSize: hp("2%"), fontWeight: "bold", color: "white" }}
            >
              Details
            </Text>
          </View>
          <View
            style={{
              width: wp("19.5%"),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ fontSize: hp("2%"), fontWeight: "bold", color: "white" }}
            >
              Respond
            </Text>
          </View>
        </View>
        <FlatList
          data={soilData}
          renderItem={item}
          keyExtractor={(item, index) => index}
        />
      </View>

      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.soildetials}>
          <View
            style={{
              marginTop: 15,
              marginLeft: "5%",
              paddingBottom: 10,
              marginRight: "5%",
              borderBottomWidth: 2,
              borderColor: "#d0e8db",
            }}
          >
            <Text
              style={[
                styles.name,
                { fontSize: 18, fontWeight: "bold", color: "#4d4d4d" },
              ]}
            >
              FO Name
            </Text>
            <Text style={styles.area}>Village, District, State</Text>
            <Text style={styles.area}>Mobile: +91 9876543120</Text>
            <Text style={{ fontSize: 15, color: "#3d3d3d" }}>
              SISHMA Kit No.: 12345
            </Text>
          </View>
          <PieChart
            data={dataIndex.npmData}
            width={(Dimensions.get("screen").width * 3.4) / 4}
            height={180}
            paddingLeft={10}
            chartConfig={chartConfig}
            accessor={"population"}
            backgroundColor={"transparent"}
            center={[0, 0]}
            absolute
          />

          <BarChart
            style={{ backgroundColor: "white", paddingLeft: 15 }}
            data={dataIndex.nutrients}
            width={(Dimensions.get("screen").width * 3) / 4}
            height={180}
            chartConfig={chartConfig}
            // verticalLabelRotation={30}
          />
          <Text style={styles.modalval}>PH: {dataIndex.pH}</Text>
          <Text style={styles.modalval}>Soil Moisture: {dataIndex.moisture}%</Text>
          <TouchableOpacity
            style={[
              styles.modalval,
              {
                paddingLeft: 0,
                elevation: 1,
                backgroundColor: "#128a49",
                alignItems: "center",
                paddingVertical: 10,
              },
            ]}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
              Respond
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={{
              position: "absolute",
              right: 15,
              top: 15,
              borderRadius: 20,
              borderWidth: 0.7,
              borderColor: "green",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#e7f3ed",
            }}
          >
            <Ionicons name="close" style={{ fontSize: 30 }} color="black" />
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal animationType="fade" transparent={true} visible={modalVisible1}>
        <Button
          color="#128a49"
          title="Confirm"
          onPress={() => setModalVisible1(false)}
        ></Button>
        <FieldOfficerSuggestion />
      </Modal>
      <StatusBar />
    </LinearGradient>
  );
}

export default FieldOfficerDashboard

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#128a49",
  },
  heading: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    borderBottomRightRadius: 40,
  },
  body: {
    width: "100%",
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 65
  },
  title: {
    marginLeft: "4%",
    color: "#d0e8db",
    fontSize: 35,
    fontWeight: "bold",
  },
  item: {
    flexDirection: "row",
    backgroundColor: "#e7f3ed",
    borderRadius: 5,
    marginTop: 2.5,
    marginBottom: 2.5,
    height: 60,
    width: "93%",
    alignSelf: 'center'
  },
  farmerdetails: {
    flexDirection: "row",
    backgroundColor: "#e7f3ed",
    paddingLeft: "5%",
    paddingRight: "3%",
    marginTop: "3%",
    paddingTop: "3%",
    paddingBottom: "3%",
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    marginLeft: "3%",
    borderWidth: 1,
    borderColor: "green"
  },
  name: {
    fontSize: 20,
    fontWeight: "bold"
  },
  area: {
    fontSize: 13,
    color: "#7f7f7f"
  },
  details: {
    width: wp('14.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "#41a16d",
    elevation: 5,
    backgroundColor: "#e7f3ed",
    // backgroundColor: "#41a16d",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  respond: {
    width: wp('19.5%'),
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    backgroundColor: "#41a16d",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  soildetials: {
    width: '85%',
    height: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    top: "5%",
    borderRadius: 10,
    // borderWidth: 1,
    elevation: 300,
    // borderColor: "green"
  },
  modalval:{
    marginLeft: 15,
    marginTop: 10,
    marginRight: 15,
    paddingVertical:5,
    backgroundColor:"#d0e8db",
    paddingLeft: 10,
    borderRadius: 10,
    fontSize: 18,
    borderColor: "#89c5a4",
    borderWidth: 1,
    color:"#666"
  }
})