import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Colors } from "../constans/colors";

interface Props {
  navigation?: any;
}

const RegisterFirst = (props: Props) => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Register with</Text>
        <Text style={styles.subtitle}>
          Please select your registration type
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <TouchableOpacity
          onPress={() => {
            const url = `/mobileregister?isLandline=false`;
            Platform.OS === "web"
              ? (window.location.href = url)
              : navigation.navigate("MobileRegister", {
                  isLogin: false,
                });
          }}
          style={styles.buttonContainer}
        >
          <Text style={styles.buttonText}>Mobile Number</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            const url = `/mobileregister?isLandline=true`;
            Platform.OS === "web"
              ? (window.location.href = url)
              : navigation.navigate("MobileRegister", {
                  isLandline: true,
                });
          }}
          style={styles.sectionButton}
        >
          <Text style={styles.sectionButtonText}>Landline Number</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterFirst;

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: Colors.primaryWhite,
    height: "100%",
  },
  title: {
    color: Colors.primaryBlack,
    fontSize: 24,
    paddingVertical: 16,
  },
  subtitle: {
    color: Colors.primaryBlack,
    fontSize: 12,
    paddingBottom: 16,
  },
  buttonContainer: {
    width: "80%",
    height: 40,
    backgroundColor: Colors.primaryWhite,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
  },
  buttonText: {
    color: Colors.primaryBlack,
  },
  sectionContainer: {
    width: "80%",
    height: "30%",
    borderRadius: 20,
    backgroundColor: Colors.primaryGray,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionButton: {
    width: "80%",
    height: 40,
    backgroundColor: Colors.primaryWhite,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
  },
  sectionButtonText: {
    color: Colors.primaryBlack,
  },
  sectionButtonMargin: {
    marginVertical: 20,
  },
});
