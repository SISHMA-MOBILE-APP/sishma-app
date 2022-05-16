import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

export default function Card(props){
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.heading}>{props.heading}</Text>
                {props.children}
            </View>
            {props.image}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "93%",
        elevation: 6,
        marginVertical: 5,
        borderWidth: 0.5,
        borderColor: "green",
        paddingVertical: 20,
        backgroundColor: "#b8dcc8",
        borderRadius: 20,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    inner: {
        marginLeft: "10%"
    },
    heading:{
        fontSize: 20,
        color: "#3d3d3d",
        fontWeight: "bold"
    }
})