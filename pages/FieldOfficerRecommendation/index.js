import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Card from '../../components/Card';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FieldOfficerRecommendation(props){
    return(
        <View style={styles.container}>

        <ScrollView contentContainerStyle={[styles.container, {alignItems: "center"}]}>
            <Card heading="Recommended Crop :" image={<Image source={require("../../assets/crop.png")} style={{width: 60, height: 60, borderRadius: 5, marginRight:"10%"}} />}>
                <Text style={{color: "#0e6e3a", fontSize: 30}}>Wheat</Text>
            </Card>
            <Card heading="Fertilizer Combination 1 :">
                <View style={{flexDirection: "row", justifyContent: "space-around", width: "95%", marginTop: 15}}>
                    <View style={{alignItems: "center"}}>
                        <Text>Nitrogen</Text>
                        <Image source={require("../../assets/nitrogen.png")} style={{width: 50, height: 50, borderRadius: 25, marginTop: 5, marginBottom: 10}} />
                        <Text style={{color: "green",fontSize: 25}}>44.5%</Text>
                    </View>
                    <View style={{width: 0.5, height :"85%", backgroundColor: "black"}} />
                    <View style={{alignItems: "center"}}>
                        <Text>Phosphorus</Text>
                        <Image source={require("../../assets/phosphorus.png")} style={{width: 50, height: 50, borderRadius: 25, marginTop: 5, marginBottom: 10}} />
                        <Text style={{color: "green",fontSize: 25}}>30.0%</Text>
                    </View>
                    <View style={{width: 0.5, height :"85%", backgroundColor: "black"}} />
                    <View style={{alignItems: "center"}}>
                        <Text>Potassium</Text>
                        <Image source={require("../../assets/potassium.png")} style={{width: 50, height: 50, borderRadius: 25, marginTop: 5, marginBottom: 10}} />
                        <Text style={{color: "green",fontSize: 25}}>25.5%</Text>
                    </View>
                </View>
            </Card>

            <Card heading="Fertilizer Combination 2 :">
                <View style={{flexDirection: "row", justifyContent: "space-around", width: "95%", marginTop: 15}}>
                    <View style={{alignItems: "center"}}>
                        <Text>Nitrogen</Text>
                        <Image source={require("../../assets/nitrogen2.png")} style={{width: 50, height: 50, borderRadius: 5, marginTop: 5, marginBottom: 10}} />
                        <Text style={{color: "green",fontSize: 25}}>42.0%</Text>
                    </View>
                    <View style={{width: 0.5, height :"85%", backgroundColor: "green"}} />
                    <View style={{alignItems: "center"}}>
                        <Text>Phosphorus</Text>
                        <Image source={require("../../assets/phosphorus2.png")} style={{width: 50, height: 50, borderRadius: 5, marginTop: 5, marginBottom: 10}} />
                        <Text style={{color: "green",fontSize: 25}}>33.0%</Text>
                    </View>
                    <View style={{width: 0.5, height :"85%", backgroundColor: "green"}} />
                    <View style={{alignItems: "center"}}>
                        <Text>Potassium</Text>
                        <Image source={require("../../assets/potassium2.png")} style={{width: 50, height: 50, borderRadius: 5, marginTop: 5, marginBottom: 10}} />
                        <Text style={{color: "green",fontSize: 25}}>25.0%</Text>
                    </View>
                </View>
            </Card>
            
            <Card heading="Organic Manure :" image={<Image source={require("../../assets/fertilizer.png")} style={{width: 60, height: 60, borderRadius: 5, marginRight:"10%"}} />}>
                <Text style={{color: "#0e6e3a", fontSize: 30}}>39.55%</Text>
            </Card>
            <Card heading="Bio Fertilizer :" image={<Image source={require("../../assets/compost.png")} style={{width: 60, height: 60, borderRadius: 5, marginRight:"10%"}} />}>
                <Text style={{color: "#0e6e3a", fontSize: 30}}>27.87%</Text>
            </Card>
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        // alignItems:"center",
        backgroundColor: "#dedede"
    }
})