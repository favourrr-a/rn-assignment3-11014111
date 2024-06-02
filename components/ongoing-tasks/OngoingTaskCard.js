import {View, Text} from 'react-native';
import { ongoingTaskCardStyles } from '../../styles/ongoingTasks/ongoingTaskCardStyles';

export default function OngoingTaskCard({title}){
    return(
        <View style = {ongoingTaskCardStyles.ongoingTaskContainer}>
            <Text style = {ongoingTaskCardStyles.ongoingTaskTitle}>
                {title}
            </Text>
        </View>
    )
}