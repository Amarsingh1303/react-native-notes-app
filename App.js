import React, { useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddToDoForm from "./components/AddToDoForm";
import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn Html" },
    { id: 2, text: "Learn Javascript" },
    { id: 3, text: "Learn React Js" },
  ]);

  const todoDeleteHandler = (id) => {
    setTodos((prevState) => {
      return prevState.filter((todo) => todo.id != id);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevState) => {
        const newTodo = {
          id: Math.random(),
          text: text,
        };
        return [newTodo, ...prevState];
      });
    } else {
      Alert.alert("OOPS", "To do must be atleast 4 char...", [
        {
          text: "Understood",
          onPress: () => console.log("alert closed"),
        },
      ]);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddToDoForm submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              keyExtractor={(item) => item.id.toString()}
              data={todos}
              renderItem={({ item }) => (
                <ToDoItem item={item} pressHandler={todoDeleteHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 40,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
