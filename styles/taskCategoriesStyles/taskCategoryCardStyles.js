import { StyleSheet } from 'react-native';

export const taskCategoryCardStyles = StyleSheet.create({
    taskCategoryContainer: {
        height: '100%',
        width: 170,
        borderRadius: 10,
        backgroundColor: '#FBF9F7',
        marginRight: 15,
        padding: 10
    },
    taskCategoryTitle: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    taskCategoryTasksNumber: {
        fontSize: 16
    },
    taskCategoryImageContainer: {
        height: '80%',
    },
    taskCategoryImage: {
        width: 130, 
        height: 130,
        marginLeft: 10,
    }
})