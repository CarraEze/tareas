import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Modal } from 'react-native';
import { DetailView } from './views/DetailView.js';
import { GroupsView } from './views/GroupsView.js';
import React, { useState, useCallback } from "react";

export default function App() {
  const [actualView, setActualView] = useState('GroupsView');

  const goDetail = useCallback(() => setActualView('DetailView'), [setActualView]);
  const goBack = useCallback(() => setActualView('GroupsView'), [setActualView]);

  const viewsContainer = {
    GroupsView: <GroupsView goDetail={goDetail}/>,
    DetailView: <DetailView goBack={goBack}/>,
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {viewsContainer[actualView]}
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
