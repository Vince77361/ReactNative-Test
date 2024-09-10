import { Text, View, StyleSheet } from "react-native";

interface ListItemProps {
  title: string;
  content: string;
}

const ListItem: React.FC<ListItemProps> = ({ title, content }) => {
  return (
    <View style={styles.ListItemContainer}>
      <Text style={styles.titleText}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ListItemContainer: {
    marginVertical: 10,
    marginHorizontal: "auto",
    backgroundColor: "gray",
    borderRadius: 20,
    width: 300,
    height: 90,
    justifyContent: "center",
    paddingLeft: 30,
    columnGap: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "700",
    color: "white",
  },
  contentText: { fontSize: 20, color: "white" },
});

export default ListItem;
