import { StyleSheet, Text, View } from 'react-native';

import Promocoes from '../Promocoes'
import Footer from '../Footer';
import Header from '../Header';
import Login from '../Login';
import Nav from '../Nav';
import CadastroViagem from '../CadastroViagem';

import Teste1 from '../Teste1';
import Teste2 from '../Teste2';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function Home() {
  
const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Header/>
      
      
      <Stack.Navigator>
        <Stack.Screen name="Promocoes" component={Promocoes} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={CadastroViagem} />
      </Stack.Navigator>
      <Footer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
