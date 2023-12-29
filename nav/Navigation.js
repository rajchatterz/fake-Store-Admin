import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screen/SplashScreen'
import LoginScreen from '../screen/LoginScreen'
import SignupScreen from '../screen/SignupScreen'
import HomeScreen from '../screen/HomeScreen'

const Stack = createNativeStackNavigator()
const Navigation = () => {
  return (
        <NavigationContainer>
          <Stack.Navigator >
              <Stack.Screen options={{headerShown:false}} name='splash' component={SplashScreen}/>
              <Stack.Screen options={{headerShown:false}} name='Login' component={LoginScreen}/>
              <Stack.Screen options={{headerShown:false}} name='Signup' component={SignupScreen}/>
              <Stack.Screen name='Home' component={HomeScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
  )
}

export default Navigation

const styles = StyleSheet.create({})