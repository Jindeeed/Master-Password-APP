import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  const handle_press = function(){
    
    router.push('/masterPass');




  }




    return(
        <View style = {styles.container}>
        
        <Text style={styles.text}>JintoPass</Text>
        
        <Text style = {styles.smallText}> Welcome to a home of security</Text>

        <TouchableOpacity style = {styles.button} onPress={handle_press} activeOpacity={0.7}>    
            <Text style={styles.buttonText}> Input A Master Password</Text>           
        </TouchableOpacity>

      

        </View>






    )


}





    
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 28, marginBottom: 20 },
  button: { backgroundColor: '#007AFF', paddingVertical: 12, paddingHorizontal: 25, borderRadius: 5 },
  buttonText: { color: '#fff', fontSize: 18 },

  smallText: {
    
    
    fontSize: 12,
    color: 'grey',
    marginBottom: 20,



  },


  text: {
    fontSize: 24,
    marginBottom: 20,

  },







});