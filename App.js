/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView, Text, View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from './src/screens/GetStarted';
import Login from './src/screens/Login';
import SendOTP from './src/screens/SendOTP';
import VerifyOTP from './src/screens/VerifyOTP';
import SignUp from './src/screens/SignUp';
import HomePage from './src/screens/HomePage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='GetStarted' component={GetStarted} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='SendOTP' component={SendOTP} />
        <Stack.Screen name='VerifyOTP' component={VerifyOTP} />
        <Stack.Screen name='SignUp' component={SignUp} />
        <Stack.Screen name='HomePage' component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
