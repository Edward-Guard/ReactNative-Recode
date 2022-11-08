import React from 'react';
import { TextInput, View ,StyleSheet , Text,SafeAreaView} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 



export default function Login() {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
 return (
    <View style={styles.container}>
        <View style={styles.box}>
        <FontAwesome name="user-circle-o" size={48} color="black" />
            <Text style={styles.texto}>Login</Text>
            <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            placeholder="Username"
            value={text}
            />
            <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Password"
            keyboardType="numeric"
            />
  </View>
    </View>
    
  );
}

const styles =StyleSheet.create({
    container:{  
        flexDirection:'row',
        backgroundColor:'white',
        
        alignItems:'center',
        justifyContent:'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'white',
      },
    box:{
        backgroundColor:'#1882c8',
        width:200,
        height:250,
        alignItems:'center',
        margin:20,
        borderRadius:10,
        padding:15
        

    },
    texto:{
        fontSize:30,
        fontWeight:'bold'
    }
    

})