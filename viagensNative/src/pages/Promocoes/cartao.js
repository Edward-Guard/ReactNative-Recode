import React from 'react';
import { Image, Text, View,StyleSheet ,Button} from 'react-native';


export default function Cartao({local,preco,regiao}) {
 return (
   <View style={styles.container}>
    
    <View style={styles.row}>
        <Text style={styles.userStyle}>{local}</Text>
        <Text style={styles.userStyle}>G$ {preco}</Text>
    </View>
    
    <Image source={regiao} resizeMode='contain' style={styles.imagem}/>
    

    <View style={styles.row}>
    <Text style={styles.userStyle}>Ida e volta</Text>
    <Text style={styles.userStyle}>Aproveite </Text>
    </View>
    
    
   </View>
  );
}

const styles =StyleSheet.create({
    container:{  
        
        backgroundColor:'white',
        justifyContent:'center',
        padding:10,
        
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
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20
    },  
    })