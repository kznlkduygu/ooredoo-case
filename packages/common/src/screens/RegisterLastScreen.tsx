import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  ScrollView,
} from "react-native";
import { Colors } from "../constans/colors";
import Button from "../components/Button";
import usePasswordValidation from "../hooks/validatePassword";
import CustomModal from "../components/CustomPopup";

interface Props {
  navigation?: any;
  useRoute?: any;
}

const RegisterLastScreen = (props: Props) => {
  const { navigation, useRoute } = props;

  const { password, passwordError, handlePasswordChange } =
    usePasswordValidation();
    
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  let mobileNumberFinal: any;
  let qidFinal: any;

  if (Platform.OS === "web") {
    const params = new URLSearchParams(window.location.search);
    mobileNumberFinal = params.get("serviceNumber");
    qidFinal = params.get("qidFinal");
  } else {
    const route = useRoute();
    const { serviceNumber, qid } = route.params;
    mobileNumberFinal = serviceNumber;
    qidFinal = qid;
  }


  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSubmit = async () => {
    try {
      const formData = {
        email: email,
        password: password,
        qid: qidFinal,
        serviceNumber: mobileNumberFinal,
      };

      const response = await fetch("http://localhost:8080/registerCustomer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setModalVisible(true);
      }
    } catch (error) {
      console.error(error);
    } finally {
    }
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
          value={mobileNumberFinal}
          editable={false}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Passport ID"
          value={qidFinal}
          editable={false}
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
          <Button title="Register" onPress={handleSubmit} />
          <View>
            <CustomModal
              visible={modalVisible}
              children={"Congratulations, your registration successfully created."}
              onClose={handleCloseModal}
            />
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
