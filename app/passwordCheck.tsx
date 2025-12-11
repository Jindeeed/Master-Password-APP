import { dismiss } from 'expo-router/build/global-state/routing';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TouchableWithoutFeedback} from 'react-native-gesture-handler';

export default function passwordCheck() {

    const [pass,setPass] = useState('');





    function checkPass(pass: string){
        
        let passed = 0

        const requirement = [
            function (pass: string): boolean { return /[^A-Za-z0-9]/.test(pass)},
            function (pass: string): boolean { return /[0-9]/.test(pass)},
            function (pass: string): boolean { return /[A-Z]/.test(pass)},
            function (pass: string): boolean { return /[a-z]/.test(pass)}

        ]        

        

        for (let i = 0; i < requirement.length; i ++ ){
          requirement[i]?passed+=1:pass; 
        }

    };



    return (


    <KeyboardAvoidingView style = {styles.container} behavior={Platform.OS === 'ios'? 'padding':'height'}>
    <View style = {styles.container}> 

        <Text> Enter A Password To Obtain A PassRate </Text>

        <TextInput 
        style={styles.input}
        onChangeText={setPass}
        value = {pass}
        placeholder='Enter'
        placeholderTextColor={'grey'}
        keyboardType='default'
        secureTextEntry={true}        
        />

        

        
        
        
    </View>
    </KeyboardAvoidingView>


    











);
}





const styles = StyleSheet.create({


    container: {




    },


    input: {






    },

























});