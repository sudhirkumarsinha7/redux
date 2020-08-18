import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import SetteingScreen from './SetteingScreen';
import qrCodeScanner from './qrCodeScanner';
import uploadPhoto from './uploadPhoto';

const Stack = createStackNavigator();
function MyStack() {
  return (
    // <Stack.Navigator screenOptions={{
    //       headerShown: false,
    //     }}>
    <Stack.Navigator>
      <Stack.Screen
        name="SetteingScreen"
        component={SetteingScreen}
        options={{
          title: 'SetteingScreen',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="qrCodeScanner"
        component={qrCodeScanner}
        options={{
          title: 'qrCodeScanner',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="uploadPhoto"
        component={uploadPhoto}
        options={{
          title: 'uploadPhoto',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default function setting() {
  return (
    // <NavigationContainer>
    <MyStack />
    // </NavigationContainer>
  );
}
