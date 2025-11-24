import React, { useState, useContext } from "react";
import { View, TextInput, Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";
import { HandleContext } from '../Context.js';

export const AddBar = (props) => {
  const [inputValue, setInputValue] = useState('');
  const { addElement } = useContext(HandleContext);

  return (
    <View style={styles.addBarContainer}>
      <TextInput style={styles.input}
        placeholder={props.placeholder}
        onChangeText={text => setInputValue(text)}
      />
      <Pressable style={styles.addButton} onPress={() => addElement(inputValue)}><Text>Add</Text></Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
  },
  addBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
    borderRadius: 8,
    margin: 10
  },
  addButton: {
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1,
    width: '20%',
    borderLeftColor: '#000',
    borderLeftWidth: 1
  }
});
