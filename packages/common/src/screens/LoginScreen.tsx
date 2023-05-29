import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import Button from "../components/Button";
import { Colors } from "../constans/colors";
import CustomModal from "../components/CustomPopup";

interface Props {
  navigation?: any;
}

const LoginScreen: React.FC = (props: Props) => {
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleSubmit = async () => {
    try {
      const data = {
        email: email,
        password: password,
      };
      const response = await fetch("http://localhost:8080/login/username", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      console.log("response", response);
      if (response.ok) {
        setModalVisible(true);
      } else if (response.status === 403) {
        Alert.alert("Wrong login");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingBottom: 16 }}>
        <Text style={styles.title}>Login to My Ooredoo 👋</Text>
        <Text style={styles.subtitle}>
          Login with username and password. Can't remember or don't have a
          username?
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.subtitle}>Login with a</Text>
          <TouchableOpacity
            onPress={() => {
              Platform.OS === "web"
                ? (window.location.href = "mobile-login")
                : navigation.navigate("MobileLogin");
            }}
          >
            <Text
              style={{
                ...styles.subtitle,
                paddingHorizontal: 0,
                color: Colors.primaryRed,
              }}
            >
              mobile number and OTP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={handleEmailChange}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={handlePasswordChange}
        secureTextEntry
      />
      <Button title="Giriş Yap" onPress={handleSubmit} />
      <CustomModal
        visible={modalVisible}
        children={"👋 Welcome My Ooredoo 👋 "}
        onClose={handleCloseModal}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primaryWhite,
  },
  input: {
    width: "85%",
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    paddingLeft: 10,
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
});

export default LoginScreen;
