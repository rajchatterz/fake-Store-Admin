import { ImageBackground, StyleSheet, Text,Modal, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import background from '../assets/bcg.png';
import Svg, { Path } from 'react-native-svg';
const ProductDetails = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const [image, setImage] = useState('');
    const [error, setError] = useState(false)
    const [showModal,setShowModal] = useState(false)
  const sendDataToApi = async () => {
    try {
      const url = 'http://192.168.245.43:3001/admin';
      const productData = { name, price, color, image };

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });

      const responseData = await response.json();
      console.log('Data successfully sent:', responseData);
      // Optionally, you can handle success here, such as showing a success message or navigating to another screen.
    } catch (error) {
      console.error('Error sending data:', error);
      // Handle the error - show an error message or perform any necessary action.
    }
  };

  const sendData = () => {
    
      if (!name || !price || !color || !image) {
          setError(true)
      } else {
        sendDataToApi();
        setName('');
        setPrice('');
        setColor('');
          setImage('');
          setShowModal(true)
          setTimeout(()=>setShowModal(false),2000)
          
      }
  };
    

  return (
    <ImageBackground source={background} style={[styles.imageBackground,showModal && styles.transparentBackground]}>
      <Text style={styles.titleText}>Listing Your Product</Text>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Name</Text>
          <TextInput onChangeText={(text) => [setName(text),setError(false)]} placeholder='Enter Your Product name' style={styles.inputBox} value={name} />
          {error?<Text style={styles.errorMessage}>Invalid Input</Text>:null}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Price</Text>
          <TextInput onChangeText={(text) => [setPrice(text),setError(false)]} placeholder='Enter Your Product Price' style={styles.inputBox} value={price} />
          {error?<Text style={styles.errorMessage}>Invalid Input</Text>:null}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Color</Text>
          <TextInput onChangeText={(text) => [setColor(text),setError(false)]} placeholder='Enter Your Product Color' style={styles.inputBox} value={color} />
          {error?<Text style={styles.errorMessage}>Invalid Input</Text>:null}
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Image Link</Text>
          <TextInput onChangeText={(text) => [setImage(text),setError(false)]} placeholder='Enter Your Product Link' style={styles.inputBox} value={image} />
          {error?<Text style={styles.errorMessage}>Invalid Input</Text>:null}
        </View>
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={sendData}>
        <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
          <Modal transparent={true} visible={showModal}>
        <View style={styles.modalView}>
          <Svg width={100} height={100} viewBox="0 0 50 50">
            <Path
              d="M25 2c11.05 0 20 8.954 20 20s-8.95 20-20 20S5 33.05 5 22 13.954 2 25 2zm10.94 15.236L21.617 33.7l-7.557-7.558a1.2 1.2 0 10-1.697 1.697l8.125 8.124a1.2 1.2 0 001.697 0l16.857-16.857a1.2 1.2 0 00-1.696-1.696z"
              fill="#ffc637"
            />
          </Svg>
          <Text style={{ color: '#1ef51ef9',fontSize:18,fontWeight:'800',marginBottom:20 }}>Data Saved Successfully</Text>
          
        </View>
      </Modal>
    </ImageBackground>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        paddingHorizontal: 20,
        alignItems:'center'
        
    },
    titleText: {
        textAlign: 'center',
        borderBottomColor: 'orange',
        borderBottomWidth: 10,
        fontSize: 30,
        fontWeight: '900',
        color: 'black',
        marginTop:70
    },
    inputContainer: {
        
        width: '48%',
        marginBottom:20
    },
    container: {
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginVertical: 10,
        marginTop:70
        
    },
    inputLabel: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
        color: '#333',
      },
      inputBox: {
        borderWidth: 1,
        borderColor: 'orange',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 5,
          fontSize: 12,
          margin:5
        
    },
    buttonText: {
        fontWeight: '900',
        textAlign: 'center',
        color: 'white',
        fontSize:19
       
    },
    buttonContainer: {
        width: 100,
        height: 50,
        justifyContent: 'center',
        alignContent: 'center',
        borderRadius: 10,
        backgroundColor: '#fd8ba0',
    },
    errorMessage: {
        left: 10,
        color: '#fc6123',
        fontWeight: '700',
        bottom:5
    },
    
      transparentBackground: {
        opacity:0.2
    },
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
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
      
      
    
})