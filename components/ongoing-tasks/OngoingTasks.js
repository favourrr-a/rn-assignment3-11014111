import { View, Text } from 'react-native';
import { ongoingTasksStyles } from '../../styles/ongoingTasks/ongoingTasksStyles';

export default function OngoingTasks(){
    return(
        <View style = {ongoingTasksStyles.ongoingTasksContainer}>
            <Text style = {ongoingTasksStyles.ongoingTasksTitle}>
                Ongoing Tasks
            </Text>
        </View>
    )
}