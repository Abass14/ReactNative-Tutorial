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
    setCountTimes(countTimez);
  }
  return (
    <View style={styles.body}>
      <Text style={styles.text}>{number}</Text>
      <View style={styles.button}>
        <Button title='Add' onPress={count}></Button>
      </View>
      <Text style={styles.text}>You clicked {countTimes} times</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    borderWidth: 20,
    borderColor: 'red',
    margin: 40
  },

  text: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10
  },

  button: {
    width: 100,
    height: 50
  }
});

export default App;
