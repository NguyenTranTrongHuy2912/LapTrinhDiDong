import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen01 from './screens/Screen01';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen02 from './screens/Screen02';
import Screen03 from './screens/Screen03';
import { createStaticNavigation } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const RootStack = createNativeStackNavigator({
  initialRouteName: 'Started',
  screens: {
    Started: Screen01,
    Home: Screen02,
    Detail: Screen03,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return (
        <Navigation></Navigation>
  );
}

const styles = StyleSheet.create({});
