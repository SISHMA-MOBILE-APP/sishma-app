import React, {useContext} from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Card from '../../components/Card';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Language Provider
import { Language } from "../../providers/languageProvider";
import { transcription } from "../../utils/lang";

export default function FieldOfficerRecommendation(props){
    const lang = useContext(Language);
    return(
        <View style={styles.container}>

        <ScrollView contentContainerStyle={[styles.container, {alignItems: "center"}]}>
            <Card heading={transcription[lang.language]["recommendCrop"]}>
                <Text style={{color: "#0e6e3a", fontSize: 30}}>Wheat {<Image source={require("../../assets/wheat-sack.png")} style={{width: 35, height: 35, borderRadius: 5, marginRight:"10%"}} />}</Text>
            </Card>
            <Card heading={transcription[lang.language]["fertilizerComb"]+"1 :"}>
                <View style={{flexDirection: "row", justifyContent: "space-around", width: "95%", marginTop: 15}}>
                    <View style={{alignItems: "center"}}>
                        <Text>{transcription[lang.language]["nitrogen"]}</Text>
                        <Image source={require("../../assets/nitrogen.png")} style={{width: 50, height: 50, borderRadius: 0, marginTop: 5, marginBottom: 10}} />
                        <Text style={{color: "green",fontSize: 25}}>44.5%</Text>
                    </View>
                    <View style={{width: 0.5, height :"85%", backgroundColor: "black"}} />
                    <View style={{alignItems: "center"}}>
                        <Text>{transcription[lang.language]["phosphorus"]}</Text>
                        <Image source={require("../../assets/phosphorus.png")} style={{width: 50, height: 50, borderRadius: 0, marginTop: 5, marginBottom: 10}} />
                        <Text style={{color: "green",fontSize: 25}}>30.0%</Text>
                    </View>
                    <View style={{width: 0.5, height :"85%", backgroundColor: "black"}} />
                    <View style={{alignItems: "center"}}>
                        <Text>{transcription[lang.language]["potassium"]}</Text>
                        <Image source={require("../../assets/potassium.png")} style={{width: 50, height: 50, borderRadius: 0, marginTop: 5, marginBottom: 10}} />
                        <Text style={{color: "green",fontSize: 25}}>25.5%</Text>
                    </View>
                </View>
            </Card>

            <Card heading={transcription[lang.language]["fertilizerComb"]+"2 :"}>
                <View style={{flexDirection: "row", justifyContent: "space-around", width: "95%", marginTop: 15}}>
                    <View style={{alignItems: "center"}}>
                        <Text>{transcription[lang.language]["nitrogen"]}</Text>
                        <Image source={require("../../assets/nitrogen.png")} style={{width: 50, height: 50, borderRadius: 5, marginTop: 5, marginBottom: 10}} />
                        <Text style={{color: "green",fontSize: 25}}>42.0%</Text>
                    </View>
                    <View style={{width: 0.5, height :"85%", backgroundColor: "green"}} />
                    <View style={{alignItems: "center"}}>
                        <Text>{transcription[lang.language]["phosphorus"]}</Text>
                        <Image source={require("../../assets/phosphorus.png")} style={{width: 50, height: 50, borderRadius: 5, marginTop: 5, marginBottom: 10}} />
                        <Text style={{color: "green",fontSize: 25}}>33.0%</Text>
                    </View>
                    <View style={{width: 0.5, height :"85%", backgroundColor: "green"}} />
                    <View style={{alignItems: "center"}}>
                        <Text>{transcription[lang.language]["potassium"]}</Text>
                        <Image source={require("../../assets/potassium.png")} style={{width: 50, height: 50, borderRadius: 5, marginTop: 5, marginBottom: 10}} />
                        <Text style={{color: "green",fontSize: 25}}>25.0%</Text>
                    </View>
                </View>
            </Card>
            
            <Card heading={transcription[lang.language]["organicManure"]} image={<Image source={require("../../assets/fertilizer.png")} style={{width: 60, height: 60, borderRadius: 5, marginRight:"10%"}} />}>
                <Text style={{color: "#0e6e3a", fontSize: 30}}>39.55%</Text>
            </Card>
            <Card heading={transcription[lang.language]["bioFertilizer"]} image={<Image source={require("../../assets/compost.png")} style={{width: 60, height: 60, borderRadius: 5, marginRight:"10%"}} />}>
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
        backgroundColor: "white",
        paddingTop:"5%"
    }
})