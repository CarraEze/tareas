import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { TasksView } from './views/TasksView.js';
import { GroupsView } from './views/GroupsView.js';
import { useState, useCallback, useEffect, use } from "react";
import { DataContext } from './Context.js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [actualView, setActualView] = useState('GroupsView');
  const [groups, setGroups] = useState([])
  const [idCount, nextId] = useState(0);
  const [idSelected, setIdSelected] = useState(0);

  useEffect(() => {console.log("sss")}, [groups]);

  const goDetail = useCallback((id) => {
    setActualView('TasksView')
    setIdSelected(id);
  }, [setActualView]);
  const goBack = useCallback(() => setActualView('GroupsView'), [setActualView]);

  const viewsContainer = {
    GroupsView: <GroupsView goDetail={goDetail} />,
    TasksView: <TasksView goBack={goBack} idDisplayed={idSelected} />,
  };

  return (
    <DataContext.Provider value={{ groups, setGroups, idCount, nextId }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {viewsContainer[actualView]}
      </View>
    </DataContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#113',
  },
});
