import { Platform, StatusBar, StyleSheet, View } from "react-native";
import ChatArea from "./components/ChatArea";
import ChatInput from "./components/ChatInput";

export default function App() {
  return (
    <View style={styles.container}>
      <ChatArea />
      <ChatInput />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
