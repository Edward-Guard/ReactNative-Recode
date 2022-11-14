import React from 'react';
import { View ,StyleSheet , Text,TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 
import Input from './input';
import Nav from '../Nav';


export default function Login() {

    const [text, onChangeText] = React.useState(null);
    const [number, onChangeNumber] = React.useState(null);

    function cadastro(){
        alert(number);
        alert(text);
        ///fazer chamada no back-end para cadastro
    }
    
 return (
    
    <View style={styles.container}>
        
        <View style={styles.box}>
    
        <FontAwesome name="user-circle-o" size={48} color="black" />
            <Text style={styles.texto}>Login</Text>

            <Input placeholder='Seu login' value={text} board="text" onChange={onChangeText}/>
            <Input placeholder='Sua senha' value={number} board="numeric" onChange={onChangeNumber}/>

            

            <TouchableOpacity onPress={()=>cadastro()} style={styles.botao}>
                <Text>Acessar</Text>
            </TouchableOpacity>
  </View>
    </View>
    
  );
}

const styles =StyleSheet.create({
    container:{  
        flexDirection:'column',
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        
    },
    input: {
        height: 40,
        margin: 8,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'white',
        borderRadius:10,
        width:'100%'
      },
    box:{
        backgroundColor:'#1882c8',
        width:200,
        height:260,
        alignItems:'center',
        margin:20,
        borderRadius:10,
        padding:15
    },
    texto:{
        fontSize:30,
        fontWeight:'bold'
    },
    botao:{
        backgroundColor:'#F2BE22',
        width:'100%',
        alignItems:'center',
        height:30,
        justifyContent:'center',
        borderRadius:10,
        
    }
    

})