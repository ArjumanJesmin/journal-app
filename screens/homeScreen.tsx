import { Button, Text, View } from "react-native";
import auth from "@react-native-firebase/auth";

const homeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="logout"
        onPress={() => {
          auth().signOut();
        }}
      />
    </View>
  );
};

export default homeScreen;
