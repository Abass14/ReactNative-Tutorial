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
  Modal,
  Pressable,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image
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
  const [showWarning, setWarning] = useState(false)

  const onPressHandler = ()=>{
    if(name.length > 3){
      setSubmit(!isSubmitted)
    }else{
      setWarning(true)
    }
  }

  return (
    <View style={styles.body}>
      <Modal 
        visible={showWarning}
        transparent
        onRequestClose={()=>
          setWarning(false)
          }
        animationType='slide'
        hardwareAccelerated
        >
          <View style={styles.modal_center}>
            <View style={styles.modal_warning}>
              <View style={styles.warning_title}>
                <Text style={styles.warning_title_text}>Warning</Text>
              </View>
              <View style={styles.warning_body}>
                <Text style={styles.text}>Name must be at least 4 characters</Text>
              </View>
              <Pressable onPress={() => {setWarning(false)}} style={styles.warning_button}>
               <Text style={styles.warning_title_text}>OK</Text>
              </Pressable>
            </View>
          </View>
      </Modal>
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
    margin: 10,
    textAlign: 'center'
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
  },
  modal_center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00000099'
  },
  modal_warning:{
    width: 300,
    height: 250,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'white',
    alignItems: 'stretch',
  },
  warning_title:{
    backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    flex: 1
  }, 
  warning_title_text:{
    color: 'white',
    fontSize: 20
  },
  warning_body:{
    alignItems: 'center',
    justifyContent: 'center',
    flex: 2
  },
  warning_button:{
    backgroundColor: 'blue',
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }




});

export default App;
