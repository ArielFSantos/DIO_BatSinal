import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './BatInputStyle';

export function BatInput() {
  return (
    <View style={styles.container}>
    <TextInput style={styles.input}
    placeholder='Password'
    textAlign='center'
      />
    </View>
  );
}