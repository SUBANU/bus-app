import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation(); 
  return (
    <Background>
      <View style={{alignItems:'center'}}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            fontWeight: 'bold',
            marginVertical: 15,
            textAlign:'center',
            marginLeft:10
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            opacity:0.99,
            height: 550,
            width: 310,
            marginLeft:25,
            marginRight:20,
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
            borderBottomRightRadius: 80,
            borderBottomLeftRadius: 80,
            paddingTop: 30,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 38, color: darkGreen, fontWeight: 'bold'}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 19,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'}
          />
          <Field placeholder="Password" secureTextEntry={true} />
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 16, marginBottom: 200}}>
            <Text style={{color: darkGreen, fontWeight: 'bold', fontSize: 16}}>
              Forgot Password ?
            </Text>
          </View>
          <Btn textColor='white' bgColor={darkGreen} btnLabel="Login" Press={() => {
              alert('Logged in');
              navigation.navigate('Main');
            } } />
          <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center" }}>
            <Text style={{ fontSize: 16, fontWeight:"bold" }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>Signup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;