import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import VerificationCodeInput from "../components/VerificationCodeInput";
import { Colors } from "../constans/colors";
import Button from "../components/Button";
import usePasswordValidation from "../hooks/validatePassword";
import CustomModal from "../components/CustomPopup";

interface Props {
  navigation?: any;
}

const RegisterLastScreen = (props: Props) => {
  const { navigation } = props;
  const { password, passwordError, handlePasswordChange } =
    usePasswordValidation();
  const [mobileNumber, setMobileNumber] = useState("");
  const [passportID, setPassportID] = useState("");
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleRegister = () => {
    setModalVisible(true);
  };

  return (
    <ScrollView style={styles.big_container}>
      <Text style={styles.title}>You’re nearly there</Text>
      <Text style={styles.subtitle}>
        Ahmad, we need some information before completing your registration.
      </Text>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Passport ID"
          value={passportID}
          onChangeText={setPassportID}
        />
        <TextInput
          style={styles.input}
          placeholder="Email Address"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Şifre"
          value={password}
          onChangeText={handlePasswordChange}
          secureTextEntry
        />
        {passwordError !== "" && (
          <Text style={styles.errorText}>{passwordError}</Text>
        )}
        <View style={{ alignItems: "center" }}>
          <Button title="Register" onPress={() => setModalVisible(true)} />
          <View>
            <CustomModal
              visible={modalVisible}
              children={"Congratulations"}
              onClose={handleCloseModal}
            ></CustomModal>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default RegisterLastScreen;

const styles = StyleSheet.create({
  big_container: {
    paddingHorizontal: 8,
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
  buttonContainer: {
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    paddingTop: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  errorText: {
    color: "red",
    marginBottom: 16,
  },
});
