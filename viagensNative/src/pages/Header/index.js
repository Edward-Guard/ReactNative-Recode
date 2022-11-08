import { Image, Text, View ,StyleSheet } from "react-native";
import Logo from "../../assets/logo.png"

export default function Header(){
   return(
    <View style={styles.container}>
        <Image source={Logo} style={styles.imagem}/>
        <View style={styles.header}>
            <Text style={styles.titulo}>Medarda</Text>
            <Text style={styles.subtitulo}>Viaje por toda Runeterra</Text>
        </View>
    </View>
)}

const styles =StyleSheet.create({
    container:{  
        flexDirection:'row',
    },
    imagem:{
        backgroundColor:'#0B2B40',
    },
    header:{
        backgroundColor:'#F2BE22',
        flex:1,
        padding:10,
        paddingStart:20,
    },
    titulo:{  
        fontSize:40,
    },
    subtitulo:{
        fontSize:20,
        color:'#8a8989'
    }

})