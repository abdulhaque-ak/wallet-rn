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
import { reducer } from './reducers/reducer';
import { themeReducer } from './reducers/themeReducer';
import { Provider, useSelector } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import FoodHomePage from './src/screens/food/HomePage'
import FoodCategories from './src/screens/food/Categories'
import FoodUserProfile from './src/screens/food/Account'
import FoodCart from './src/screens/food/Cart'
import FoodOrders from './src/screens/food/MyOrders'
import WaterHomePage from './src/screens/water/HomePage'
import WaterNotifications from './src/screens/water/Notifications'
import WalletHomePage from './src/screens/wallet/HomePage'

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

const rooReducer = combineReducers({
  data: reducer,
  myDarkMode: themeReducer
})

const store = createStore(rooReducer)
const Stack = createStackNavigator();
const Stack1 = createStackNavigator();
const Stack2 = createStackNavigator();
const Stack3 = createStackNavigator();

export default function App() {
  // let currTheme = useSelector(state => {
  //   console.log('ghj')
  //   // return state.myDarkMode
  // })
  const FoodScreens = () => {
    return (
      <Stack1.Navigator screenOptions={{ headerShown: false }}>
        <Stack1.Screen name='FoodHomePage' component={FoodHomePage} />
        <Stack1.Screen name='FoodCategories' component={FoodCategories} />
        <Stack1.Screen name='FoodUserProfile' component={FoodUserProfile} />
        <Stack1.Screen name='FoodCart' component={FoodCart} />
        <Stack1.Screen name='FoodOrders' component={FoodOrders} />
      </Stack1.Navigator>

    )
  }

  const WaterScreens = () => {
    return (
      <Stack2.Navigator screenOptions={{ headerShown: false }}>
        <Stack2.Screen name='WaterHomePage' component={WaterHomePage} />
        <Stack2.Screen name='WaterNotifications' component={WaterNotifications} />
      </Stack2.Navigator>

    )
  }

  const WalletScreens = () => {
    return (
      <Stack3.Navigator screenOptions={{ headerShown: false }}>
        <Stack3.Screen name='WalletHomePage' component={WalletHomePage} />
      </Stack3.Navigator>

    )
  }

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
          <Stack.Screen name='FoodScreens' component={FoodScreens} />
          <Stack.Screen name='WaterScreens' component={WaterScreens} />
          <Stack.Screen name='WalletScreens' component={WalletScreens} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
