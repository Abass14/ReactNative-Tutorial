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
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Headers } from './Header'

const Stack = createStackNavigator();

const ScreenA = ({navigation}) =>{

  const handlePressable =() =>{
    navigation.navigate('Screen_B')
  }
  return (
    <View style={styles.body}>
      <Headers />
      <View style={styles.bodyTwo}>
        <Text style={styles.text}>
          Screen A
        </Text>
        <Pressable 
          style={({pressed}) => ({ backgroundColor: pressed ? 'blue' : 'red', padding: 10, borderRadius: 10})}
          onPress={handlePressable}
        >
          <Text>Go to Screen B</Text>
        </Pressable>
      </View>
    </View>
  );
};

const ScreenB = ({navigation}) =>{
  const handlePressable =() =>{
    // navigation.navigate('Screen_A')
    //navigation.replace('Screen_A) this replaces screen B with A and clears backStack
    navigation.goBack();
  }
  return (
    <View style={styles.body}>
      <View style={styles.bodyTwo}>
        <Text style={styles.text}>
          Screen B
        </Text>
        <Pressable 
          style={({pressed}) => ({ backgroundColor: pressed ? 'blue' : 'red', padding: 10, borderRadius: 10})}
          onPress={handlePressable}
        >
          <Text>Go to Screen A</Text>
        </Pressable>
      </View>
    </View>
  );
};
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null  //To remove all default toolbars on all Screens
        }}
      >
        <Stack.Screen 
          name="Screen_A"
          component={ScreenA}
          options={{
            header: () => null //to remove toolbar from screen
          }}
        />
        <Stack.Screen 
          name="Screen_B"
          component={ScreenB}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column', 
    alignItems: 'center',
  },

  bodyTwo:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    color: 'black',
    fontSize: 34,
    fontWeight: 'bold'
  },
});

export default App;
