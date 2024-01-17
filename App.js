import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,Image, TouchableOpacity} from 'react-native';

import Mynewscard from './components/mynewscard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:'black',fontSize:40,fontWeight:'100'}}>NOTICIAS DEL MUNDO</Text>
      <View style={styles.allnewscontainer}>
       <Mynewscard/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
   // justifyContent: 'center',
    marginTop:25,
  },allnewscontainer:{
    marginTop:10,
    flex:1,
    backgroundColor: "#ebffe8",
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
 
});
