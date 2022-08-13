import { View, Text, TouchableOpacity, Button } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MainStyles from "../styles/main.styles";

const Tab = createMaterialTopTabNavigator();

const SettingsView = function (props) {
  const goToChatView = (e) => {
    props.navigation.push("ChatView");
  };

  return (
    <View style={MainStyles.container}>
      <Text>Settings</Text>
      <Button title="Button" onPress={goToChatView}></Button>
    </View>
  );
};

const ChatListView = function (props) {
  const goToChatView = (e) => {
    props.navigation.push("ChatView");
  };

  return (
    <View style={MainStyles.container}>
      <Text>Chat List View</Text>
      <Button title="Button" onPress={goToChatView}></Button>
    </View>
  );
};

const ContactsView = function (props) {
  const goToChatView = (e) => {
    props.navigation.push("ChatView");
  };

  return (
    <View style={MainStyles.container}>
      <Text>Contacts View</Text>
      <Button title="Button" onPress={goToChatView}></Button>
    </View>
  );
};

const MainView = function (props) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: "#FFF",
        },
        tabBarLabelStyle: {
          color: "#FFF",
        },
        tabBarStyle: {
          color: "#FFF",
          borderBottomColor: "#ddd",
          borderBottomWidth: 1,
          backgroundColor: "#008069",
        },
      }}
    >
      <Tab.Screen
        name="ChatList"
        options={{ title: "Chat" }}
        component={ChatListView}
      />
      <Tab.Screen name="Contacts" component={ContactsView} />
    </Tab.Navigator>
  );
};

export default MainView;
