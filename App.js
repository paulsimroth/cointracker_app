import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color: "white"}}>Hello World</Text>
      <Image source={{uri: "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"}} style={{height: 25, width: 25}}/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
});
