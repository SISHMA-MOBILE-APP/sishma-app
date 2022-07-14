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
import React, { useState } from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import FieldOfficerSuggestion from "../FieldOfficerSuggestion";
import { LinearGradient } from "expo-linear-gradient";
import { PieChart, BarChart } from "react-native-chart-kit";

const AdminDashboard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [page, setPage] = useState(1);
  const data = [
    { id: 1, name: "Sukesh Kumar", kitNo: 555555, j: "View", k: "View" },
    { id: 2, name: "Hareesh Ketu", kitNo: 552555, j: "View", k: "View" },
    { id: 3, name: "Raman Nivasan", kitNo: 553555, j: "View", k: "View" },
    { id: 4, name: "Sukesh Kumar Sahoo", kitNo: 585555, j: "View", k: "View" },
    { id: 5, name: "Sukesh Kumar", kitNo: 555755, j: "View", k: "View" },
    { id: 6, name: "Sukesh Kumar", kitNo: 555755, j: "View", k: "View" },
    { id: 7, name: "Sukesh Kumar", kitNo: 555755, j: "View", k: "View" },
    { id: 8, name: "Sukesh Kumar", kitNo: 555755, j: "View", k: "View" },
    { id: 9, name: "Sukesh Kumar", kitNo: 555755, j: "View", k: "View" },
    { id: 10, name: "Sukesh Kumar", kitNo: 555755, j: "View", k: "View" },
    { id: 11, name: "Sukesh Kumar", kitNo: 555755, j: "View", k: "View" },
    { id: 12, name: "Sukesh Kumar", kitNo: 555755, j: "View", k: "View" },
    { id: 13, name: "Sukesh Kumar", kitNo: 555755, j: "View", k: "View" },
  ];
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
  const item = ({ item, index }) => {
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
            {index}
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
          <Text style={{ fontSize: hp("2%") }}>{item.kitNo}</Text>
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
            {item.j}
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
            Respond
          </Text>
        </TouchableOpacity>
      </View>
    );
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
            <Text style={styles.name}>Admin</Text>
            <Text style={styles.area}>Village, District, State</Text>
            <Text style={styles.area}>Mobile: +91 9876543120</Text>
            <Text
              style={{ fontSize: 15, color: "#3d3d3d", fontWeight: "bold" }}
            >
              Number of requests: 12345
            </Text>
          </View>
        </View>

        <View style={{flexDirection: "row", marginTop:10, width: "93%", alignSelf:"center", borderRadius: 10, backgroundColor:"#41a16d"}}>
          <TouchableOpacity onPress={()=>setPage(1)} style={[styles.tabs, {backgroundColor: page === 1 ? "#128a49":"#41a16d"}]}><Text style={styles.tabstext}>Farmers</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>setPage(2)} style={[styles.tabs, {backgroundColor: page === 2 ? "#128a49":"#41a16d"}]}><Text style={styles.tabstext}>Field Officers</Text></TouchableOpacity>
          <TouchableOpacity onPress={()=>setPage(3)} style={[styles.tabs, {backgroundColor: page === 3 ? "#128a49":"#41a16d"}]}><Text style={styles.tabstext}>Registered Details</Text></TouchableOpacity>
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
              Officer Name
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
              Id
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
          data={data}
          renderItem={item}
          keyExtractor={(item, index) => index.toString()}
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
    width: wp("14.5%"),
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
    width: wp("19.5%"),
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
  tabs:{
    width: "33.33%",
    paddingVertical: 8,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#41a16d",
    borderRadius: 10
  },
  tabstext:{
    color:"white",
    fontWeight:"bold",
    textAlign:"center"
  }
});
