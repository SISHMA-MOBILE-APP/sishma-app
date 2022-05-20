import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native';

const ItemCard = (props) => {
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={props.onClick}>
        {props.children}
    </TouchableOpacity>
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