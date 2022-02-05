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
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStarted from './src/screens/GetStarted';
import Login from './src/screens/Login';
import SendOTP from './src/screens/SendOTP';
import VerifyOTP from './src/screens/VerifyOTP';
import SignUp from './src/screens/SignUp';
import HomePage from './src/screens/HomePage';
import { themeReducer } from './reducers/themeReducer';
import { reducer } from './reducers/reducer';

import { Provider, useSelector } from 'react-redux'
import { createStore, combineReducers } from 'redux'


const customDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    textColor: 'yellow'
  }
}

const customDefault = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  }
}

const rootReducer = combineReducers({
  data: reducer,
  myDarkMode: themeReducer
})

const store = createStore(rootReducer)
const Stack = createStackNavigator();

const App = () => {
  // let currTheme = useSelector(state => {
  //   return state.myDarkMode
  // })
  return (
    <Provider store={store}>
      <NavigationContainer theme={customDefault}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='GetStarted' component={GetStarted} />
          <Stack.Screen name='Login' component={Login} />
          <Stack.Screen name='SendOTP' component={SendOTP} />
          <Stack.Screen name='VerifyOTP' component={VerifyOTP} />
          <Stack.Screen name='SignUp' component={SignUp} />
          <Stack.Screen name='HomePage' component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
