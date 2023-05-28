import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import Button from "../components/Button";
import { Colors } from "../constans/colors";

interface Props {
  navigation?: any;
}

const LoginScreen: React.FC = (props: Props) => {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    const data = {
      email: email,
      password: password,
    };
    fetch("http://localhost:8080/login/username", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => console.log("data", data))
      .catch((error) => console.log("error", error));
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingBottom: 16 }}>
        <Text style={styles.title}>Login to My Ooredoo 👋</Text>
        <Text style={styles.subtitle}>
          Login with username and password. Can't remember or don't have a
          username?
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.subtitle}>Login with a</Text>
          <TouchableOpacity
            onPress={() => {
              Platform.OS === "web"
                ? (window.location.href = "mobile-login")
                : navigation.navigate("MobileLogin");
            }}
          >
            <Text
              style={{
                ...styles.subtitle,
                paddingHorizontal: 0,
                color: Colors.primaryRed,
              }}
            >
              mobile number and OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
      <Button title="Giriş Yap" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "85%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    paddingLeft: 10,
  },
  title: {
    fontSize: 28,
    paddingHorizontal: 8,
    fontWeight: "700",
    fontFamily: "Rubik",
  },
  subtitle: {
    fontSize: 16,
    paddingHorizontal: 8,
    fontWeight: "500",
    fontFamily: "Rubik",
  },
});

export default LoginScreen;
