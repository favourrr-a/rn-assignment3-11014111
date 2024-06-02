import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { appStyles } from './styles/appStyles';
import Banner from './components/banner/Banner.js';
import Search from './components/search/Search.js';

export default function App() {
  return (
    <View style={appStyles.container}>
      <View style={appStyles.componentsContainer}>
        <StatusBar style="auto" />
        <Banner/>
        <Search/>
      </View>
    </View>
  );
}
