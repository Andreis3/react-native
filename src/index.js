import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import './config/ReactotronConfig';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

console.tron.log('Hello World');
export default function App() {
  return (
    <View style={style.container}>
      <Text style={style.welcome}>welcome to React Native</Text>
      <Text style={style.welcome}>Abaixo</Text>
    </View>
  );
}
