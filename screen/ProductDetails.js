import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import background from '../assets/bcg.png'
const ProductDetails = () => {
  return (
        <ImageBackground source={background} style={styles.imageBackground}>
          <Text style={styles.titleText}>Listing Your Product</Text>
          <View style={styles.container}>
              <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Name</Text>
                  <TextInput placeholder='Enter Your Product name' style={styles.inputBox}/>
              </View>
              <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Price</Text>
                  <TextInput placeholder='Enter Your Product Price' style={styles.inputBox}/>
              </View>
              <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Color</Text>
                  <TextInput placeholder='Enter Your Product Color' style={styles.inputBox}/>
              </View>
              <View style={styles.inputContainer}>
                  <Text style={styles.inputLabel}>Image Link</Text>
                  <TextInput placeholder='Enter Your Product Link' style={styles.inputBox}/>
              </View>
          </View>
        </ImageBackground>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
        paddingHorizontal: 20,
        
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
    
})