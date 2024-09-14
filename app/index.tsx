import loginScreen from "../screens/loginScreen";
import signupScreen from "../screens/signupScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import auth from "@react-native-firebase/auth";
import { useEffect, useState } from "react";
import homeScreen from "../screens/homeScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        {!user ? (
          <>
            <Stack.Screen name="Login" component={loginScreen} />
            <Stack.Screen name="Signup" component={signupScreen} />
          </>
        ) : (
          <Stack.Screen name="Home" component={homeScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
