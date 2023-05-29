import React, { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet, Platform } from "react-native";
import Button from "../components/Button";
import { validateQID } from "../utils/validateQID";
import { validateMobileNumber } from "../utils/validateMobileNumber";
import { Colors } from "../constans/colors";
import { validateLandlineNumber } from "../utils/validateLandline";

interface Props {
  navigation?: any;
  useRoute?: any;
}

const MobileRegisterScreen = (props: Props) => {
  const { navigation, useRoute } = props;
  const [mobileNumber, setMobileNumber] = useState("");
  const [qatarID, setQatarID] = useState("");
  const [errorQID, setErrorQID] = useState("");
  const [errorMobileNumber, setErrorMobileNumber] = useState("");

  let landline: any;
  if (Platform.OS === "web") {
    const params = new URLSearchParams(window.location.search);
    landline = params.get("isLandline");
  } else {
    const route = useRoute();
    const isLandline = route.params?.isLandline;
    landline = isLandline;
  }

  let landlineControl = landline === true || landline === "true";
  useEffect(() => {
    if (qatarID && !validateQID(qatarID)) {
      setErrorQID("Invalid Qatar ID");
    } else {
      setErrorQID("");
    }
  }, [qatarID]);

  useEffect(() => {
    let error = "";
    if (mobileNumber) {
      if (landlineControl) {
        if (!validateLandlineNumber(mobileNumber)) {
          error = "Invalid Landline Number";
        }
      } else {
        if (!validateMobileNumber(mobileNumber)) {
          error = "Invalid Mobile Number";
        }
      }
    }

    setErrorMobileNumber(error);
  }, [mobileNumber, landline]);

  const handleSubmit = async () => {
    const data = {
      serviceNumber: mobileNumber,
      qid: qatarID,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/validateServiceNumberForRegistration",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        const url = `/verification?mobileNumber=${mobileNumber}&qid=${qatarID}&isLandline=${landline}`;
        if (Platform.OS === "web") {
          window.location.href = url;
        } else {
          navigation.navigate("Verification", {
            serviceNumber: mobileNumber,
            qid: qatarID,
            isLandline: landline,
          });
        }
      } else {
        const responseData = await response.json();
        responseData.error;
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Welcome to Ooredoo 👋</Text>
        <Text style={styles.subtitle}>
          {landlineControl
            ? "Please fill in your information below. Your landline number must start with a 4."
            : "Please fill in your information below. Your mobile number should start with either 3, 5, 6, or 7."}
        </Text>
        <View style={styles.inputContainer}>
          {landlineControl ? (
            <TextInput
              maxLength={8}
              onChangeText={(text) => setMobileNumber(text)}
              style={styles.input}
              placeholder={"Landline"}
            />
          ) : (
            <TextInput
              maxLength={8}
              onChangeText={(text) => setMobileNumber(text)}
              style={styles.input}
              placeholder={"Mobile Number"}
            />
          )}
          {errorMobileNumber ? (
            <Text style={styles.error}>{errorMobileNumber}</Text>
          ) : null}
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            maxLength={11}
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
  },
  subtitle: {
    fontSize: 16,
    paddingHorizontal: 8,
    fontWeight: "500",
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
