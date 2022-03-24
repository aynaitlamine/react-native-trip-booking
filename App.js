import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/config/theme'
import { StartScreen } from './src/screens';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <StartScreen />
      <StatusBar style="auto" />
    </PaperProvider>
  );
}

