import React from 'react'
import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';

const ItemCard = (props) => {
  return (
    <View style={[styles.container, props.style]}>
        {props.children}
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        borderRadius: 15,
        width: "40%",
        height:150,
        elevation: 5,
        backgroundColor:"#e7f3ed",
        alignItems:"center",
        justifyContent:"center",
        borderWidth: 1,
        borderColor: "green"
    }
})

export default ItemCard;