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

  return (
    <View style={styles.body}>
      <View style={styles.subBody}>
        <View style={styles.subBodyRow}>
          <View style={styles.view1}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text}>3</Text>
          </View>
        </View>
        
        <View style={styles.subBody2}>
          <Text style={styles.text}>4</Text>
        </View>
        <View style={styles.subBody3}>
          <Text style={styles.text}>5</Text>
        </View>
      </View>

      

      <View style={styles.subBody4}>
        <View style={styles.view4}>
          <Text style={styles.text}>6</Text>
        </View>
        <View style={styles.view5}>
          <Text style={styles.text}>7</Text>
        </View>
      </View>
    
    
      
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column', 
  },

  subBody: {
    flex: 2,
    flexDirection: 'column',
  },

  subBodyRow:{
    flex: 1,
    flexDirection: 'row'
  },

  subBody2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  subBody3: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },

  subBody4: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center',
  },

  view4: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center'
  
  },
  view5: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    color: 'black',
    fontSize: 20
  },
  view1: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    flex: 2,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view3: {
    flex: 3,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },



});

export default App;
