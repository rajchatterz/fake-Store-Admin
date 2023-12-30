import { Image,ActivityIndicator, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState } from 'react'
import background from '../assets/bcg.png'
import { Svg,Path } from 'react-native-svg'
const SignUpScreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [showModal,setShowModal] = useState(false)
    const inputData = () => {
        if (name && password && email) {
          passDataToApi()
          setName('')
          setEmail('')
          setPassword('')
          setShowModal(true)
          
          
        } else {
          errorHandling()
        }
    }
  const login = () => {
    navigation.navigate('Login')
  }
  const showDialoge = () => {
    navigation.navigate('Login')
    setShowModal(false)
  }
  
  const errorHandling = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailPattern.test(email)) {
      setEmailError(true)
    }
    if (!password || !password.length < 9) {
      setPasswordError(true)
    }
    else {
      setEmailError(false)
      setPasswordError(false)
    }
  }
    const passDataToApi = async() => {
      const url = 'http://192.168.102.43:3001/register/'
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
        <ImageBackground source={background} style={[styles.imageBackground,showModal&& styles.transparentBackground]}>
          <Image style={styles.cartImage} source={require('../assets/cart.png')} />
          <View style={styles.inputContainer}>
              <TextInput value={name} onChangeText={(text)=>setName(text)} placeholder='Name' style={styles.inputView}/>
               <View style={styles.errorMessage}>
                <TextInput value={email} onChangeText={(text) => setEmail(text)} placeholder='Email' style={styles.inputView} />
                {emailError?<Text style={styles.errorText}>Please Enter a Valid Email</Text>:null}
              </View>
              <View style={styles.errorMessage}>
                <TextInput secureTextEntry={true} value={password} onChangeText={(text) => setPassword(text)} placeholder='Password' style={styles.inputView} />
                {passwordError?<Text style={styles.errorText}>Please Enter a valid password</Text>:null}
              </View>
      </View>
      <View style={styles.login}>
        <Text style={{fontWeight:'700',}}>Have an account</Text>
        <TouchableOpacity onPress={()=>login()}>
          <Text style={styles.logintext}>Log In</Text>
        </TouchableOpacity>
      </View>
          <View>
              <TouchableOpacity onPress={inputData} style={styles.buttonContainer}>
                  <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
      </View>
      <Modal transparent={true} visible={showModal}>
        <View style={styles.modalView}>
          <Svg width={100} height={100} viewBox="0 0 50 50">
            <Path
              d="M25 2c11.05 0 20 8.954 20 20s-8.95 20-20 20S5 33.05 5 22 13.954 2 25 2zm10.94 15.236L21.617 33.7l-7.557-7.558a1.2 1.2 0 10-1.697 1.697l8.125 8.124a1.2 1.2 0 001.697 0l16.857-16.857a1.2 1.2 0 00-1.696-1.696z"
              fill="#ffc637"
            />
          </Svg>
          <Text style={{ color: '#1ef51ef9',fontSize:18,fontWeight:'800',marginBottom:20 }}>Data Saved Successfully</Text>
          <TouchableOpacity onPress={()=>showDialoge()}>
            <Text style={styles.modalText}>Click here</Text>
          </TouchableOpacity>
        </View>
      </Modal>
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
      gap: 20,
        height:240
    },
    buttonText: {
        fontSize: 20,
        color:'#ffffff',
        fontWeight: '900',
        
  },
  errorMessage: {
    height: 53
    
  },
  errorText: {
    color: '#d25454',
    left: 10,
    fontWeight: '600',
    fontSize:12
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  modalText: {
    backgroundColor: 'pink',
    color: 'black',
    paddingHorizontal: 60,
    paddingVertical: 20,
    borderRadius: 15,
    color: '#fffafa',
    fontWeight: '900',
    fontSize:17
  },
  transparentBackground: {
    opacity:0.2
  },
  login: {
    flexDirection: 'row',
   textAlign:'center',
    // width: '90%',
    left: 80,
    width: 160,
    marginTop:-20,
    gap:10
  },
  logintext: {
    fontWeight: '800',
    fontSize: 13,
    color: '#d25454',
    justifyContent: 'center',
    alignItems:'center'
  }
})