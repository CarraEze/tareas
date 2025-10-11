import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Modal } from 'react-native';
import { AddBar } from './components/AddBar.js';
import { DisplayGroups } from './components/DisplayGroups.js';
import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [idCount, nextId] = useState(0);

  const newGroup = (value) => {
    if (value.trim() != '' && tasks.filter(task => task.group === value).length === 0) {
      setTasks([...tasks, { id: idCount + 1, group: value }]);
      nextId(idCount + 1);
    }
  };

  const deleteGroup = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <AddBar newGroup={newGroup}/>
      <DisplayGroups tasks={tasks} deleteGroup={deleteGroup} />
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
