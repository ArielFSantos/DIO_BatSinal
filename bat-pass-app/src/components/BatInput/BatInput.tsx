import React from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './BatInputStyle';

interface BatInputProps{
  pass:string
}

export function BatInput(props:BatInputProps) {
  return (
    <View style={styles.container}>
    <TextInput style={styles.input}
    placeholder='Password'
    value={props.pass}
    textAlign='center'
      />
    </View>
  );
}