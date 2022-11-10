import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Footer() {
 return (
   <View style={styles.container}>
   <Text>Site de desenvolvido por Edward Silva para o curso Recode</Text>
   </View>
  );
}

const styles =StyleSheet.create({
    container:{  
        flexDirection:'row',
        backgroundColor:'#F2BE22',
        height:30,
        alignItems:'center',
        justifyContent:'center',
        
    },
    

})