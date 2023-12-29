import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import background from '../assets/bcg.png'
const LoginScreen = ({navigation}) => {
  return (
      <ImageBackground style={styles.imageBackground} source={background}>
          <View style={styles.inputContainer}>
              <Image style={styles.cartImage} source={require('../assets/cart.png')}/>
              <TextInput placeholder='Email' style={styles.inputView}/>
              <TextInput placeholder='Password' secureTextEntry={true} style={styles.inputView}/>
                <View>
                    <TouchableOpacity style={styles.buttonContainer}>
                      <Text style={styles.buttonText}>Sign In</Text>
                    </TouchableOpacity>
              </View>
              <View style={styles.registerBtn}>
                  <Text style={{fontWeight:'500',color:'black'}}>Don't have an account</Text>
                  <TouchableOpacity onPress={()=>navigation.navigate('Signup')}>
                      <Text style={styles.opText}>Register Here</Text>
                  </TouchableOpacity>
              </View>
          </View>
    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        alignItems:'center',
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
    inputContainer: {
        alignItems: 'center',
        flex:1,
        justifyContent: 'center',
        gap:20
    },
    buttonContainer: {
        width: 140,
        backgroundColor: '#fd8ba0',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10
        
    },
    cartImage: {
        height: 200,
        width:200,
    },
    buttonText: {
        fontSize: 20,
        color:'#ffffff',
        fontWeight: '900',
        
    },
    registerBtn: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap:10,
        
        width:300
    },
    opText: {
        fontWeight: '900',
        marginRight: 10,
        color:'#181515'
    }


})