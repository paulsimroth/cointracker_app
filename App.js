import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CoinDetailScreen from './src/screens/CoinDetailScreen';
/* import HomeScreen from './src/screens/HomeScreen'; */

export default function App() {
  return (
    <View style={styles.container}>
      <CoinDetailScreen />
      <StatusBar style="light" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
});
