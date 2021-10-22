import React, { useState } from 'react';
// import type {Node} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { Headers } from './Header'

export const ScreenA = ({navigation}) =>{

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