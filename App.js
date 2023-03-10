import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <LoginScreen /> */}
      <SignupScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 7,
  },
});
