import React from 'react';
import { Image, Text, View,StyleSheet ,ScrollView } from 'react-native';
import Demacia from '../assets/Demacia-promo.jpg'
import Cartao from './cartao';
import Noxus from '../assets/Noxkraya.png'
import Ionia from '../assets/Hirana.webp'

export default function Promocoes() {
 return (
    <ScrollView style={styles.container}>
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