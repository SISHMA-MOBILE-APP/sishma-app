//FO can edit: He can view and edit then send it to farmer dash
import React, {useContext} from 'react';
import { View, Text, TextInput, StyleSheet, Image, ScrollView} from 'react-native';
import Card from '../../components/Card';
import { MaterialCommunityIcons } from '@expo/vector-icons';
// Language Provider
import { Language } from "../../providers/languageProvider";
import { transcription } from "../../utils/lang";
import InputText from "../../components/CustomTextField";

import ReportGeneration from '../../providers/reportGeneration';

export default function FieldOfficerSuggestion(props){
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

                 {/* Recommend Changes */}
                <Text style={styles.suggest}>Suggest Combination:</Text>
                <View style={{flexDirection: "row", justifyContent: "space-around", width: "95%", marginTop: 15}}>
                    <View style={{alignItems: "center"}}>
                        <Text>{transcription[lang.language]["nitrogen"]}</Text>
                        <Image source={require("../../assets/nitrogen.png")} style={{width: 50, height: 50, borderRadius: 0, marginTop: 5, marginBottom: 10}} />
                        <TextInput style={styles.inputText}>50.0%</TextInput>
                    </View>
                    <View style={{width: 0.5, height :"85%", backgroundColor: "black"}} />
                    <View style={{alignItems: "center"}}>
                        <Text>{transcription[lang.language]["phosphorus"]}</Text>
                        <Image source={require("../../assets/phosphorus.png")} style={{width: 50, height: 50, borderRadius: 0, marginTop: 5, marginBottom: 10}} />
                        <TextInput style={styles.inputText}>35.0%</TextInput>
                    </View>
                    <View style={{width: 0.5, height :"85%", backgroundColor: "black"}} />
                    <View style={{alignItems: "center"}}>
                        <Text>{transcription[lang.language]["potassium"]}</Text>
                        <Image source={require("../../assets/potassium.png")} style={{width: 50, height: 50, borderRadius: 0, marginTop: 5, marginBottom: 10}} />
                        <TextInput style={styles.inputText}>15.0%</TextInput>
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

                {/* Recommend Changes */}
                <Text style={styles.suggest}>Suggest Combination:</Text>
                <View style={{flexDirection: "row", justifyContent: "space-around", width: "95%", marginTop: 15}}>
                    <View style={{alignItems: "center"}}>
                        <Text>{transcription[lang.language]["nitrogen"]}</Text>
                        <Image source={require("../../assets/nitrogen.png")} style={{width: 50, height: 50, borderRadius: 0, marginTop: 5, marginBottom: 10}} />
                        <TextInput style={styles.inputText}>50.0%</TextInput>
                    </View>
                    <View style={{width: 0.5, height :"85%", backgroundColor: "black"}} />
                    <View style={{alignItems: "center"}}>
                        <Text>{transcription[lang.language]["phosphorus"]}</Text>
                        <Image source={require("../../assets/phosphorus.png")} style={{width: 50, height: 50, borderRadius: 0, marginTop: 5, marginBottom: 10}} />
                        <TextInput style={styles.inputText}>30.0%</TextInput>
                    </View>
                    <View style={{width: 0.5, height :"85%", backgroundColor: "black"}} />
                    <View style={{alignItems: "center"}}>
                        <Text>{transcription[lang.language]["potassium"]}</Text>
                        <Image source={require("../../assets/potassium.png")} style={{width: 50, height: 50, borderRadius: 0, marginTop: 5, marginBottom: 10}} />
                        <TextInput style={styles.inputText}>20.0%</TextInput>
                    </View>
                </View>
            </Card>
            
            <Card heading={transcription[lang.language]["organicManure"]} image={<Image source={require("../../assets/fertilizer.png")} style={{width: 60, height: 60, borderRadius: 5, marginRight:"10%"}} />}>
                <Text style={{color: "#0e6e3a", fontSize: 30}}>39.55%</Text>
                <Text style={styles.suggest}>Suggest Combination:</Text>
                <TextInput style={styles.inputText}>35%</TextInput>
            </Card>
            <Card heading={transcription[lang.language]["bioFertilizer"]} image={<Image source={require("../../assets/compost.png")} style={{width: 60, height: 60, borderRadius: 5, marginRight:"10%"}} />}>
                <Text style={{color: "#0e6e3a", fontSize: 30}}>27.87%</Text>
                <Text style={styles.suggest}>Suggest Combination:</Text>
                <TextInput style={styles.inputText}>25%</TextInput>
            </Card>

        {/* report generation */}
        <ReportGeneration/>

        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        // alignItems:"center",
        backgroundColor: "white",
        paddingTop:"5%",
        paddingBottom:"5%",
    },
    suggest:{
        fontSize: 20,
        color: "#3d3d3d",
        fontWeight: "bold",
        paddingTop:"5%"
    },
    inputText:{
        color: "#0e6e3a", 
        fontSize: 25,
        textDecorationLine:'underline',
    }
})