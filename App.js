import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Login from "./components/LoginOrRegister/Login";
import Option from "./components/LoginOrRegister/Option";
import Admin from "./pages/AdminDashboard";
import Farmer from "./pages/FarmerDashboard";
import Officer from "./pages/FieldOfficerDashboard";
import Routepage from "./pages/RoutePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LanguageProvider from "./providers/languageProvider";
import Hello from "./pages/Hello";
import SoilSampleDetails from "./pages/SoilSampleDetails";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <LanguageProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="RoutePage"
        >
          <Stack.Screen name="RoutePage" component={Routepage} />
          <Stack.Screen name="FarmerReg" component={Farmer} />
          <Stack.Screen name="AdminReg" component={Login} />
          <Stack.Screen name="OfficerReg" component={Officer} />
          <Stack.Screen name="Option" component={Option} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Hello" component={Hello} />
          <Stack.Screen name="SoilSampleDetails" component={SoilSampleDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </LanguageProvider>
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
    display: "flex",
    flex: 1,
  },
});
