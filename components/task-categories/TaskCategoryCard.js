import {View, Text, Image} from 'react-native';
import { taskCategoryCardStyles } from '../../styles/taskCategoriesStyles/taskCategoryCardStyles';

export default function TaskCategoryCard({title, numberOfTasks, photo}){
    return(
        <View style = {taskCategoryCardStyles.taskCategoryContainer}>
            <Text style = {taskCategoryCardStyles.taskCategoryTitle}>
                {title}
            </Text>
            <Text style = {taskCategoryCardStyles.taskCategoryTasksNumber}>
                {`${numberOfTasks} Tasks`}
            </Text>
            <View style = {taskCategoryCardStyles.taskCategoryImageContainer}>
                <Image source = {photo} style = {taskCategoryCardStyles.taskCategoryImage}/>
            </View>
        </View>
    )
}