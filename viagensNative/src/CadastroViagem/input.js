import React from 'react';
import { Text, View ,TextInput ,StyleSheet } from 'react-native';

export default function Input({placeholder,value,board,onChange,texto}) {

  return (
    <View style={styles.container}>
      
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder={placeholder}
        value={value}
        keyboardType={board}
     />
    </View>
     
    
   );
 }

const styles =StyleSheet.create({
    input: {
        height: 40,
        margin: 8,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'white',
        borderRadius:10,
        width:'100%'
      },
      container:{
        width:'100%',
        paddingEnd:14
      }

})