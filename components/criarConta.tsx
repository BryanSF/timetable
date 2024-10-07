import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Alert, TouchableOpacity, Image } from 'react-native';
import styles from '@/styles/login/styles';

interface SignupProps {
  onNavigate: (screen: string) => void;
}

const Signup: React.FC<SignupProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState<string>('');
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [passwordsMatch, setPasswordsMatch] = useState<boolean | null>(null);
  const [hasTypedPassword, setHasTypedPassword] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignup = () => {
    if (email === '' || password === '' || confirmPassword === '') {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }

    Alert.alert('Sucesso', 'Conta criada com sucesso!', [
      {
        text: 'OK',
        onPress: () => onNavigate('Login'),
      },
    ]);
  };

  // Verifica a validade do email sempre que ele mudar
  useEffect(() => {
    if (email) {
      setEmailValid(validateEmail(email));
    } else {
      setEmailValid(null);
    }
  }, [email]);

  // Verifica se as senhas digitadas coincidem
  useEffect(() => {
    if (hasTypedPassword && password && confirmPassword) {
      setPasswordsMatch(password === confirmPassword);
    }
  }, [password, confirmPassword, hasTypedPassword]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/logo-uniftc.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        placeholderTextColor="#aaa"
        onChangeText={setEmail}
      />
      {emailValid === false && <Text style={styles.error}>E-mail inválido</Text>}

      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        placeholderTextColor="#aaa"
        onChangeText={(text) => {
          setPassword(text);
          setHasTypedPassword(true);
        }}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirme a senha"
        value={confirmPassword}
        placeholderTextColor="#aaa"
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      {hasTypedPassword && passwordsMatch === false && (
        <Text style={styles.error}>As senhas não coincidem.</Text>
      )}

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => onNavigate('Login')}>
        <Text style={styles.link}>Já tem uma conta? Entre aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
