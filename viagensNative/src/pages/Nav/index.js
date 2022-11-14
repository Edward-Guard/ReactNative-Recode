import React from 'react';
import { View ,StyleSheet,Button} from 'react-native';
import NavBotao from './navBotao';

export default function Nav(props) {
 return (
   <View style={styles.container}>
    
    <NavBotao nome='Login' icone='login'></NavBotao>
    <NavBotao nome='Promoções' icone='aircraft'></NavBotao>
    <NavBotao nome='Ajuda' icone='help-with-circle'></NavBotao>
    <NavBotao nome='Contato' icone='phone'></NavBotao>
   </View>
  );
}

const styles =StyleSheet.create({
    container:{  
        flexDirection:'row',
        backgroundColor:'#0B2B40'
        ,justifyContent:'center',
        padding:20,
        
    },
    navItem:{
        flexDirection:'row'
    },
    item:{
        fontSize:20
        ,color:'white',
        paddingStart:5,
        paddingEnd:5
    }

})