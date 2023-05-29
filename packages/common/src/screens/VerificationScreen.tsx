import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import VerificationCodeInput from "../components/VerificationCodeInput";
import { Colors } from "../constans/colors";
import Button from "../components/Button";
import CustomModal from "../components/CustomPopup";

interface Props {
  navigation?: any;
  useRoute?: any;
}

const VerificationScreen = (props: Props) => {
  const { navigation, useRoute } = props;

  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  const [modalVisible, setModalVisible] = useState(false);

  let mobileNumberFinal: any;
  let qidFinal: any;
  let isLoginFinal: any;
  let landline: any;

  if (Platform.OS === "web") {
    const params = new URLSearchParams(window.location.search);
    mobileNumberFinal = params.get("mobileNumber");
    qidFinal = params.get("qid");
    isLoginFinal = params.get("isLogin");
    landline = params.get("isLandline");
  } else {
    const route = useRoute();
    const { serviceNumber, qid, isLogin, isLandline } = route.params;
    mobileNumberFinal = serviceNumber;
    qidFinal = qid;
    isLoginFinal = isLogin;
    landline = isLandline;
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
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.status === 200) {
          if (isLoginFinal) {
            setModalVisible(true);
          } else {
            const url = `/registerlast?serviceNumber=${mobileNumberFinal}&qidFinal=${qidFinal}`;
            if (Platform.OS !== "web") {
              navigation.navigate("RegisterLast", {
                serviceNumber: mobileNumberFinal,
                qid: qidFinal,
              });
            } else {
              window.location.href = url;
            }
          }
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
      <CustomModal
        visible={modalVisible}
        children={"👋 Welcome My Ooredoo 👋 "}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
};

export default VerificationScreen;

const styles = StyleSheet.create({
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
