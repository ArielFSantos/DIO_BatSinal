import React from "react";
import { Text, View } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import styles from './HomeStyle';
import BatLogo from "../../components/BatLogo/BatLogo";


export default function Home(){
    return(
     <View style={styles.container}>
      <View style={styles.logoContainer}>
        <BatLogo/>
      </View>
      <Text>Texto do Home</Text>
      <StatusBar style="auto" />
    </View>
    )
}
