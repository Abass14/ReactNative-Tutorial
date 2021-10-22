import React, { useState } from 'react';
// import type {Node} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export const ScreenB = ({navigation}) =>{
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