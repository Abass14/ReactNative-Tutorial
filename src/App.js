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
import 'react-native-gesture-handler';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ScreenA} from './ScreenA'
import { ScreenB } from './ScreenB';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { color } from 'react-native-reanimated';

// const Tab = createMaterialBottomTabNavigator();
// const Tab = createMaterialTopTabNavigator();
const Drawer = createDrawerNavigator();

//openDrawer() and closeDrawer() moethods can be set on views to open and close drawer nav
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Screen A"
        drawerPosition='right'
        drawerType='slide'
        overlayColor='red'
        drawerStyle={{
          backgroundColor: 'blue'
        }}
        screenOptions={{
          headerShown: true,
          swipeEnabled: true,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: 'blue',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: 'bold'
          }
        }}
      >
        <Drawer.Screen 
          name="Screen A"
          component={ScreenA}
          options={{
            title: 'This is Screen A'
          }}
        />
        <Drawer.Screen 
          name="Screen B"
          component={ScreenB}
          options={{
            title: 'This is Screen B',
            drawerIcon: ({focused}) =>(
              <FontAwesome5 name='btc' size={focused ? 25 : 20} color={focused ? 'black' : 'red'} />
            )
          }}
        />
      </Drawer.Navigator>
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
