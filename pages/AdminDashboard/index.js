import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Modal,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import React, { useContext, useEffect, useState } from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import FieldOfficerSuggestion from "../FieldOfficerSuggestion";
import { LinearGradient } from "expo-linear-gradient";
import { PieChart, BarChart } from "react-native-chart-kit";
import { User } from "../../providers/userProvider";
import { gql, useQuery } from "@apollo/client";

const GET_ALL_FARMER = gql`
query {
  getAllFarmer{
    name,
    kitno
    aadhar
  }
}
`
const GET_ALL_OFFICERS = gql`
query {
  getAllFieldOfficer{
    name,
    phone
    aadhar
  }
}
`

const AdminDashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [page, setPage] = useState(1);
  const [farmers, setFarmers] = useState([]);
  const [farmerEditVisible, setFarmerEditVisible] = useState(false)
  const [officers, setOfficers] = useState([]);
  const [surveys, setSurveys] = useState([]);
  const userContext = useContext(User);

  const farmersFetch = useQuery(GET_ALL_FARMER);
  const officersFetch = useQuery(GET_ALL_OFFICERS);
  const farmerdata = [];
  const fieldOfficerdata = [];


  const itemFarmer = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <View
          style={{
            width: wp("11%"),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: hp("2%"), fontWeight: "bold" }}>
            {index+1}
          </Text>
        </View>
  
        <View
          style={{
            width: wp("30%"),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: hp("2%") }}>{item.name}</Text>
        </View>
        <View
          style={{
            width: wp("18"),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: hp("2%") }}>{item.kitno}</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            item.id > 0 ? setModalVisible(true) : console.log("Nope")
          }
          style={[styles.details, {width:wp("17")}]}
        >
          <Text
            style={{
              fontSize: hp("2%"),
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            View
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>setFarmerEditVisible(true)}
          style={[styles.respond, {width: wp("17.5")}]}
        >
          <Text
            style={{ fontSize: hp("2%"), color: "white", fontWeight: "bold" }}
          >
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const itemOfficer = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <View
          style={{
            width: wp("5%"),
            marginLeft:10,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: hp("2%"), fontWeight: "bold" }}>
            {index+1}
          </Text>
        </View>
  
        <View
          style={{
            width: wp("30%"),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: hp("2%") }}>{item.name}</Text>
        </View>
        <View
          style={{
            width: wp("27"),
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: hp("2%") }}>{item.phone}</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            item.id > 0 ? setModalVisible(true) : console.log("Nope")
          }
          style={styles.details}
        >
          <Text
            style={{
              fontSize: hp("2%"),
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            View
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            item.id > 0 ? setModalVisible1(true) : console.log("Nope")
          }
          style={styles.respond}
        >
          <Text
            style={{ fontSize: hp("2%"), color: "white", fontWeight: "bold" }}
          >
            Edit
          </Text>
        </TouchableOpacity>
      </View>
    );
  };



  useEffect(() => {
    farmersFetch.refetch()
      .then(result => {
        if (result.data.getAllFarmer) {
          result.data.getAllFarmer.forEach(val => {
            farmerdata.push({
              name: val.name,
              kitno: val.kitno,
              aadhar: val.aadhar
            })
          })
          setFarmers(farmerdata);
        }
      })
      // .then(() => console.log(farmerdata))
    officersFetch.refetch()
      .then(result => {
        if (result.data.getAllFieldOfficer) {
          result.data.getAllFieldOfficer.forEach(val => {
            fieldOfficerdata.push({
              name: val.name,
              phone: val.phone,
              aadhar: val.aadhar
            })
          })
          setOfficers(fieldOfficerdata);
        }
      })
      .then(() => console.log(fieldOfficerdata))
    
  }, [])
  const npmdata = [
    {
      name: "Nitrogen",
      population: 76.5,
      color: "#128a49",
      legendFontColor: "#6d6d6d",
      legendFontSize: 11,
    },
    {
      name: "Phosphorus",
      population: 12.5,
      color: "#3BACB6",
      legendFontColor: "#6d6d6d",
      legendFontSize: 11,
    },
    {
      name: "Potassium",
      population: 12.7,
      color: "#D8E9A8",
      legendFontColor: "#6d6d6d",
      legendFontSize: 11,
    },
  ];
  const nutrients = {
    labels: ["Fe", "Mg", "Ca", "I"],
    datasets: [
      {
        data: [20, 45, 28, 80],
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientTo: "white",
    color: (opacity = 1) => `green`,
  };

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
            source={require("../../assets/admin1.png")}
            style={{ width: 100, height: 100 }}
          />
          <View style={{ paddingLeft: "3%" }}>
            <Text style={styles.name}>{userContext.userData.name}</Text>
            <Text style={styles.area}>{
              userContext.userData.village + " " +
              userContext.userData.district + " " +
              userContext.userData.state
            }</Text>
            <Text style={styles.area}>Mobile: {userContext.userData.phone}</Text>
            <Text
              style={{ fontSize: 15, color: "#3d3d3d", fontWeight: "bold" }}
            >
              Number of requests: 12345
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row", marginTop: 10, width: "93%", alignSelf: "center", borderRadius: 10, backgroundColor: "#41a16d" }}>
          <TouchableOpacity onPress={() => setPage(1)} style={[styles.tabs, { backgroundColor: page === 1 ? "#128a49" : "#41a16d" }]}><Text style={styles.tabstext}>Farmers</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setPage(2)} style={[styles.tabs, { backgroundColor: page === 2 ? "#128a49" : "#41a16d" }]}><Text style={styles.tabstext}>Field Officers</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => setPage(3)} style={[styles.tabs, { backgroundColor: page === 3 ? "#128a49" : "#41a16d" }]}><Text style={styles.tabstext}>Registered Details</Text></TouchableOpacity>
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
              {page === 1 ? "Farmer Name" : page === 2 ? "Officer Name" : "Survey No." }
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
              {page===2 ? "Phone" : "Kit No"}
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
        {
          page === 1 &&
          <FlatList
            data={farmers}
            renderItem={itemFarmer}
            keyExtractor={(item, index) => index.toString()}
          />
        }
        {
          page === 2 &&
          <FlatList
            data={officers}
            renderItem={itemOfficer}
            keyExtractor={(item, index) => index.toString()}
          />
        }
        {
          page === 3 &&
          <FlatList
            data={farmers}
            renderItem={itemFarmer}
            keyExtractor={(item, index) => index.toString()}
          />
        }
      </View>


      {/* EDIT FARMER DETAILS  */}
      <Modal animationType="fade" transparent={true} visible={farmerEditVisible}>
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
              Farmer Name
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setFarmerEditVisible(false)}
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

       {/* GET SURVEY DETIALS IN A MODAL  */}

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
            data={npmdata}
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
            data={nutrients}
            width={(Dimensions.get("screen").width * 3) / 4}
            height={180}
            chartConfig={chartConfig}
          // verticalLabelRotation={30}
          />
          <Text style={styles.modalval}>PH: 10.6</Text>
          <Text style={styles.modalval}>Soil Moisture: 35%</Text>
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
};

export default AdminDashboard;

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
    borderTopLeftRadius: 65,
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
    alignSelf: "center",
  },
  farmerdetails: {
    flexDirection: "row",
    backgroundColor: "#e7f3ed",
    paddingLeft: "2%",
    paddingRight: "3%",
    marginTop: "3%",
    paddingTop: "3%",
    paddingBottom: "3%",
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    marginLeft: "3%",
    borderWidth: 1,
    borderColor: "green",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  area: {
    fontSize: 13,
    color: "#7f7f7f",
  },
  details: {
    width: wp("13%"),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#41a16d",
    elevation: 5,
    backgroundColor: "#e7f3ed",
    // backgroundColor: "#41a16d",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  respond: {
    width: wp("15"),
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    backgroundColor: "#41a16d",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  soildetials: {
    width: "85%",
    height: "90%",
    backgroundColor: "white",
    alignSelf: "center",
    top: "5%",
    borderRadius: 10,
    // borderWidth: 1,
    elevation: 300,
    // borderColor: "green"
  },
  modalval: {
    marginLeft: 15,
    marginTop: 10,
    marginRight: 15,
    paddingVertical: 5,
    backgroundColor: "#d0e8db",
    paddingLeft: 10,
    borderRadius: 10,
    fontSize: 18,
    borderColor: "#89c5a4",
    borderWidth: 1,
    color: "#666",
  },
  tabs: {
    width: "33.33%",
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#41a16d",
    borderRadius: 10
  },
  tabstext: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  }
});
