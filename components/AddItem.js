import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function AddItem(props) {
  return (
    <View style={styles.container}>
      <View style={styles.addItem}>
        <Text style={styles.id}>{props.index}</Text>
        <Text style={styles.content}>{props.item}</Text>
        <TouchableOpacity>
          <AntDesign
            style={{ marginTop: '10px' }}
            name="closecircle"
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '200px',
  },
  addItem: {
    backgroundColor: 'white',
    width: '80%',
    height: '50px',
    marginTop: '20px',
    flexDirection: 'row',
    borderRadius: '20px',
  },
  id: {
    backgroundColor: '#98fb98',
    margin: '5px',
    padding: '10px',
    border: '1px solid #98fb98',
    borderRadius: '10px',
  },
  content: {
    margin: '15px',
    color: 'black',
  },
});
