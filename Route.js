
import React, { useContext } from 'react';
import { SafeAreaView, Text, View, LogBox, Image, StyleSheet, Dimensions } from 'react-native';
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
import { createStore, combineReducers } from 'redux';
import FoodHomePage from './src/screens/food/HomePage'
import FoodCategories from './src/screens/food/Categories'
import FoodUserProfile from './src/screens/food/Account'
import FoodCart from './src/screens/food/Cart'
import FoodOrders from './src/screens/food/MyOrders'
import WaterHomePage from './src/screens/water/HomePage'
import WaterNotifications from './src/screens/water/Notifications'
import WalletHomePage from './src/screens/wallet/HomePage'
import GambleHomePage from './src/screens/gamble/HomePage'
import CategoryDetail1 from './src/screens/food/CategoryDetail1';
import CategoryDetail2 from './src/screens/food/CategoryDetail2';
import DetailPage from './src/screens/food/DetailPage';
import UserDetails from './src/screens/UserDetails';
import Profile from './src/screens/Profile';
import AvailablePackages from './src/screens/AvailablePackages';
import ActivePackage from './src/screens/ActivePackage';
import DataContext, { Provider } from './src/context/ItemProvider';
import AsyncStorage from '@react-native-async-storage/async-storage'
import LinearGradient from 'react-native-linear-gradient';
import InitialUpload from './src/screens/InitialUpload';
import Language from './src/screens/Language';

const store = createStore(reducer)
const Stack = createStackNavigator();
const Stack1 = createStackNavigator();
const Stack2 = createStackNavigator();
const Stack3 = createStackNavigator();
const Stack4 = createStackNavigator();

const Route = () => {

  const [state, setState] = useContext(DataContext);
  const [load, setLoad] = React.useState(true)

  const init = async () => {
    try {
      setLoad(true)
      let token = await AsyncStorage.getItem('token')
      console.log('ooo', token);
      if (token) {
        setState({ token, signed: true })
      }
      setLoad(false)
    } catch (e) {

    }
  };

  React.useEffect(() => {
    init()
  }, [])


  const FoodScreens = () => {
    return (
      <Stack1.Navigator screenOptions={{ headerShown: false }}>
        <Stack1.Screen name='FoodHomePage' component={FoodHomePage} />
        <Stack1.Screen name='FoodCategories' component={FoodCategories} />
        <Stack1.Screen name='FoodUserProfile' component={FoodUserProfile} />
        <Stack1.Screen name='FoodCart' component={FoodCart} />
        <Stack1.Screen name='FoodOrders' component={FoodOrders} />
        <Stack1.Screen name='CategoryDetail1' component={CategoryDetail1} />
        <Stack1.Screen name='CategoryDetail2' component={CategoryDetail2} />
        <Stack1.Screen name='DetailPage' component={DetailPage} />
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

  const GambleScreens = () => {
    return (
      <Stack4.Navigator screenOptions={{ headerShown: false }}>
        <Stack4.Screen name='GambleHomePage' component={GambleHomePage} />
      </Stack4.Navigator>

    )
  }

  if (load == false) {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {state.signed == false ? (
            <>
              <Stack.Screen name='GetStarted' component={GetStarted} />
              <Stack.Screen name='Language' component={Language} />
              <Stack.Screen name='SendOTP' component={SendOTP} />
              <Stack.Screen name='VerifyOTP' component={VerifyOTP} />
              <Stack.Screen name='InitialUpload' component={InitialUpload} />
            </>
          ) : (
            <>
              <Stack.Screen name='GetStarted' component={GetStarted} />
              <Stack.Screen name='HomePage' component={HomePage} />
              <Stack.Screen name='UserDetails' component={UserDetails} />
              <Stack.Screen name='AvailablePackages' component={AvailablePackages} />
              <Stack.Screen name='ActivePackage' component={ActivePackage} />
              <Stack.Screen name='Profile' component={Profile} />
              <Stack.Screen name='SignUp' component={SignUp} />
              <Stack.Screen name='FoodScreens' component={FoodScreens} />
              <Stack.Screen name='GambleScreens' component={GambleScreens} />
              <Stack.Screen name='WaterScreens' component={WaterScreens} />
              <Stack.Screen name='WalletScreens' component={WalletScreens} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  else if (load == true) {
    return (
      <LinearGradient style={styles.main} colors={['#03535f', '#032241']} >
        <View opacity={0.1} style={styles.top} />
        <View opacity={0.1} style={styles.bottom} />
        <View style={styles.logoView}>
          <Image style={styles.logo} source={require('./src/images/logo.jpg')} />
          <Image style={styles.gif} source={require('./src/images/gif2.gif')} />
        </View>
      </LinearGradient >
    )
  }
}

export default Route;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#214778'
  },
  logoView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 100,
    width: 125,
    borderRadius: 10,
    marginBottom: 10
  },
  top: {
    position: 'absolute',
    height: Dimensions.get('window').height * (1 / 3.5),
    width: Dimensions.get('window').width * (1 / 3.5),
    borderBottomRightRadius: 80,
    backgroundColor: 'white'
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    height: Dimensions.get('window').height * (1 / 3.5),
    width: Dimensions.get('window').width * (1 / 3.5),
    borderTopLeftRadius: 80,
    backgroundColor: 'white'
  },
  gif: {
    width: 100,
    height: 20,
    alignSelf: 'center'
  }
})

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!"
])