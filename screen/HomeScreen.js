import { ImageBackground,Image, StyleSheet, Text, Animated, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

import background from '../assets/bcg.png'
const HomeScreen = ({ navigation }) => {
  

  return (
    <ImageBackground source={background} style={styles.container}>
      <Image style={{ width: 200, height: 200 }} source={require('../assets/cart.png')} />
      <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Product')}>
        <Text style={styles.buttonText}>Add Products</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    resizeMode:'cover'
  },
  cartImage: {
    width: 200,
    height:200
  },
  button: {
    backgroundColor: '#fd8ba0',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
})