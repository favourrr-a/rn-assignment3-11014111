import { View } from 'react-native';
import OngoingTaskCard from './OngoingTaskCard';
import { ongoingTasksListStyles } from '../../styles/ongoingTasks/ongoingTasksListStyles';

export default function OngoingTasksList(){
    const tasks = [
        { id: 1, title: 'Practice Mobile App Development' },
        { id: 2, title: 'Improve Web development skills' },
        { id: 3, title: 'Do Pushups' },
        { id: 4, title: 'Do DCIT202 assignment' },
        { id: 5, title: 'Study MATH220' },
        { id: 6, title: 'Come up with ideas for upcoming projects' },
        { id: 7, title: 'Listen to uplifting music' },
        { id: 8, title: 'Practice gratitude' },
        { id: 9, title: 'Work on python project' },
        { id: 10, title: 'Borrow book at library' },
        { id: 11, title: 'Read The Idiot by Fyodor Dostoevsky' },
        { id: 12, title: 'Contemplate life' },
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