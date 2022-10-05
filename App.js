import * as React from 'react';
import  { useState } from 'react';
import { Text, TextInput, TouchableOpacity , FlatList,View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import AddName from './components/AddName';
import AddItem from './components/AddItem';
import Data from './Data';



export default function App() {

  const  [items, setItems] = useState([]);

  const addTodo = (item) => {
    setItems([...items, item]);
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <AddName onPre ={(item) => {
          addTodo(item);
        }}/>
      </View>
      <View style={styles.container}>
        <FlatList 
          data={items}
          numColumns={1}
          renderItem={({ item, index}) => <AddItem index={index+1} item={item}/>}
        />
      </View>
      <View style={styles.footer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  container:{
    width:'100%',
    height:'100%',
    backgroundColor:'#ffdead',
    alignItems:'center'

  },
 
});
