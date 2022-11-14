import React from 'react';
import { Image, Text, View,StyleSheet ,Button} from 'react-native';

export default function Teste1(props){
    console.log(props);
    return(
        <View>
            <Text>Este é o componente Teste1</Text>
            <Button title='Ir para Teste2' onPress={()=>props.navigation.navigate('Login')}/>
        </View>
    )
}