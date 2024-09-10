import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Text
        style={styles.headerText}
        onPress={() => navigation.navigate("Profile")}
      >
        프로필
      </Text>
      <Text
        style={styles.headerText}
        onPress={() => navigation.navigate("Home")}
      >
        메인
      </Text>
      <Text
        style={styles.headerText}
        onPress={() => navigation.navigate("Write")}
      >
        글쓰기
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 110,
    paddingHorizontal: 40,
    paddingVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "aqua",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "700",
  },
});

export default Header;
