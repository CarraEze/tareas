import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import React, { useState } from "react";

export const DisplayGroups = (props) => {

  return (
    <View>
      <FlatList
        data={props.tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) =>
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.group}</Text>
            <Pressable style={styles.itemPress} onPress={() => props.deleteGroup(item.id)}><Text style={styles.itemText}>Delete</Text></Pressable>
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
  }
});
