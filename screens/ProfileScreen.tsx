import { StyleSheet, View, Text } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text>프로필페이지는 지금 구현 중입니다.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ProfileScreen;
