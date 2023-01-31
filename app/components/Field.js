import React from 'react';
import {TextInput, View} from 'react-native';
import {darkGreen} from './Constants';

const Field = props => {
  return (
    <View>
    <TextInput
      {...props}
      style={{borderRadius: 100, color: darkGreen, paddingHorizontal: 10, width:200, backgroundColor: 'rgb(220,220, 220)', marginVertical: 10}}
      placeholderTextColor={darkGreen}></TextInput>
      </View>
  );
};

export default Field;