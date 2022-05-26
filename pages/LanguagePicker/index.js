import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Text, View, StyleSheet, Image } from 'react-native';
import ItemCard from '../../components/ItemCard';
import { Language } from '../../providers/languageProvider';

const LanguagePicker = (props) => {
    const lang = React.useContext(Language);
    const language = (l)=>{
        lang.setLanguage(l);
        props.navigation.navigate("Login");
    }
    return (
        <LinearGradient colors={['#128a49', "#128a49", "white", "white"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.container}>
            <LinearGradient style={styles.heading} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["#128a49", "#0e6e3a"]}>
                <Text style={styles.title}>Pick Your Language</Text>
                <Text style={styles.title}>भाषा चुनें</Text>
                <Text style={styles.title}>மொழியை தேர்ந்தெடு</Text>
            </LinearGradient>
            <View style={styles.body}>
                <ItemCard style={{ width: "85%", height: 60, borderRadius: 30, alignSelf: "center", marginTop: 23, flexDirection: "row" }}>
                    <Image source={require("../../assets/languages.png")} style={{ width: 35, height: 35, borderRadius: 6, marginRight: "2%" }} />
                    <Text style={{ fontSize: 17, color: "#3d3d3d", fontWeight: "bold", }}>Available Languages:</Text>
                </ItemCard>

                <View style={styles.cardcontainer}>
                    <ItemCard onClick={()=>language("english")}>
                        <Image source={require("../../assets/eng.png")} style={{ width: 55, height: 55, borderRadius: 6, marginRight: "2%" }} />
                        <Text style={{ fontSize: 17, marginTop: 15, color: "#3d3d3d", fontWeight: "bold", }}>English</Text>
                    </ItemCard>
                    <ItemCard onClick={()=>language("hindi")}>
                        <Image source={require("../../assets/hindi.png")} style={{ width: 55, height: 55, borderRadius: 6, marginRight: "2%" }} />
                        <Text style={{ fontSize: 17, marginTop: 15, color: "#3d3d3d", fontWeight: "bold", }}>हिन्दी</Text>
                    </ItemCard>
                </View>
                <View style={styles.cardcontainer}>
                    <ItemCard onClick={()=>language("tamil")}>
                        <Image source={require("../../assets/tamil.png")} style={{ width: 55, height: 55, borderRadius: 6, marginRight: "2%" }} />
                        <Text style={{ fontSize: 17, marginTop: 15, color: "#3d3d3d", fontWeight: "bold", }}>தமிழ்</Text>
                    </ItemCard>
                </View>
                <Text style={{alignSelf:"center", fontSize: 13, color: "#AEAEAE", position: "absolute", bottom: 40}}>
              <Image source={require("../../assets/sishma.png")} style={{width: 12, height: 12, borderRadius: 6}} />  SISHMA 2022</Text>
                <Text style={{alignSelf:"center", fontSize: 13, color: "#AEAEAE", position: "absolute", bottom: 24}}>sponsored by Department of Science and Technology</Text>
                <Text style={{alignSelf:"center", fontSize: 13, color: "#AEAEAE", position: "absolute", bottom: 8}}>[Device Development Programme], Govt. Of India.</Text>
            </View>
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
        height: "30%",
        justifyContent: "center",
        borderBottomRightRadius: 40,
        paddingTop:"5%",
    },
    title: {
        margin:"3%",
        marginLeft: "6%",
        color: "#d0e8db",
        fontSize: 25,
        fontWeight: "bold",
    },
    body: {
        width: "100%",
        flex: 1,
        backgroundColor: "white",
        borderTopLeftRadius: 65
    },
    cardcontainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: "6%"
    },
})

export default LanguagePicker;