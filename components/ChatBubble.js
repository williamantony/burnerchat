import { StyleSheet, Text, View } from "react-native";

const ChatBubble = ({ item }) => {
  return (
    <View style={styles.ChatBubble_View}>
      <Text>{item.textContent}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ChatBubble_View: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5,
    marginLeft: "auto",
    marginRight: 20,
    borderRadius: 5,
    backgroundColor: "#d9fdd3",
  },
});

export default ChatBubble;
