import { View, Text, Pressable, StyleSheet } from "react-native";
import { useState } from "react";
import { Checkbox } from "expo-checkbox";

export const Task = (props) => {
    const { item } = props;
    const [isChecked, setChecked] = useState(item.state);

    return (
        <View style={styles.item}>
            <Text style={styles.itemText}>{item.title}</Text>
            <Text style={styles.itemText}>{item.description}</Text>
            <Checkbox
                value={isChecked}
                onValueChange={() => {
                    props.toggleTask(item.id, props.groupId)
                    setChecked(!isChecked);
                }}
                color={item.state ? '#4630EB' : '#fff'}
            />
            <Pressable onPress={() => props.deleteTask(item.id)}><Text style={styles.itemPress}>Delete</Text></Pressable>
        </View>
    )
}

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