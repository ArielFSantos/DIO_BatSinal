import React from 'react';
import { View,Pressable,Text } from 'react-native';

import { styles } from './BatButtonStyle';

export function BatButton() {
  return (
    <View style={styles.container}>
        <Pressable onPress={()=>{console.log("Fui Pressionado")}}>
            <Text style={styles.text}>Teste</Text>
        </Pressable>
    </View>
  );
}