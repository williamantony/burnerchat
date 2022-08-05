import { FlatList, View, StyleSheet } from "react-native";
import ChatBubble from "./ChatBubble";

const ChatArea = () => {
  const chatMessages = [
    {
      id: 1,
      textContent: "Hello World!",
    },
    {
      id: 2,
      textContent: "Hello Kwaku!",
    },
  ];

  return (
    <View style={styles.ChatArea_View}>
      <View style={styles.ChatArea_View2}>
        <FlatList
          style={styles.ChatArea_FlatList}
          data={chatMessages}
          keyExtractor={(item) => item.id}
          renderItem={ChatBubble}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ChatArea_View: {
    width: "100%",
    flex: 10,
    paddingVertical: 30,
    justifyContent: "flex-end",
    backgroundColor: "#efeae2",
  },
  ChatArea_View2: {},
  ChatArea_FlatList: {
    backgroundColor: "#efeae2",
  },
});

export default ChatArea;
