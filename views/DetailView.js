import { FlatList, Text, Pressable, View } from "react-native";
import { DisplayTasks } from "../components/DisplayTasks.js";
import { useContext, useState } from "react";
import { AddBar } from "../components/AddBar.js";
import { DataContext } from '../Context.js';


export const DetailView = (props) => {
    const {groups, setGroups} = useContext(DataContext);

    const addTask = (value) => {
        if (value.trim() != '') {
            setGroups(groups.map(group => {
                if (group.id === props.idDisplayed) {
                    group.tasks.push({ id: group.taskId, title: value, description: '', state: 'pending' });
                    group.taskId += 1;
                }
                return group;
            }))
            console.log(groups.filter(group => group.id === props.idDisplayed)[0]);
        }
    }

    const deleteTask = (id) => {
        setGroups(groups.map(group => {
            if (group.id === props.idDisplayed) {
                group.tasks = group.tasks.filter(task => task.id !== id);
            }
            return group
        }
    ))}
    
    return (
        <View>
            <AddBar addElement={addTask} placeholder={"New task"}/>
            <Pressable onPress={() => props.goBack()}><Text style={{ color: '#0af', marginTop: 10 }}>Go Back</Text></Pressable>
            <DisplayTasks tasks={groups.filter(group => group.id === props.idDisplayed)[0].tasks} deleteTask={deleteTask} />
        </View>
    )
}