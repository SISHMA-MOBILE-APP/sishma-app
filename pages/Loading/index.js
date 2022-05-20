import React from 'react'
import { View, Image } from 'react-native'

const Loading = (props) => {
  return (
    <View style={{flex: 1, alignItems:"center", justifyContent: "center"}}>
        <Image source={require("../../assets/sishma.png")} style={{width: 200, height: 200, borderRadius: 100}} />
    </View>
  )
}

export default Loading