import { StyleSheet, View } from "react-native";
// import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ReduxStore from "./redux/ReduxStore";
import ChatView from "./views/ChatView";
import MainView from "./views/MainView";
import NavHeader from "./components/NavHeader";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={ReduxStore}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MainView"
          screenOptions={{ header: NavHeader }}
        >
          <Stack.Screen name="ChatView" component={ChatView} />
          <Stack.Screen name="MainView" component={MainView} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});
