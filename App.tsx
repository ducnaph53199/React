import { Image, StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from './BottomTabNavigator';
import ProductDetailScreen from './Screen/DetailScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HomeScreen"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProductDetailScreen"
          component={ProductDetailScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>


    </NavigationContainer>
  );
};

export default App;

const st = StyleSheet.create({
  nen: {
    backgroundColor: '#0C0F14',
    flex: 1,
  },
});
