import React,{useState} from 'react';
import { View,Pressable,Text } from 'react-native';
import { BatInput } from "../../components/BatInput/BatInput";
import { styles } from './BatButtonStyle';
import generatePass from '../../services/passwordService';

export function BatButton() {
  const [pass,setPass] = useState('')
  function handleGenerateButton(){
    let generateToken = generatePass
    setPass(generateToken)
  }
  return (
    <View>
        <BatInput pass={pass}/>
        <Pressable style={styles.button} onPress={handleGenerateButton}>
          <Text style={styles.text}>GENERATE</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={()=>{console.log("Pressionado")}}>
          <Text style={styles.text}>COPY</Text>
        </Pressable>
    </View>
  );
}