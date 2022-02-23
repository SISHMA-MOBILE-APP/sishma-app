import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from './components/CustomButton';
import InputText from './components/CustomTextField';

export default function App() {
  return (
    <View style={styles.container}>
    
      {/* <InputText
        
      /> */}
      <Button 
      btnName="Sign up"
      onPress={null}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});