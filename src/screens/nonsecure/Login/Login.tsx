import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { userAtom } from '../../../utils/atoms';
import { useSetAtom } from 'jotai';
import { urls } from '../../../services/urls';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setUser = useSetAtom(userAtom);

  const handleLogin = () => {
    fetch(urls.user, {
        method: 'GET',
      }).then((response) => response.json()).then((responseData) => {
        setUser(responseData);
      }).catch((error) => {
        console.error(error);
      }
      );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gelisibu</Text>
      <TextInput
        style={styles.input}
        placeholder="E-posta"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Giriş Yap</Text>
      </TouchableOpacity>
    </View>
  );
}


