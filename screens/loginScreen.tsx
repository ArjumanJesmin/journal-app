import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import auth from "@react-native-firebase/auth";

const loginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPressSignup = () => {
    navigation.navigate("Signup");
  };

  const onPressLogin = async () => {
    if (email && password) {
      try {
        const userFriend = await auth().signInWithEmailAndPassword(
          email,
          password
        );
        console.log(userFriend);
      } catch (err: any) {
        console.log(err);
        Alert.alert(err.message);
      }
    } else {
      Alert.alert("please fill all fields!");
    }
  };
  return (
    <View style={{ padding: 16 }}>
      <TextInput
        onChangeText={(text) => {
          setEmail(text);
        }}
        placeholder="Email"
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        onChangeText={(text) => {
          setPassword(text);
        }}
        placeholder="Password"
        keyboardType="numeric"
        style={styles.input}
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={onPressLogin} style={styles.button}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressSignup} style={styles.button}>
        <Text style={{ color: "white", fontWeight: "bold" }}>
          Go to Signup Screen!
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default loginScreen;

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
  button: {
    backgroundColor: "#fe4066",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
});
