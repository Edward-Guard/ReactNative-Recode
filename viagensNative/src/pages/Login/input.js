import React from 'react';
import {TextInput ,StyleSheet } from 'react-native';

export default function Input({placeholder,value,board,onChange}) {

 return (
   
    <TextInput
    style={styles.input}
    onChangeText={onChange}
    placeholder={placeholder}
    value={value}
    keyboardType={board}
    />
   
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

})