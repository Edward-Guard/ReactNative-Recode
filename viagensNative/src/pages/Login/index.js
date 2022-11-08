import React from 'react';
import { TextInput, View ,StyleSheet , Text,SafeAreaView} from 'react-native';



export default function Login() {
    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);
 return (
    <View style={styles.container}>
        <View style={styles.box}>
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
        backgroundColor:'#0B2B40',
        width:200,
        height:200,
        alignItems:'center',
        

    },
    texto:{
        fontSize:30,
        fontWeight:'bold'
    }
    

})