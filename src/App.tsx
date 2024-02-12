import {Text, View} from 'react-native';
import React, {Component} from 'react';
import LoginScreen from './screens/LoginScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexScreen from './screens/IndexScreen';
import TestScreen from './screens/TestScreen';

// 只在非生产环境下引入 Mock.js
if (process.env.NODE_ENV !== 'production') {
  require('./services/mock');
  console.log('Mock is imported');
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Test">
        <Stack.Screen name="Test" component={TestScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={IndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
