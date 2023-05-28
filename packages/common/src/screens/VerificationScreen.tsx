import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import VerificationCodeInput from "../components/VerificationCodeInput";
import { Colors } from "../constans/colors";
import Button from "../components/Button";

interface Props {
  navigation?: any;
}

const VerificationScreen = (props: Props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter the 4 - digit code</Text>
      <Text style={styles.subtitle}>
        Let’s confirm your identity. Enter the verification code sent to your
        mobile number ****921.
      </Text>
      <View style={{ paddingHorizontal: 50, paddingTop: 20 }}>
        <VerificationCodeInput />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Continue"
          onPress={() => {
            Platform.OS === "web"
              ? (window.location.href = "registerLast")
              : navigation.navigate("RegisterLast");
          }}
        />
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
    alignItems: "center",
  },
  container: {
    paddingHorizontal: 8,
    backgroundColor: Colors.primaryWhite,
    height: "100%",
  },
});
