import React, { useState } from 'react';
import { View } from 'react-native';
import LoginScreen from '../components/login';
import Signup from '../components/criarConta';

export default function App() {
    const [isLogin, setIsLogin] = useState(true);

    const toggleScreen = () => {
        setIsLogin(prev => !prev);
    };

    return (
        <View style={{ flex: 1 }}>
            {isLogin ? (
                <LoginScreen onNavigate={toggleScreen} />
            ) : (
                <Signup onNavigate={toggleScreen} />
            )}
        </View>
    );
} 
