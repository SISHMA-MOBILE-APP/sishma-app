import { StyleSheet,StatusBar, SafeAreaView } from "react-native";
import Login from "./components/LoginOrRegister/Login";
import Option from "./components/LoginOrRegister/Option";
import Admin from "./pages/AdminDashboard";
import Farmer from "./pages/FarmerDashboard";
import Routepage from "./pages/RoutePage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  
const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={styles.safeArea}>
       <NavigationContainer>
       <Stack.Navigator screenOptions={{
    headerShown: false
  }} initialRouteName="RoutePage">
        <Stack.Screen
          name='RoutePage'
          component={Routepage}
         
        />
        <Stack.Screen name="FarmerReg" component={Farmer} />
        <Stack.Screen name="AdminReg" component={Admin} />
        <Stack.Screen name="Option" component={Option} />
        <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>

</NavigationContainer>

      <StatusBar />
    </SafeAreaView>
  );
}


// const styles = StyleSheet.create({  <Routepage /> <Farmer/><Login/> 
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  safeArea: {
    display:'flex',
    flex:1,
    
  },
});
