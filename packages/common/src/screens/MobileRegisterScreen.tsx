import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Platform } from "react-native";
import Button from "../components/Button";
import { validateQID } from "../utils/validateQID";
import { Colors } from "../constans/colors";

interface Props {
  navigation?: any;
}

const MobileRegisterScreen = (props: Props) => {
  const { navigation } = props;
  const [mobileNumber, setMobileNumber] = useState("");
  const [qatarID, setQatarID] = useState("");
  const [errorQID, setErrorQID] = useState("");

  useEffect(() => {
    if (qatarID && !validateQID(qatarID)) {
      setErrorQID("Invalid Qatar ID");
    } else {
      setErrorQID("");
    }
  }, [qatarID]);

  // const handleSubmit = async () => {
  //     try {
  //       const formData = {
  //         serviceNumber: mobileNumber,
  //         qid: qatarID,
  //       };

  //       const response = await fetch("http://localhost:8080/validateServiceNumberForRegistration", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(formData),
  //       });

  //       if (!response.ok) {
  //         throw new Error("API request failed");
  //       }
  //       if (Platform.OS !== "web") {
  //         navigation.navigate("Step Three");
  //       } else {
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     } finally {
  //     }
  // };

  const handleSubmit = async () => {
    if (!validateQID(qatarID)) {
      setErrorQID("Invalid Qatar ID");
      return;
    }

    const data = {
      serviceNumber: mobileNumber,
      qid: qatarID,
    };

    await fetch("http://localhost:8080/validateServiceNumberForRegistration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res?.json())
      .catch((error) => error);
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
            onChangeText={(text) => setMobileNumber(text)}
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
          {errorQID ? <Text style={styles.error}>{errorQID}</Text> : null}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Continue" onPress={handleSubmit} />
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
  error: {
    color: "red",
    marginTop: 5,
  },
});
