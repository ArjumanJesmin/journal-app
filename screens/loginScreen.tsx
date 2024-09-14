import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const loginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onPressSignup = () => {
    navigation.navigate("Signup");
  };
  return (
    <View style={{ padding: 16 }}>
      <TextInput
        placeholder="Email"
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        keyboardType="numeric"
        style={styles.input}
      />
      <TouchableOpacity style={styles.button}>
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
