import {Text ,StyleSheet ,TouchableOpacity} from 'react-native';
import { Entypo} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';

export default function NavBotao({nome,icone,props}){
    return(
    <TouchableOpacity style={styles.navItem} >  
    <Entypo name={icone} size={24} color="white" />
    <Text style={styles.item}>{nome}</Text>   
    </TouchableOpacity >
    )
}

const styles =StyleSheet.create({
    container:{  
        flexDirection:'row',
        backgroundColor:'#0B2B40'
        ,justifyContent:'center',
        padding:12
        
    },
    navItem:{
        flexDirection:'row'
    },
    item:{
        fontSize:20,
        color:'white',
        paddingStart:5,
        paddingEnd:5
    }

})