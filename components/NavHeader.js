import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import TestProfileImage from "../assets/test-profile.jpg";

const NavHeader = function (props) {
  return (
    <View style={styles.NavHeader}>
      <View style={styles.NavHeader_lhs}>
        <TouchableOpacity onPress={() => props.navigation.pop()}>
          <AntDesignIcon name="arrowleft" size={25} color="#FFF" />
        </TouchableOpacity>
        <Image
          style={styles.NavHeader_Profile_Img}
          source={TestProfileImage}
          resizeMode="cover"
        />
        <View>
          <Text style={styles.NavHeader_Profile_Name}>John Doe</Text>
          <Text style={styles.NavHeader_Profile_Status}>online</Text>
        </View>
      </View>
      <Ionicons name="ellipsis-vertical" size={25} color="#FFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  NavHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 15,
    backgroundColor: "#008069",
  },
  NavHeader_lhs: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  NavHeader_Profile_Img: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 15,
  },
  NavHeader_Profile_Name: {
    color: "#FFF",
    fontSize: 16,
  },
  NavHeader_Profile_Status: {
    color: "#FFF",
    fontSize: 13,
  },
});

export default NavHeader;
