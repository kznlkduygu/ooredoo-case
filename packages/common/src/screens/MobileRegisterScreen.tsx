import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Platform } from "react-native";
import { Colors } from "../constans/colors";
import Button from "../components/Button";

interface Props {
  navigation?: any;
}

const MobileRegisterScreen = (props: Props) => {
  const { navigation } = props;
  const [mobileNumber, setmobileNumber] = useState("");
  const [qatarID, setQatarID] = useState("");

  const handleSubmit = () => {
    const data = {
      serviceNumber: mobileNumber,
      qid: qatarID,
    };
    fetch("http://localhost:8080/validateServiceNumberForRegistration    ", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        Platform.OS === "web"
          ? (window.location.href = "verification")
          : navigation.navigate("Verification");
        console.log("data", data);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Welcome to Ooredoo 👋</Text>
        <Text style={styles.subtitle}>
          Please fill in your information below. Your mobile number should start
          with either 3, 5, 6, or 7.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={(text) => setmobileNumber(text)}
            style={styles.input}
            placeholder="Mobile Number"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={(text) => setQatarID(text)}
            style={styles.input}
            placeholder="Qatar ID or Passport ID"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Continue"
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
};

export default MobileRegisterScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingTop: 16,
    backgroundColor: Colors.primaryWhite,
    height: "100%",
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
  inputContainer: {
    padding: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
  },
  buttonContainer: {
    alignItems: "center",
  },
});
