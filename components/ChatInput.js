import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ChatInput = () => {
  return (
    <View style={styles.ChatInput_View}>
      <TextInput
        multiline
        textAlignVertical="top"
        style={styles.ChatInput_TextInput}
        hoverSt
      />
      <TouchableOpacity style={styles.ChatSendButton_TouchableOpacity}>
        <Text style={styles.ChatSendButton_Text}>Send</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  ChatInput_View: {
    flexDirection: "row",
    width: "100%",
    minHeight: 150,
    padding: 20,
    backgroundColor: "#E5E5E5",
  },
  ChatInput_TextInput: {
    flex: 1,
    height: 60,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    fontSize: 18,
    borderColor: "#FFF",
  },
  ChatSendButton_TouchableOpacity: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    marginLeft: 10,
    borderRadius: 30,
    backgroundColor: "#00a380",
  },
  ChatSendButton_Text: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});

export default ChatInput;
