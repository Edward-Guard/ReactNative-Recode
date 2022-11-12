import React from 'react';
import {View ,StyleSheet , Text, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import Input from './input';



export default function CadastroViagem() {

    const [codigo, onChangeCodigo] = useState(null);
    const [origem, onChangeOrigem] = React.useState(null);
    const [destino, onChangeDestino] = React.useState(null);
    const [passageiros, onChangePassageiros] = React.useState(null);

    function cadastro(){
        alert(codigo);
        alert(origem);
        alert(destino);
        alert(passageiros);
        ///fazer chamada no back-end para cadastro
    }

    function cancelar(){
        onChangeCodigo(null);
        onChangeOrigem(null);
        onChangeDestino(null);
        onChangePassageiros(null);
        ///fazer chamada no back-end para cadastro
    }
    
 return (
    <View style={styles.container}>
        <Text>CadastroViagem</Text>
        <Input placeholder='Seu código' value={codigo} board="numeric" onChange={onChangeCodigo}/>
        <Input placeholder='Origem' value={origem} board="text" onChange={onChangeOrigem}/>
        <Input placeholder='Destino' value={destino} board="text" onChange={onChangeDestino}/>
        <Input placeholder='Passageiros' value={passageiros} board="numeric" onChange={onChangePassageiros}/>
        <View style={styles.box}></View>


        <View style={styles.controle}>
            <TouchableOpacity onPress={()=>cadastro()} style={styles.botao}>
                <Text>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>cancelar()} style={styles.botao}>
                <Text>Cancelar</Text>
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
        padding:10
        
        
    },
    input: {
        height: 40,
        margin: 8,
        borderWidth: 1,
        padding: 10,
        backgroundColor:'white',
        borderRadius:10,
        width:'100%',
      },
    controle:{
        flexDirection:'row'
    },
    
    botao:{
        backgroundColor:'#F2BE22',
        width:'50%',
        alignItems:'center',
        height:30,
        justifyContent:'center',
        borderRadius:10,
        
    }
})