import { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import axios from "axios";
import ListItem from "../components/ListItem";

const MainScreen = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get("http://localhost:3000/post")
        .then((r) => setData(r.data));
    };
    fetchData();
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={styles.HeadText}>메인 페이지</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {data.map((key: any) => (
          <ListItem key={key.id} title={key.title} content={key.content} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
  },
  HeadText: {
    fontSize: 28,
    marginHorizontal: "auto",
    marginVertical: 30,
    fontWeight: "700",
  },
});

export default MainScreen;
