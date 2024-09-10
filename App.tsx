import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreen from "./screens/MainScreen";
import Header from "./components/Header";
import ProfileScreen from "./screens/ProfileScreen";
import WriteScreen from "./screens/WriteScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => <Header />,
        }}
        initialRouteName="Home"
      >
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Write" component={WriteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
