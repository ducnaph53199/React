import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginScreen from './Screen/LoginScreen'
import RegisterScreen from './Screen/RegisterScreen'
import HomeScreen from './Screen/HomeScreen'
import ContactScreen from './Screen/ContactScreen'
import FavoriteList from './Screen/FavoritesScreen'
import CartScreen from './Screen/CartScreen'

const SplashScreen = () => {
  return (
    <View style={st.nen}> 
      {/* <LoginScreen /> */}
      <RegisterScreen />
      {/* <HomeScreen /> */}
      {/* <ContactScreen /> */}
      {/* <FavoriteList /> */}
      {/* <CartScreen></CartScreen> */}

    </View>
  )
}

export default SplashScreen

const st = StyleSheet.create({
  nen: {
    backgroundColor: 'gray',
    flex: 1,
  },
 
});