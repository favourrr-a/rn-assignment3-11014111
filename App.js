import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';
import { appStyles } from './styles/appStyles';
import Banner from './components/banner/Banner.js';
import Search from './components/search/Search.js';
import TaskCategories from './components/task-categories/TaskCategories.js';
import OngoingTasks from './components/ongoing-tasks/OngoingTasks.js';

export default function App() {
  return (
    <View style={appStyles.container}>
      <View style={appStyles.componentsContainer}>
        <StatusBar style="auto" />
        <Banner/>
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <Search/>
          <TaskCategories/>
          <OngoingTasks/>
        </ScrollView>
      </View>
    </View>
  );
}
