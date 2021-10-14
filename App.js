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

  const [name, setName] = useState('Abass');
  const [amount, setDebt] = useState({amountOne: 200, amountTwo: 500});
  const [current, setSession] = useState(true);
  const onClickHandler = () =>{
    setName('Richard');
    setDebt({amountOne: 1000, amountTwo: 550});
    setSession(false);
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>My name is {name}</Text>
      <Text style={styles.text}>Mr Richard owes {amount.amountOne} and Jegede owes {amount.amountTwo}</Text>
      <Text style={styles.text}>{current ? 'current session' : 'next session'}</Text>
      <Button title='Click Me' onPress={onClickHandler}></Button>
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
