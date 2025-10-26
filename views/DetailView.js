import { FlatList, Text, Pressable, View } from "react-native";
import { TaskDisplay } from "../components/TaskDisplay.js";
import { useEffect } from "react";


export const DetailView = (props) => {

    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>TEST</Text>
            <Pressable onPress={() => props.goBack()}><Text style={{ color: '#0af', marginTop: 10 }}>Go Back</Text></Pressable>
            <FlatList
                data={props.data}
                renderItem={({ item }) => <TaskDisplay title={item.title} description={item.description} />}
            />
        </View>
    )
}