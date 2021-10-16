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
  Alert,
  Button,
  FlatList,
  Linking,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
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
  const [isSubmitted, setSubmit] = useState(false)

  const onPressHandler = ()=>{
    if(name.length > 3){
      setSubmit(!isSubmitted)
    }else{
      Alert.alert(
        "Warning!!", "Name must be at least 4 characters", 
        [{text: 'OK', onPress: ()=> console.warn('Ok pressed')}, {text: 'NO'}, {text: 'Do not hsow again'}],
        {cancelable: true})
    }
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>
        Please enter your name:
      </Text>
      <TextInput style={styles.input} placeholder='Enter your name' onChangeText={(value)=> setName(value)}/>

      <Pressable onPress={onPressHandler} style={({pressed}) =>
      [{backgroundColor: pressed? 'yellow': 'green'}, styles.button]}
      android_ripple={{color:'red'}}>
        <Text style={styles.text}>
          {isSubmitted? 'Submitted': 'Submit'}
        </Text>
      </Pressable>
      {/* <TouchableHighlight onPress={onPressHandler} style={styles.button} underlayColor='green'>
        <Text style={styles.text}>
          {isSubmitted? 'Submitted': 'Submit'}
        </Text>
      </TouchableHighlight> */}
      {/* <TouchableOpacity onPress={onPressHandler} style={styles.button}>
        <Text style={styles.text}>
          {isSubmitted? 'Submitted': 'Submit'}
        </Text>
      </TouchableOpacity> */}
      {/* <Button title={isSubmitted? 'Submitted': 'Submit'} onPress={onPressHandler}/> */}
      {
        isSubmitted?
          <Text style={styles.text}>
            Your name is: {name}
          </Text>:
          null
      }
    
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
    padding: 5,
    marginBottom: 10
  },
  button: {
    borderWidth: 1,
    borderColor: 'blue',
    alignItems: 'center',
    borderRadius: 10,
    width: 200,
    height: 50
  }




});

export default App;
