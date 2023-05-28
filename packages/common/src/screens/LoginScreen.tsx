import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import Button from "../components/Button";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  const handleSubmit = () => {
    // Giriş işlemlerini burada gerçekleştirin
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingBottom: 16 }}>
        <Text style={styles.title}>Login to My Ooredoo 👋</Text>
        <Text style={styles.subtitle}>
          Login with username and password. Can't remember or don't have a
          username?
        </Text>
        <Text style={styles.subtitle}>Login with a mobile number and OTP</Text>
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

export default LoginForm;
