import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

type UnlockInputProps = {
  buttonLabel?: string;
};

export default function UnlockInput({ buttonLabel = "Submit" }: UnlockInputProps) {
  const router = useRouter();

  const [pass, setPass] = useState('');
  const [error, setError] = useState('');


  const storedMasterPass = 'TestingPassword223232*'; // temporary password

  function handleInput() {
    if (pass === storedMasterPass) {
      setError('');
      router.push('/vault');
    } else {
      setError('Password is incorrect');
    }
  }



return (
    <View





)