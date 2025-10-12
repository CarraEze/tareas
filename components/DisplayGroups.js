import { View, Text, TextInput, StyleSheet, FlatList, Pressable, Modal } from "react-native";
import React, { useState } from "react";

export const DisplayGroups = (props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleUpdate = (id) => {
   // set modal to true and send id and new name to App.js
  }

  return (
    <View>
      <FlatList
        data={props.tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.group}</Text>
            <Pressable style={styles.itemPress} onPress={() => props.deleteGroup(item.id)}><Text style={styles.itemText}>Delete</Text></Pressable>
            <Pressable style={styles.itemPress} onPress={() => handleUpdate(item.id)}><Text style={styles.itemText}>Upd</Text></Pressable>
          </View>
        }
      />
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modal}>
          <Text style={styles.itemText}>Update Group</Text>
          <TextInput placeholder="New group name" onChangeText={text =>setInputValue(text)}/>
          <Pressable onPress={() => {
            //handleUpdate(id,newValue)
          }}><Text>Update</Text></Pressable>
          <Pressable onPress={() => setModalVisible(false)}><Text>Cancel</Text></Pressable>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    color: '#fff',
    borderBottomColor: '#eee',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    padding: 10
  },
  itemText: {
    color: '#fff',
    fontSize: 20,
  },
  itemPress: {
    color: '#fff',
    fontSize: 20,
  },
  modal: {
    backgroundColor: '#779',
    alignSelf: 'center',
  }
});
