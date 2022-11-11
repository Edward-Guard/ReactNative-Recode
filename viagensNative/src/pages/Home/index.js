import { StyleSheet, Text, View } from 'react-native';
import CadastroViagem from '../../CadastroViagem';
import Promocoes from '../../Promocoes';
import Footer from '../Footer';
import Header from '../Header';
import Login from '../Login';
import Nav from '../Nav';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Viagens" component={CadastroViagem} />
      <Stack.Screen name="Promocoes" component={Promocoes} />
    </Stack.Navigator>
  );
}

export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <Nav/>
      <Promocoes/>
      <Footer/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
});
