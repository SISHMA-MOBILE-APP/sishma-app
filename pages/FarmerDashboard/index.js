import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
import ItemCard from '../../components/ItemCard';

const FarmerDashboard = () => {
  return (
      <LinearGradient colors={['#128a49',"#128a49", "white", "white"]} start={{x:0, y:0}} end={{x: 1, y:0}} style={styles.container}>
          <LinearGradient style={styles.heading} start={{x:0, y:0}} end={{x: 1, y:0}} colors={["#128a49", "#0e6e3a"]}>
            <Text style={styles.title}>Dashboard</Text>
          </LinearGradient>
          <View style={styles.body}>
            <View style={styles.farmerdetails}>
              <Image source={require("../../assets/farmer.png")} style={{width: 100, height: 100}} />
              <View style={{paddingLeft: "3%", paddingTop: "3%"}}>
                <Text style={styles.name}>Farmer Name</Text>
                <Text style={styles.area}>Village, District, State</Text>
                <Text style={styles.area}>Mobile: +91 9876543120</Text>
              </View>
            </View>

            <ItemCard style={{width: "90%", height:60, alignSelf:"center", marginTop: "7%", flexDirection:"row"}}>
              <Image source={require("../../assets/meals.png")} style={{width: 35, height: 35, borderRadius: 6,marginRight: "2%"}} />
              <Text style={{fontSize: 17, color:"#3d3d3d", fontWeight: "bold", }}>Sishma Kit Number:</Text>
              <Text style={{fontSize: 16, fontWeight: "700", marginLeft: 5, color: "#0d6133"}}>12345</Text>
            </ItemCard>
            <View style={styles.cardcontainer}>
              <ItemCard>
                <Image source={require("../../assets/add-file.png")} style={{width: 55, height: 55, borderRadius: 6,marginRight: "2%"}} />
                <Text style={{fontSize: 17, marginTop: 15, color:"#3d3d3d", fontWeight: "bold", }}>Get Soil Details</Text>
              </ItemCard>
              <ItemCard>
                <Image source={require("../../assets/results.png")} style={{width: 55, height: 55, borderRadius: 6,marginRight: "2%"}} />
                <Text style={{fontSize: 17, marginTop: 15, color:"#3d3d3d", fontWeight: "bold", }}>Results</Text>
              </ItemCard>
            </View>
            <ItemCard style={{width: "90%", height:60, alignSelf:"center", marginTop: "5%", flexDirection:"row"}}>
              <Image source={require("../../assets/stadistics.png")} style={{width: 35, height: 35, borderRadius: 6,marginRight: "2%"}} />
              <Text style={{fontSize: 17, color:"#3d3d3d", fontWeight: "bold"}}>Show previous Analytics</Text>
            </ItemCard>
            <ItemCard style={{width: "90%", height:60, alignSelf:"center", marginTop: "5%", flexDirection:"row"}}>
              <Image source={require("../../assets/call.png")} style={{width: 35, height: 35, borderRadius: 6,marginRight: "2%"}} />
              <Text style={{fontSize: 17, color:"#3d3d3d", fontWeight: "bold", }}>Queries? Contact Us</Text>
            </ItemCard>
            <Text style={{alignSelf:"center", fontSize: 12, color: "#AEAEAE", position: "absolute", bottom: 10}}>
              <Image source={require("../../assets/sishma.png")} style={{width: 12, height: 12, borderRadius: 6}} />  SISHMA 2022</Text>
          </View>
          <StatusBar />
      </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container:{
    width: "100%",
    flex: 1,
    backgroundColor: "#128a49",
  },
  heading:{
    width: "100%",
    height: 70,
    justifyContent:"center",
    borderBottomRightRadius: 40,
  },
  body:{
    width: "100%",
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 65
  },
  farmerdetails:{
    flexDirection: "row",
    backgroundColor:"#e7f3ed",
    paddingLeft: "2%", 
    paddingRight: "3%", 
    marginTop: "3%",
    paddingTop: "3%",
    paddingBottom: "3%",
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    marginLeft: "3%",
    borderWidth: 1,
    borderColor:"green"
  },
  name:{
    fontSize: 28,
    fontWeight: "bold"
  },
  area:{
    fontSize: 15,
    color: "#7f7f7f"
  },
  cardcontainer: {
    width:"100%",
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center",
    marginTop:"10%"
  },
  title:{
    marginLeft: "4%",
    color: "#d0e8db",
    fontSize: 35,
    fontWeight: "bold",
  }
})

export default FarmerDashboard;