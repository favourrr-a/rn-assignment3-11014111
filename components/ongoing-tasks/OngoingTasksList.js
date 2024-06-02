import { View } from 'react-native';
import OngoingTaskCard from './OngoingTaskCard';
import { ongoingTasksListStyles } from '../../styles/ongoingTasks/ongoingTasksListStyles';

export default function OngoingTasksList(){
    const tasks = [
        { id: 1, title: 'Mobile App Development' },
        { id: 2, title: 'Web development' },
        { id: 3, title: 'Pushups' },
        { id: 4, title: 'DCIT202 assignment' },
        { id: 5, title: 'Reading' },
    ];
    return(
        <View style = {ongoingTasksListStyles.ongoingTasksListContainer}>
            {tasks.map(task => (
                <OngoingTaskCard
                    key={task.id}
                    title={task.title}
                />
            ))}
        </View>
    )
}