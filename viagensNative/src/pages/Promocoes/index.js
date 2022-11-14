import React from 'react';
import {StyleSheet ,ScrollView,Button } from 'react-native';

import Cartao from './cartao'
import Demacia from '../../assets/Demacia-promo.jpg'
import Ionia from '../../assets/Hirana.webp'
import Noxus from '../../assets/Noxkraya.png'
import Nav from '../Nav';


export default function Promocoes(props) {
 return (
    <ScrollView style={styles.container}>
    <Nav/>
    <Button title='Ir para Login' onPress={()=>props.navigation.navigate('Login')}/>
    <Button title='Ir para Cadastro' onPress={()=>props.navigation.navigate('Cadastro')}/>
        <Cartao local='Demacia' regiao={Demacia} preco= '245'/>
        <Cartao local='Noxus' regiao={Noxus} preco= '205'/>
        <Cartao local='Ionia' regiao={Ionia} preco= '210'/>
    </ScrollView>
   
  );
}

const styles =StyleSheet.create({
    container:{  
        
        backgroundColor:'white',
        
    },
    imagem:{
        height:220,
        width:'auto',
        borderRadius:10,
        
    },
    userStyle:{
        fontSize:18,
        color:'black',
        fontWeight:'bold',
        textAlign:'center',
        
    },  
    })