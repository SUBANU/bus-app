import React from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {darkGreen} from './Constants';
import Field from './Field';
import { useNavigation } from '@react-navigation/native';

function Signup(props) {
  const navigation = useNavigation();
  return (
    <Background>
      <View style={{ alignItems: 'center' }}>
        <Text
          style={{
            color: 'white',
            fontSize: 50,
            marginVertical: 15,
            fontWeight: 'bold',
            marginTop: 20,
            marginRight: 5,
            marginLeft: 5,
            textAlign: 'center'
          }}>
          Register
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            opacity: 0.99,
            height: 550,
            width: 310,
            marginLeft: 25,
            marginRight: 20,
            borderTopLeftRadius: 80,
            borderTopRightRadius: 80,
            borderBottomRightRadius: 80,
            borderBottomLeftRadius: 80,
            paddingTop: 30,
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: darkGreen,
              fontSize: 21,
              fontWeight: 'bold',
              marginBottom: 25,
            }}>
            Create a new account
          </Text>
          <Field placeholder="First Name" />
          <Field placeholder="Last Name" />
          <Field
            placeholder="Email / Username"
            keyboardType={'email-address'} />
          <Field placeholder="Contact Number" keyboardType={'number'} />
          <Field placeholder="Password" secureTextEntry={true} />
          <Field placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              width: '78%',
              paddingRight: 16
            }}>
            <Text style={{ color: 'grey', fontSize: 14 }}>
              By signing in, you agree to our{' '}
            </Text>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 14 }}>
              Terms & Conditions
            </Text>
          </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: "center",
              width: '78%',
              paddingRight: 16,
              marginBottom: 10
            }}>
            <Text style={{ color: 'grey', fontSize: 14 }}>
              and {" "}
            </Text>
            <Text style={{ color: darkGreen, fontWeight: 'bold', fontSize: 14 }}>
              Privacy Policy
            </Text>
          </View>
          <Btn
            textColor="white"
            bgColor={darkGreen}
            btnLabel="Signup"
            Press={() => {
              alert('Accoutn created');
              navigation.navigate('Login');
            } } />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              Already have an account ?{' '}
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Login')}>
              <Text
                style={{ color: darkGreen, fontWeight: 'bold', fontSize: 16 }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
}

export default Signup;