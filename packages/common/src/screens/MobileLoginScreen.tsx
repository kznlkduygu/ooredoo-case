import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../constans/colors";
import Button from "../components/Button";

interface Props {
  navigation?: any;
}

const MobileLoginScreen = (props: Props) => {
  const { navigation} = props;
  const [mobileNumber, setMobileNumber] = useState("");
  const handleMobileChange = (text: string) => {
    setMobileNumber(text);
  };

  const handleSubmit = async () => {
    if (mobileNumber) {
      try {
        const formData = {
          serviceNumber: mobileNumber,
        };

        const response = await fetch(
          "http://localhost:8080/login/serviceNumber",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );

        if (!response.ok) {
          throw new Error("API request failed");
        }
        const url = `/verification?mobileNumber=${mobileNumber}`;
        if (Platform.OS === "web") {
          window.location.href = url;
        } else {
          navigation.navigate("Verification", { mobileNumber: mobileNumber });
        }
      } catch (error) {
        console.error(error);
      } finally {
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Login to My Ooredoo 👋</Text>
        <Text style={styles.subtitle}>
          Login with mobile number. It should start with either 3, 5, 6 or 7. No
          mobile number?
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.subtitle}>Login with a</Text>
          <TouchableOpacity
            onPress={() => {
              Platform.OS === "web"
                ? (window.location.href = "login")
                : navigation.navigate("Login");
            }}
          >
            <Text
              style={{
                ...styles.subtitle,
                paddingHorizontal: 0,
                color: Colors.primaryRed,
              }}
            >
              username and password
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            onChangeText={handleMobileChange}
            placeholder="Mobile Number"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Continue" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default MobileLoginScreen;

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
