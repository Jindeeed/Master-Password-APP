import { dismiss } from 'expo-router/build/global-state/routing';
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { TouchableWithoutFeedback} from 'react-native-gesture-handler';

const requirement = [
        function (pass: string): boolean { return /[^A-Za-z0-9]/.test(pass)},
        function (pass: string): boolean { return /[0-9]/.test(pass)},
        function (pass: string): boolean { return /[A-Z]/.test(pass)},
        function (pass: string): boolean { return /[a-z]/.test(pass)},
        function (pass: string): boolean {return pass.length>= 8}
    ]; 



export default function PasswordCheck() {

    const [pass,setPass] = useState('');
    const [score,setScore] = useState<number | null>(null); /* nul is not checked yet*/





    function checkPass(pass: string){
        
        let passed = 0
        for (let i = 0; i < requirement.length; i ++ ){
          if (requirement[i](pass)) passed += 1;
            return passed;
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
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 18,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 12,
        borderRadius: 5,
        marginBottom: 20,
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    result: {
        fontSize: 16,
        fontWeight: 'bold',
    },
});
    