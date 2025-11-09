import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { Task } from "./Task.js";

export const DisplayTasks = (props) => {
    
  return (
    <View>
          <FlatList
            data={props.group.tasks}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
                <Task item={item} deleteTask={props.deleteTask} toggleTask={props.toggleTask} groupId={props.group.id} />
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
