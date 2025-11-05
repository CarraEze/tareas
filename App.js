import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Modal } from 'react-native';
import { DetailView } from './views/DetailView.js';
import { GroupsView } from './views/GroupsView.js';
import { useState, useCallback } from "react";
import { DataContext } from './Context.js';

export default function App() {
  const [actualView, setActualView] = useState('GroupsView');
  const [groups, setGroups] = useState([]);
  const [idCount, nextId] = useState(0);
  const [idSelected, setIdSelected] = useState(0);

  const goDetail = useCallback((id) =>{ 
    setActualView('DetailView') 
    setIdSelected(id);
  }, [setActualView]);
  const goBack = useCallback(() => setActualView('GroupsView'), [setActualView]);

  const viewsContainer = {
    GroupsView: <GroupsView goDetail={goDetail} />,
    DetailView: <DetailView goBack={goBack} idDisplayed={idSelected}/>,
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
