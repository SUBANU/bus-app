

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './app/components/Home';
import Login from './app/components/Login';
import Signup from './app/components/Signup';
import Main from './app/components/Main';
import Mainmain from './app/components/Mainmain';
import TrackLocation from './app/components/TrackLocation';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Mainmain" component={Mainmain} />
        <Stack.Screen name="TrackLocation" component={TrackLocation} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;