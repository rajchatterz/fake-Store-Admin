import { Image,ActivityIndicator, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react'
import background from '../assets/bcg.png'
const SignUpScreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError,setPasswordError] = useState(false)
    const inputData = () => {
        if (name && password && email) {
          passDataToApi()
          setName('')
          setEmail('')
          setPassword('')
          navigation.navigate('Login')
        } else {
          errorHandling()
        }
    }
  const errorHandling = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailPattern.test(email)) {
      setEmailError(true)
    } else if (!password || !password.length<9){
      setPasswordError(true)
    }
    else {
      setEmailError(false)
      setPasswordError(false)
    }
  }
    const passDataToApi = async() => {
      const url = 'http://192.168.106.43:3001/register/'
      const postData = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body:JSON.stringify({name,email,password})
      })
      if (!postData) {
        throw new Error('Somethings went wrong')
      }
    }
  return (
        <ImageBackground source={background} style={styles.imageBackground}>
          <Image style={styles.cartImage} source={require('../assets/cart.png')} />
          <View style={styles.inputContainer}>
              <TextInput value={name} onChangeText={(text)=>setName(text)} placeholder='Name' style={styles.inputView}/>
              <TextInput value={email} onChangeText={(text)=>setEmail(text)} placeholder='Email' style={styles.inputView}/>
              <TextInput secureTextEntry={true} value={password} onChangeText={(text)=>setPassword(text)} placeholder='Password' style={styles.inputView}/>
          </View>
          <View>
              <TouchableOpacity onPress={inputData} style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
          </View>
        </ImageBackground>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        alignItems: 'center',
        justifyContent:'center'
    },
    cartImage: {
        width: 200,
        height:200
    },
    inputView: {
        backgroundColor: 'white',
        width: 320,
        height: 50,   
        borderRadius: 10,
        fontWeight: '700',
        color: '#5b523f',
        paddingHorizontal:10
        
    },
    buttonContainer: {
        width: 140,
        backgroundColor: '#fd8ba0',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop:30
        
    },
    inputContainer: {
        alignItems: 'center',
        // flex:1,
        justifyContent: 'center',
        gap:20
    },
    buttonText: {
        fontSize: 20,
        color:'#ffffff',
        fontWeight: '900',
        
    },
})