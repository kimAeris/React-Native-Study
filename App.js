import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './screens/MainScreen';

import KeyboardAvoidingComponent from './coreComponents/KeyboardAvooding';

export default function App() {
  return (
    <MainScreen />
    // <KeyboardAvoidingComponent />
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
