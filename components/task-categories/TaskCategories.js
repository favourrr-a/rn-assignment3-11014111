import { View, Text } from 'react-native';
import { taskCategoriesStyles } from '../../styles/taskCategoriesStyles/taskCategoriesStyles';

export default function TaskCategories(){
    return(
        <View style = {taskCategoriesStyles.taskCategoriesContainer}>
            <Text style = {taskCategoriesStyles.taskCategoriesTitle}>
                Categories
            </Text>
        </View>
    )
}