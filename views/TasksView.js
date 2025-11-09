import { FlatList, Text, Pressable, View } from "react-native";
import { DisplayTasks } from "../components/DisplayTasks.js";
import { useContext, useEffect } from "react";
import { AddBar } from "../components/AddBar.js";
import { DataContext } from '../Context.js';


export const TasksView = (props) => {
    const { groups, setGroups } = useContext(DataContext);

    const addTask = (value) => {
        if (value.trim() != '') {
            setGroups(groups.map(group => {
                if (group.id === props.idDisplayed) {
                    group.tasks.push({ id: group.taskId, title: value, description: '', state: false });
                    group.taskId += 1;
                }
                return group;
            }))
        }
    }

    const deleteTask = (id) => {
        setGroups(groups.map(group => {
            if (group.id === props.idDisplayed) {
                group.tasks = group.tasks.filter(task => task.id !== id);
            }
            return group
        }
        ))
    }

    const toggleTask = (taskIdToUpdate, groupIdToUpdate) => {
        setGroups(groups.map(group => {
            if (group.id === groupIdToUpdate) {
                group.tasks = group.tasks.map(task => {
                    if (task.id === taskIdToUpdate) {
                        task.state = !task.state;
                    }
                    return task;
                });
            }
            return group;
        }));
    }

    return (
        <View>
            <AddBar addElement={addTask} placeholder={"New task"} />
            <Pressable onPress={() => props.goBack()}><Text style={{ color: '#0af', marginTop: 10 }}>Go Back</Text></Pressable>
            <DisplayTasks group={groups.find(group => group.id === props.idDisplayed)} deleteTask={deleteTask} toggleTask={toggleTask} />
        </View>
    )
}