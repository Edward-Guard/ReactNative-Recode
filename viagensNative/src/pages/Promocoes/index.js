import React from 'react';
import {StyleSheet ,ScrollView } from 'react-native';

// import Cartao from './cartao';
import Cartao from './cartao'
import Demacia from '../../assets/Demacia-promo.jpg'
import Ionia from '../../assets/Hirana.webp'
import Noxus from '../../assets/Noxkraya.png'



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