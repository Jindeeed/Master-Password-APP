import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function MasterPin() {
  
  const [pin,setPin] = useState('');
  
  
  const handleSubmit = function(){
    console.log('Pin:', pin)

  };
  
  
  return (
   
   
   <View style={styles.container}>
      <Text style={styles.text}>Enter your master pin </Text>
      <Text style = {styles.note}>Note: AVOID USING A BIRTHDAY - THEY ARE VERY EASY TO CRACK</Text>
     
     
     
      <TextInput 
        style = {styles.input} 
        placeholder='Enter Pin'
        secureTextEntry = {true}
        keyboardType='number-pad'
        maxLength={6}
        value={pin}
        onChangeText={setPin}

      />


      <TouchableOpacity style = {styles.button} onPress={handleSubmit} activeOpacity={0.7}>
          <Text style = {styles.buttonText}> Submit</Text>
      </TouchableOpacity>


    </View>
  

);
}




















const styles = StyleSheet.create({
  

  buttonText: {

  },


  button: {



  },
  
  input: {

    width: 80,
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10 // same as saying paddingleft:20 paddingright:20


  },
  
  note: { 

    fontSize: 5,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,

  },
  
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#fff' 
  
  },
  
  
  
  
  
  
  
  text: { fontSize: 24 },







});
