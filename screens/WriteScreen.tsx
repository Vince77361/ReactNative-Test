import axios from "axios";
import { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button, Alert } from "react-native";

const WriteScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const onSubmit = async () => {
    const formData = {
      title: title,
      content: content,
    };
    await axios.post("http://localhost:3000/post", formData);
    Alert.alert(`Form submitted. title: ${title}, content: ${content}`);
    setTitle("");
    setContent("");
  };
  return (
    <View style={styles.container}>
      <Text>글쓰기페이지</Text>
      <TextInput
        style={styles.textinput}
        placeholder="제목"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.textinput}
        placeholder="내용"
        value={content}
        onChangeText={setContent}
      />
      <Button title="submit" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textinput: {
    width: 200,
    height: 30,
    borderWidth: 1,
  },
});

export default WriteScreen;
