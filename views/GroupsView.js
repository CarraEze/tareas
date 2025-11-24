import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Modal, Text, Pressable } from 'react-native';
import { AddBar } from '../components/AddBar.js';
import { DisplayGroups } from '../components/DisplayGroups.js';
import { useContext } from "react";
import { GeneralContext, HandleContext } from '../Context.js';

export const GroupsView = (props) => {
  const { groups, setGroups, idCount, nextId, saveData } = useContext(GeneralContext);

  const addGroup = (value) => {
    if (value.trim() != '' && !(groups.some(group => group.name === value))) {
      setGroups([...groups, { id: idCount + 1, name: value, taskId: 0, tasks: [] }]);
      nextId(idCount + 1);
      saveData();
    }
  };

  const deleteGroup = (id) => {
    setGroups(groups.filter(group => group.id !== id));
    saveData();
  }

  const updateGroup = (id, groupUpd) => {
    setGroup(groups.map(group => {
      if (group.id === id) {
        group.name = groupUpd;
        saveData();
      }
      return group;
    }));
  }

  return (
    <HandleContext.Provider value={{ addElement : addGroup }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <AddBar placeholder={"New group"} />
        <DisplayGroups groups={groups} deleteGroup={deleteGroup} updateGroup={updateGroup} goDetail={props.goDetail} />
      </View>
    </HandleContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#113',
  },
});
