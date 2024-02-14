import React from "react";
import { Text, View } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import styles from './HomeStyle';
import {Menu} from '../../components/Menu';

export default function Home(){
    return(
     <View style={styles.container}>
      <Menu/>
      <Text>Texto do Home</Text>
      <StatusBar style="auto" />
    </View>
    )
}
