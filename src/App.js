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
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ScreenA} from './ScreenA'
import { ScreenB } from './ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

// const Tab = createMaterialBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) =>({
          tabBarIcon: ({focused, size, color}) => {
            let icomName;
            if(route.name === 'Screen A'){
              icomName = 'autoprefixer';
              size = focused? 25 : 20;
              color = focused? 'black' : 'red';
            }else if(route.name === 'Screen B'){
              icomName = 'bootstrap';
              size = focused? 25 : 20;
              color = focused? 'black' : 'red';
            }
            return(
              <FontAwesome5
                name={icomName}
                size={size}
                color={color}
              />
            )
          }
        })}
        tabBarOptions={{
          activeBackgroundColor: 'grey',
          labelStyle: { fontSize: 14},
          // showIcon: false
        }}
        activeColor="white"
        inactiveColor="black"
        barStyle={{backgroundColor: "purple"}}
      >
        <Tab.Screen 
          name="Screen A"
          component={ScreenA}
        />
        <Tab.Screen 
          name="Screen B"
          component={ScreenB}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column', 
    alignItems: 'center',
  },
});

export default App;
