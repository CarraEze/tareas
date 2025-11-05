import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Modal, Text, Pressable } from 'react-native';
import { AddBar } from '../components/AddBar.js';
import { DisplayGroups } from '../components/DisplayGroups.js';
import React, { useEffect, useState, useContext } from "react";
import { DataContext } from '../Context.js';

export const GroupsView = (props) => {
  const { groups, setGroups, idCount, nextId } = useContext(DataContext);

  const newGroup = (value) => {
    if (value.trim() != '' && !(groups.some(group => group.name === value))) {
      setGroups([...groups, { id: idCount + 1, name: value, taskId: 0, tasks: [] }]);
      nextId(idCount + 1);
    }
  };

  const deleteGroup = (id) => {
    setGroups(groups.filter(group => group.id !== id));
  }

  const updateGroup = (id, groupUpd) => {
    setGroup(groups.map(group => {
      if (group.id === id) {
        group.name = groupUpd;
      }
      return group;
    }));
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AddBar addElement={newGroup} placeholder={"New group"} />
      <DisplayGroups groups={groups} deleteGroup={deleteGroup} updateGroup={updateGroup} goDetail={props.goDetail} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#113',
  },
});
