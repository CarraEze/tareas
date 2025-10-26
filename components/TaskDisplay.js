import { Text } from "react-native";

export const TaskDisplay = (props) => {
    return (
        <Text>{props.title}: {props.description}</Text>
    )
}