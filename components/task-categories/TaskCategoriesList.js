import { FlatList } from 'react-native';
import TaskCategoryCard from './TaskCategoryCard';
import studyImage from '../../assets/study-category.png';
import workImage from '../../assets/work-category.png';
import exerciseImage from '../../assets/exercise-category.png';
import travelImage from '../../assets/travel-category.png';
import hobbiesImage from '../../assets/hobbies-category.png';
import cookingImage from '../../assets/cooking-category.png';
import programmingImage from '../../assets/programming-category.png';
import goalsImage from '../../assets/goals-category.png';

import { taskCategoriesListStyles } from '../../styles/taskCategoriesStyles/taskCategoriesListStyles';

export default function TaskCategoriesList(){
    const categories = [
        { id: 1, title: 'Study', numberOfTasks: 12, photo: studyImage},
        { id: 2, title: 'Exercise', numberOfTasks: 12, photo: exerciseImage },
        { id: 3, title: 'Work', numberOfTasks: 6, photo: workImage },
        { id: 4, title: 'Travel', numberOfTasks: 8, photo: travelImage },
        { id: 5, title: 'Hobbies', numberOfTasks: 8, photo: hobbiesImage },
        { id: 6, title: 'Cooking', numberOfTasks: 3, photo: cookingImage },
        { id: 7, title: 'Programming', numberOfTasks: 4, photo: programmingImage },
        { id: 8, title: 'Goals', numberOfTasks: 7, photo: goalsImage },
    ];
    return(
        <FlatList horizontal showsHorizontalScrollIndicator = {false} data = {categories} style = {taskCategoriesListStyles.taskCategoryListContainer}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <TaskCategoryCard
                    title={item.title}
                    numberOfTasks={item.numberOfTasks}
                    photo={item.photo}
                />
            )
        }/>
    )
}