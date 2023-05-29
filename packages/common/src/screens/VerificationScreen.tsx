import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import VerificationCodeInput from "../components/VerificationCodeInput";
import { Colors } from "../constans/colors";
import Button from "../components/Button";

interface Props {
  navigation?: any;
  useRoute?: any;
}

const VerificationScreen = (props: Props) => {
  const { navigation, useRoute } = props;

  const [code, setCode] = useState<string[]>(["", "", "", ""]);

  let mobileNumberFinal: any;

  if (Platform.OS === "web") {
    const params = new URLSearchParams(window.location.search);
    mobileNumberFinal = params.get("mobileNumber");
  } else {
    const route = useRoute();
    const { serviceNumber } = route.params;
    mobileNumberFinal = serviceNumber;
  }

  const handleSubmit = async () => {
    if (code?.length === 4) {
      try {
        const formData = {
          serviceNumber: mobileNumberFinal,
          otp: code?.join(""),
        };

        const response = await fetch("http://localhost:8080/verifyOTP", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.status === 200) {
          const url = `/registerlast?serviceNumber=${mobileNumberFinal}}`;
          if (Platform.OS !== "web") {
            navigation.navigate("RegisterLast");
          } else {
            window.location.href = url;
          }
        } else {
          throw new Error("API request failed");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter the 4 - digit code</Text>
      <Text style={styles.subtitle}>
        Let’s confirm your identity. Enter the verification code sent to your
        mobile number ****921.
      </Text>
      <View style={{ paddingHorizontal: 50, paddingTop: 20 }}>
        <VerificationCodeInput setCode={setCode} code={code} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Continue" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
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
  buttonContainer: {
    paddingTop: 16,
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 8,
    backgroundColor: Colors.primaryWhite,
    height: "100%",
  },
});
