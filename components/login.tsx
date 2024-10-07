// components/LoginScreen.tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Image } from 'react-native';
import styles from '@/styles/login/styles';

interface LoginProps {
  onNavigate: (screen: string) => void;
}

const LoginScreen: React.FC<LoginProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [emailValid, setEmailValid] = useState<boolean | null>(null);

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    if (email === '' || password === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
      return;
    }

    onNavigate('MinhasAulas');
  };

  useEffect(() => {
    if (email) {
      setEmailValid(validateEmail(email));
    } else {
      setEmailValid(null);
    }
  }, [email]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo-uniftc.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#aaa"
        keyboardType="email-address"
      />
      {emailValid === false && <Text style={styles.error}>E-mail inválido</Text>}

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#aaa"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onNavigate('Signup')}>
        <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
