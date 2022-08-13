import { View } from "react-native";
import MainStyles from "../styles/main.styles";
import ChatArea from "../components/ChatArea";
import ChatInput from "../components/ChatInput";

const ChatView = function (props) {
  return (
    <View style={MainStyles.container}>
      <ChatArea />
      <ChatInput />
    </View>
  );
};

export default ChatView;
