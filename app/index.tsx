import loginScreen from "../screens/loginScreen";
import signupScreen from "../screens/signupScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={loginScreen} />
        <Stack.Screen name="Signup" component={signupScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
