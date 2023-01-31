import { View,StyleSheet,Text} from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'
import { Dimensions } from 'react-native' ;
import { TouchableOpacity } from 'react-native';
import Login from './Login';
import { useNavigation } from '@react-navigation/native';

export default function Background({children}) {
  const navigation = useNavigation(); 
  return (
    <View>
 <ImageBackground
        source={{
          uri: 
'https://images.unsplash.com/photo-1566840889596-09f5d85bb03b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        }}
        resizeMode="stretch"
        style={styles.img}>
        <Text style = {styles.heading}>TRACK MY BUS</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text style={{fontSize:16}}>Welcome!</Text></TouchableOpacity>
        {/* render here everything */}
      
      </ImageBackground>
  <View style={{position:"absolute"}}>
    {children}
  </View>
    </View>
  );
}
const styles = StyleSheet.create({
    
    img: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
      justifyContent: 'center',
      alignItems: 'center',
      opacity : 0.79,
    },
    heading: {
        fontSize: 40,
        fontWeight: '900',
        color:'#FEF3C7'
    },
  });
  
