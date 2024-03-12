import React from "react";
import { Text, View, TextInput } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import styles from './HomeStyle';
import BatLogo from "../../components/BatLogo/BatLogo";
import { BatInput } from "../../components/BatInput/BatInput";
import { BatButton } from "../../components/BatButton/BatButton";


export default function Home(){
    return(
     <View style={styles.container}>
      <View style={styles.logoContainer}>
        <BatLogo/>
        <BatInput/>
      </View>
      <BatButton/>
      <StatusBar style="auto" />
    </View>
    )
}
