import React, { FC } from "react";
import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  children:any
}

const CustomModal: FC<CustomModalProps> = ({ visible, onClose, children }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <Text>{children}</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    backgroundColor: "white",
    borderRadius: 8,
    padding: 16,
    width: "80%",
  },
  closeButton: {
    marginTop: 16,
    alignSelf: "flex-end",
  },
  closeButtonText: {
    color: "blue",
    fontSize: 16,
  },
});

export default CustomModal;
