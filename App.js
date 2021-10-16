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
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'},
    {name: 'Item 5'},
    {name: 'Item 6'},
    {name: 'Item 7'},
    {name: 'Item 8'},
    {name: 'Item 9'},
    {name: 'Item 10'},
    {name: 'Item 11'},
    {name: 'Item 12'},
    {name: 'Item 13'},
    {name: 'Item 14'},
  ]);


  const [DATA, setData] = useState([
    {
      title: `Title ${1}`,
      data: [`Item 1-1`, `Item 1-2`, `Item 1-3` ]
    }
  ]);

  const [Resfreshing, setRefresh] = useState(false)

  const onRefresh =()=>{
    setRefresh(true);
    setData([...DATA, {title: `Title ${DATA.length + 1}`, data: [`Item ${DATA.length + 1}-1`, `Item ${DATA.length + 1}-2`]}]);
    setRefresh(false);
  }

  return (
    <View style={styles.body}>

      <SectionList
        sections= {DATA}
        refreshControl={
          <RefreshControl
            refreshing= {Resfreshing}
            onRefresh= {onRefresh}
          />
        }
        keyExtractor={(item, index)=>index.toString()}
        renderItem={({ item })=>(
          <View style={styles.itemChild}>
              <Text style={styles.text}>{item}</Text>
          </View>
        )}
        renderSectionHeader={
          ({section})=>(
            <View style={styles.item}>
             <Text style={styles.text}>{section.title}</Text>
            </View>
          )
        }
      />

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
    borderWidth: 2,
    borderColor: 'black'
  },

  itemChild: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'grey'
  },

  text: {
    color: 'black',
    fontSize: 35,
    fontStyle: 'italic',
    margin: 10
  }




});

export default App;
