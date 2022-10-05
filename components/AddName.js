import * as React from 'react';
import { useState } from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

export default function AddName(props) {
  const [item, setItem] = useState();
  return (
    <View style={styles.container}>
      <TextInput
        value={item}
        onChangeText={(value) => setItem(value)}
        style={styles.textInp}
        placeholder="Name content"
      />
      <TouchableOpacity
        onPress={() => {
          props.onPre(item);
          setItem('');
        }}
        style={styles.btnAdd}>
        <Text>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '150px',
    backgroundColor: '#7fffd4',
    flexDirection: 'column',
    alignItems: 'center',
  },
  textInp: {
    width: '70%',
    height: '40px',
    backgroundColor: 'white',
    marginTop: '20px',
    border: '1px solid #ffe4c4',
    borderRadius: '30px',
  },
  btnAdd: {
    backgroundColor: '#ffe4b5',
    width: '70px',
    height: '30px',
    alignItems: 'center',
    marginTop: '20px',
    paddingTop: '5px',
    borderRadius: '20px',
  },
});
