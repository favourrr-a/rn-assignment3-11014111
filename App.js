import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { appStyles } from './styles/appStyles';

export default function App() {
  return (
    <View style={appStyles.container}>
      <StatusBar style="auto" />
    </View>
  );
}
