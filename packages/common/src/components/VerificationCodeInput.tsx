import React, { useState, useRef } from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface Props {}

const VerificationCodeInput = (props: Props) => {
  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  const inputRefs = useRef<TextInput[]>([]);

  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value !== "" && index < 3) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleCodeKeyPress = (index: number, key: string) => {
    if (key === "Backspace" && index > 0 && code[index] === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <View style={styles.container}>
      {code.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.input}
          value={digit}
          onChangeText={(value) => handleCodeChange(index, value)}
          onKeyPress={({ nativeEvent: { key } }) =>
            handleCodeKeyPress(index, key)
          }
          keyboardType="numeric"
          maxLength={1}
          ref={(ref) => (inputRefs.current[index] = ref as TextInput)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    width: 60,
    height: 60,
    fontSize: 24,
    textAlign: "center",
  },
});

export default VerificationCodeInput;
