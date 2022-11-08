import { StyleSheet, Text, View } from 'react-native';
import Footer from '../Footer';
import Header from '../Header';
import Login from '../Login';
import Nav from '../Nav';

export default function Home() {
  return (
    <View style={styles.container}>
      <Header/>
      <Nav/>
      <Login/>
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
