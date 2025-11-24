import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { TasksView } from './views/TasksView.js';
import { GroupsView } from './views/GroupsView.js';
import { useState, useCallback, useEffect } from "react";
import { GeneralContext } from './Context.js';
import { loadData, saveData } from './storage.js';

export default function App() {
  const [actualView, setActualView] = useState('GroupsView');
  const [groups, setGroups] = useState([])
  const [idCount, nextId] = useState(0);
  const [idSelected, setIdSelected] = useState(0);

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
    <GeneralContext.Provider value={{ groups, setGroups, idCount, nextId, saveData, loadData}}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {viewsContainer[actualView]}
      </View>
    </GeneralContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#113',
  },
});
