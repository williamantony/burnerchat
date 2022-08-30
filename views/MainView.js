import { View, Text, TouchableOpacity, Button } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import MainStyles from "../styles/main.styles";
import { useState } from "react";

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

const PopupMenu = function (props) {
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const togglePopup = (e) => {
    setPopupVisibility(!isPopupVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={togglePopup}>
        <Ionicons name="ellipsis-vertical" size={25} color="#000" />
      </TouchableOpacity>
      <View style={{ display: isPopupVisible ? "block" : "none" }}>
        POPUP MENU
      </View>
    </View>
  );
};

const ChatListView = function (props) {
  const goToChatView = (e) => {
    alert("Test");
    props.navigation.push("ChatView");
  };

  return (
    <View style={MainStyles.container}>
      <PopupMenu />
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
