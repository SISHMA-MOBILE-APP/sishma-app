import { StyleSheet, StatusBar, SafeAreaView } from "react-native";
import Login from "./components/LoginOrRegister/Login";
import Option from "./components/LoginOrRegister/Option";

// Admin
import AdminRegistration from "./pages/AdminRegistration";
import AdminDashboard from "./pages/AdminDashboard";

// Farmer
import FarmerRegistration from "./pages/FarmerRegistration";
import FarmerDashboard from "./pages/FarmerDashboard";

// Field Officer
import OfficerRegistration from "./pages/FieldOfficerRegistration";
import OfficerDashBoard from "./pages/FieldOfficerDashboard";

// Recommmendations given by FO on Farmer Dashboard
import FieldOfficerRecommendation from "./pages/FieldOfficerRecommendation";

// Officer to give suggestions on his dashboard (editable)
import FieldOfficerSuggestion from "./pages/FieldOfficerSuggestion";

import Routepage from "./pages/RoutePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LanguageProvider from "./providers/languageProvider";
import Hello from "./pages/Hello";
import SoilSampleDetails from "./pages/SoilSampleDetails";
import Loading from "./pages/Loading";
import LanguagePicker from "./pages/LanguagePicker";
// import Contact from "./pages/ContactUs";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <LanguageProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="LanguagePicker"
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="RoutePage" component={Routepage} />
          <Stack.Screen name="FarmerReg" component={FarmerRegistration} />
          <Stack.Screen name="AdminReg" component={AdminRegistration} />
          <Stack.Screen name="OfficerReg" component={OfficerRegistration} />
          <Stack.Screen name="Option" component={Option} />
          <Stack.Screen name="Hello" component={Hello} />
          <Stack.Screen
            name="SoilSampleDetails"
            component={SoilSampleDetails}
          />
          <Stack.Screen
            name="FieldOfficerRecommendation"
            component={FieldOfficerRecommendation}
          />
          <Stack.Screen
            name="FieldOfficerSuggestion"
            component={FieldOfficerSuggestion}
          />
          <Stack.Screen name="FarmerDashboard" component={FarmerDashboard} />
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="LanguagePicker" component={LanguagePicker} />
          {/* <Stack.Screen name="Contact" component={Contact} /> */}
          <Stack.Screen name="OfficerDashBoard" component={OfficerDashBoard} />
          <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    display: "flex",
    flex: 1,
  },
});
