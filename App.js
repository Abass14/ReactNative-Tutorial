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

  const DATA = [
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2', 'Item 1-3' ]
    },
    {
      title: 'Title 2',
      data: ['Item 2-1', 'Item 1-2', 'Item 1-3' ]
    },
    {
      title: 'Title 3',
      data: ['Item 3-1', 'Item 3-2' ]
    },
    {
      title: 'Title 4',
      data: ['Item 4-1']
    },
    {
      title: 'Title 5',
      data: ['Item 5-1', 'Item 5-2', 'Item 5-3' ]
    },
  ];

  const [Resfreshing, setRefresh] = useState(false)
  const onRefresh =()=>{
    setRefresh(true);
    setItems([...items, {name: 'Item 100'}]);
    setRefresh(false);
  }

  return (
    <View style={styles.body}>

      <SectionList
        sections= {DATA}
        keyExtractor={(item, index)=>index.toString()}
        renderItem={({ item })=>(
           <Text style={styles.text}>{item}</Text>
        )}
        renderSectionHeader={
          ({section})=>(
            <View style={styles.item}>
             <Text style={styles.text}>{section.title}</Text>
            </View>
          )
        }
      />

      {/* FlastList
      <FlatList
        refreshControl={
          <RefreshControl 
            refreshing={ Resfreshing }
            onRefresh= {onRefresh}
            colors={['red']}
          />
        }
        keyExtractor={(item, index)=>index.toString()}
        data={items}
        renderItem={theItems =>(
          <View style={styles.item}>
           <Text style={styles.text}>{theItems.item.name}</Text>
          </View>
         )
        }
      /> */}

      {/* ScrollView List */}
      {/* <ScrollView 
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
      </ScrollView> */}
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
