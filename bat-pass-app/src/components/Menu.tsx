import React from 'react';
import { View, Text} from 'react-native';

import { styles } from './MenuStyle';

export function Menu() {
  return (
    <View style={styles.container}>
        <Text>Texto do Menu</Text>
    </View>
  );
}
export default Menu;