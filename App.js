import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import AppRoutes from './src/Routes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
      />
      <AppRoutes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
  }
});