import { StyleSheet, Text, View } from 'react-native';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStaticNavigation } from '@react-navigation/native';

// npm install @react-navigation/native @react-navigation/native-stack
// npm install react-native-screens react-native-safe-area-context

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Screen1',
  screenOptions: { headerShown: false },
  screens: {
    Screen1,
    Screen2,
  },
})

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
    <Navigation />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
