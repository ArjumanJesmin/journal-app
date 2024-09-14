import { useState } from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const signupScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPressSignup = () => {
    if (email && password) {
      console.log("data");
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
      <TouchableOpacity style={styles.button} onPress={onPressSignup}>
        <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default signupScreen;

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
