import { View, Text, TextInput, StyleSheet, FlatList, Pressable, Modal } from "react-native";
import { useState } from "react";

export const DisplayTasks = (props) => {

  return (
    <View>
          <FlatList
            data={props.tasks}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
              <View style={styles.item}>
                <Text style={styles.itemText}>{item.title}</Text>
                <Text style={styles.itemText}>{item.description}</Text>
                <Pressable onPress={() => props.deleteTask(item.id)}><Text style={styles.itemPress}>Delete</Text></Pressable>
              </View>
            }
          />
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
