/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
// import type {Node} from 'react';
import {
  Button,
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



const App = () => {
  const [number, setNumber] = useState(0);
  const [countTimes, setCountTimes] = useState(0);
  const addNumber = () =>{
    return number + 5
  }

  const countTimez = () =>{
    return countTimes + 1
  }
  const count = ()=>{
    setNumber(addNumber);
    setCountTimes(countTimes + 1);
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{number}</Text>
      <Button title='Add' onPress={count}></Button>
      <Text style={styles.text}>You clicked {count} times</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },

  text: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10
  }
});

export default App;
