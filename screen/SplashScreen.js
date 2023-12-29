import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Scart from '../assets/scart.png'
const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    },3000)
  })
  return (
    <ImageBackground source={Scart} style={styles.imageBackground}>

    </ImageBackground>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    alignItems:'center'
  }
})