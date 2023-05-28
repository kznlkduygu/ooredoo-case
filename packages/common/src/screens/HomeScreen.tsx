import React from "react";
import {
  View,
  StyleSheet,
  Platform,
} from "react-native";
import { Colors } from "../constans/colors";
import Button from "../components/Button";

interface Props {
  navigation?: any;
}

const HomeScreen = (props: Props) => {
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={() =>
          Platform.OS === "web"
            ? (window.location.href = "login")
            : navigation.navigate("Login")
        }
      />
      <Button
        title="Signup"
        onPress={() =>
          Platform.OS === "web"
            ? (window.location.href = "registerfirst")
            : navigation.navigate("RegisterFirst")
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: Colors.primaryWhite
  },
  buttonContainer: {
    width: "80%",
    height: 60,
    backgroundColor: Colors.primaryRed,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeScreen;
