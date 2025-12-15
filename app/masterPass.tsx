import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';


// i have learnt shorthead functions using constant example = example => example + example. This is an arrow function. But for readability i will be using the longhand regular method
// Some if statements on the other hand will use the short method e.g exampe? hi : bye 


export default function MasterPassScreen() {    // this allows import this function as the main thing from the file (this file specifically)
   
  
  
  const [master,setMaster] = useState(''); // master is used to allow user to enter password, setMastere is useds to update the password, useState is used to temporarily store a value.
   // const[pin,setPin] = useState('') // in case user would rather use a pin as opposed to a master password.
    
   
   
   const [error,setError] = useState('');
   
   
   
   
   const isValid = minLength(master) && specialChar(master) && upperCase(master) && digit(master);  /* creates a valid check so we know if password meets requirements */
    
    const router = useRouter();


    const handleInput = function(){
      if (isValid) {
        setError('');
        router.push('...') // not created authentication logic yet so unnamed screen

        
      } else {
         setError('Password does not meet requirements. Please Update');
        return;
      }
       
    }

    const handlePin = function(){

     router.push('/masterPin');



    }

    function minLength(master: string): boolean {
        
      return master.length >= 8

    };

    function specialChar(master: string): boolean {
        return /[^A-Za-z0-9]/.test(master)
    }


    function upperCase(master: string): boolean {
        return /[A-Z]/.test(master)

    }

    function digit(master: string): boolean{ 
      return /[0-9]/.test(master)
    }

    
  


    return (
      <KeyboardAvoidingView style = {styles.container} behavior={Platform.OS === 'ios'? 'padding':'height'}> 
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible = {false}>
          <View style = {styles.container}>
              <Text style = {styles.title}> Master Password</Text>


              <TextInput
                style = {styles.input}
                placeholder='Enter Master Password'
                placeholderTextColor={"black"}
                secureTextEntry={true}
                keyboardType='default'
                value={master}
                onChangeText={setMaster}
              />


              <Text> 
                Your Password:
              </Text>

              <Text style = {{color: digit(master)? 'green': 'red', fontWeight: 'bold', fontSize: 10}}>
                • Contains a digit           
              </Text>

              <Text style = {{color: upperCase(master)? 'green':'red', fontWeight:'bold',fontSize: 10}}>
                • Contains an upper case           
              </Text>

              <Text style = {{color: specialChar(master)? 'green':'red', fontWeight:'bold',fontSize: 10}}>
                • Contains a special character            
              </Text>

              <Text style = {{color: minLength(master)? 'green':'red', fontWeight:'bold',fontSize: 10}}>
                • Has at least 8 characters          
              </Text>

              <Text style = {styles.buttonText}> Submit </Text>


              <TouchableOpacity style = {styles.pinButton} onPress = {handlePin} activeOpacity={0.7}>           
              
                <Text style = {styles.pinButtonText}> Use Pin Instead</Text>            
              </TouchableOpacity>


              <TouchableOpacity style = {styles.enterButton} onPress = {handleInput}>
                
                
            </TouchableOpacity>

          </View>

        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>




    )















}

const styles = StyleSheet.create({
    pinButton: {





    },

    
    enterButton: {

        backgroundColor: '#007AFF',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 5,
        marginTop: 15,


    },
    
    
    
    pinButtonText: {




    },
  
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 50,
    borderColor: 'grey',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },


});

