import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { View, Text, StyleSheet, StatusBar, Animated, Image, Dimensions, ImageBackground } from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import ItemCard from '../../components/ItemCard';

const images = [
  {
    imageUrl: require("../../assets/Pension-scheme-1.jpg")
  },
  {
    imageUrl: require("../../assets/pm_img.jpg")
  },
  {
    imageUrl: require("../../assets/pm_img2.jpg")
  },
  {
    imageUrl: require("../../assets/pm_img3.jpg")
  },
]

const FarmerDashboard = () => {
  const [index, setIndex] = React.useState(0);
  const carousel = React.useRef(null);
  const grow = React.useRef(new Animated.Value(0)).current;
  const slideLeft = React.useRef(new Animated.Value(200)).current;
  React.useEffect(()=>{
    Animated.timing(slideLeft,{
      toValue: 1,
      duration: 1500,
      useNativeDriver: false
    }).start()
    Animated.timing(grow, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true
    }).start()
  })
  return (
    <LinearGradient colors={['#128a49', "#128a49", "white", "white"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.container}>
      <LinearGradient style={styles.heading} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#128a49", "#0e6e3a"]}>
        <Text style={styles.title}>Dashboard</Text>
      </LinearGradient>
      <View style={styles.body}>
        <Animated.View style={[styles.farmerdetails, {left: slideLeft }]} >
          <Image source={require("../../assets/farmer.png")} style={{ width: 100, height: 100 }} />
          <View style={{ paddingLeft: "3%", }}>
            <Text style={styles.name}>Farmer Name</Text>
            <Text style={styles.area}>Village, District, State</Text>
            <Text style={styles.area}>Mobile: +91 9876543120</Text>
            <Text style={{ fontSize: 15, color: "#3d3d3d", fontWeight: "bold" }}>Sishma Kit Number: 12345</Text>
          </View>
        </Animated.View>
        <View style={{height:"32%"}}>

        <Carousel
          data={images}
          ref={carousel}
          autoplay
          autoplayDelay={10000}
          layoutCardOffset={9}
          sliderWidth={Dimensions.get("window").width}
          sliderHeight={100}
          itemWidth={Math.round((Dimensions.get("window").width + 80) * 0.7)}
          inactiveSlideShift={0}
          useScrollView={true}
          onSnapToItem={(index)=>setIndex(index)}
          renderItem={({ item }) => (
            <View style={styles.imageContainer}>
              <ImageBackground source={item.imageUrl} style={styles.image} resizeMode="stretch">
                <LinearGradient colors={['transparent',"#128a4995", "#128a49"]} style={{position: "absolute", bottom: 0, width:"100%"}}>
                  <View style={{height:140, justifyContent:"center"}}>
                    <Text style={{color:"white", fontSize:16,marginTop: 75, borderLeftWidth: 10, borderColor: "white", paddingVertical: 5}}>
                      {"     "}Some agriculture related text here!!!
                    </Text>
                  </View>
                </LinearGradient>
              </ImageBackground>
            </View>
          )} />
          </View>
        <Pagination
        dotsLength={images.length}
        containerStyle={{paddingTop:0, paddingBottom: 0}}
        activeDotIndex={index}
        carouselRef={carousel}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          marginHorizontal: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.92)'
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
        <View style={styles.cardcontainer}>
          <ItemCard>
            <Animated.Image source={require("../../assets/add-file.png")} style={{ width: 55, height: 55, borderRadius: 6, marginRight: "2%", opacity: grow  }} />
            <Text style={{ fontSize: 17, marginTop: 15, color: "#3d3d3d", fontWeight: "bold", }}>Get Soil Details</Text>
          </ItemCard>
          <ItemCard>
            <Animated.Image source={require("../../assets/results.png")} style={{ width: 55, height: 55, borderRadius: 6, marginRight: "2%", opacity: grow  }} />
            <Text style={{ fontSize: 17, marginTop: 15, color: "#3d3d3d", fontWeight: "bold", }}>Results</Text>
          <Text style={{position:"absolute", fontSize: 10, fontWeight:"bold", right: "5%",borderRadius:10, backgroundColor:"green", color:"white", paddingHorizontal: 5, top: "4%"}}>No Notification</Text>
          </ItemCard>
        </View>
        <ItemCard style={{ width: "90%", height: 60, alignSelf: "center", marginTop: "5%", flexDirection: "row" }}>
          <Animated.Image source={require("../../assets/call.png")} style={{ width: 35, height: 35, borderRadius: 6, marginRight: "2%", opacity: grow }} />
          <Text style={{ fontSize: 17, color: "#3d3d3d", fontWeight: "bold", }}>Queries? Contact Us</Text>
        </ItemCard>
        <Text style={{ alignSelf: "center", fontSize: 12, color: "#AEAEAE", position: "absolute", bottom: 10 }}>
          <Image source={require("../../assets/sishma.png")} style={{ width: 12, height: 12, borderRadius: 6 }} />  SISHMA 2022</Text>
      </View>
      <StatusBar />
    </LinearGradient>
  )
}

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
    borderColor: "green"
  },
  name: {
    fontSize: 28,
    fontWeight: "bold"
  },
  area: {
    fontSize: 13,
    color: "#7f7f7f"
  },
  cardcontainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginTop: 12
  },
  title: {
    marginLeft: "4%",
    color: "#d0e8db",
    fontSize: 35,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 10,
  },
  imageContainer: { 
    height: "90%", 
    borderRadius: 10, 
    backgroundColor: "red", 
    overflow: "hidden", 
    alignItems: "center", 
    justifyContent: "center",
    marginTop: 12,
    borderWidth: 1.5,
    borderColor: "#128a49"
  }
})

export default FarmerDashboard;