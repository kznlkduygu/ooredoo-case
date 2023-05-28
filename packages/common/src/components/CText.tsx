import React from "react";
import { Text } from "react-native";
import { Colors } from "../constans/colors";

interface Props {
  text?: any;
  fontSize?: number;
}

const CText = (props: Props) => {
  const { text, fontSize } = props;
  return (
    <Text style={{ color: Colors.primaryBlack, fontSize: fontSize || 12 }}>
      {text}
    </Text>
  );
};
export default CText;
