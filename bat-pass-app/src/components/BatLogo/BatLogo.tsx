import React from 'react';
import { View, Text, Image} from 'react-native';
import batLogo from '../../../assets/Bat-logo.png'
import { styles } from './BatLogoStyle';

export default function BatLogo() {
  return (
    <View>
        <Text style={styles.Title}>
            BAT PASS GENERATOR
        </Text>
        <Image 
            source={batLogo}
            style={{
                resizeMode:'contain',
                height:300,
                width:300,
            }}
        />
    </View>
  );
}