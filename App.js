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
  RefreshControl,
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
  const [items, setItems] = useState([
    {key: 1, item: 'Item 1'},
    {key: 2, item: 'Item 2'},
    {key: 3, item: 'Item 3'},
    {key: 4, item: 'Item 4'},
    {key: 5, item: 'Item 5'},
    {key: 6, item: 'Item 6'},
    {key: 7, item: 'Item 7'},
    {key: 8, item: 'Item 8'},
    {key: 9, item: 'Item 9'},
    {key: 10, item: 'Item 10'},
    {key: 11, item: 'Item 11'},
    {key: 12, item: 'Item 12'},
    {key: 13, item: 'Item 13'},
    {key: 14, item: 'Item 14'},
  ]);

  const [Resfreshing, setRefresh] = useState(false)
  const onRefresh =()=>{
    setRefresh(true);
    setItems([...items, {key: 15, item: 'Item 100'}]);
    setRefresh(false);
  }

  return (
    <View style={styles.body}>
      <ScrollView 
        refreshControl={
          <RefreshControl 
            refreshing={ Resfreshing }
            onRefresh= {onRefresh}
            colors={['red']}
          />
        }
      >
        {
          items.map((i)=>{
              return (
                <View style={styles.item} key={i.key}>
                <Text style={styles.text}>{i.item}</Text>
              </View>
              )
          })
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flexDirection: 'column', 
  },

  item:{
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },

  text: {
    color: 'black',
    fontSize: 35,
    fontStyle: 'italic',
    margin: 10
  }




});

export default App;
