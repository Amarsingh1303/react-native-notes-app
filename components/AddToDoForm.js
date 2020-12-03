import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

function AddToDoForm({ submitHandler }) {
  const [text, setText] = useState("");

  const changeHandler = (val) => {
    setText(val);
  };

  const handleSubmit = (text) => {
    submitHandler(text);
    setText("");
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="add todo..."
        onChangeText={changeHandler}
        value={text}
      />
      <Button
        title="Add ToDo"
        color="coral"
        onPress={() => handleSubmit(text)}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});

export default AddToDoForm;
