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
  FlatList,
  Linking,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
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

  const [name, setName] = useState('');

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please enter your name:
      </Text>
      <TextInput style={styles.input} placeholder='Enter your name' onChangeText={(value)=> setName(value)}/>
      <Text style={styles.text}>
        Your name is: {name}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column', 
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontStyle: 'italic',
    margin: 10
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    width: 200,
    borderRadius: 5,
    padding: 5
  }




});

export default App;
