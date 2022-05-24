import { View, Text } from 'react-native'
import React from 'react'
import NumericInput from 'react-native-numeric-input'

const SoilText = (props) => {
  return (
    <>
      <NumericInput 
            value={props.value} 
            onChange={props.onChange}
      

            onLimitReached={props.onLimitReached}
             
            maxValue={props.maxValue}
            minValue={0}
            step={0.01}
            valueType={props.valueType}
            rounded 
            textColor='black' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='black' 
            leftButtonBackgroundColor='black'/>
    </>
  )
}

export default SoilText