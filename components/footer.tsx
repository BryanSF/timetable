import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import styles from '@/styles/footer/styles';

interface FooterProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

const Footer: React.FC<FooterProps> = ({ currentScreen, onNavigate }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => onNavigate('Calendar')} style={styles.iconContainer}>
        <MaterialIcons
          name="calendar-today"
          size={24}
          color={currentScreen === 'Calendar' ? 'white' : 'gray'}
        />
        <Text style={{ color: currentScreen === 'Calendar' ? 'white' : 'gray' }}>Calendário</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigate('MinhasAulas')} style={styles.iconContainer}>
        <MaterialIcons
          name="class"
          size={24}
          color={currentScreen === 'MinhasAulas' ? 'white' : 'gray'}
        />
        <Text style={{ color: currentScreen === 'MinhasAulas' ? 'white' : 'gray' }}>
          Minhas Aulas
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onNavigate('TodasAulas')} style={styles.iconContainer}>
        <MaterialIcons
          name="school"
          size={24}
          color={currentScreen === 'TodasAulas' ? 'white' : 'gray'}
        />
        <Text style={{ color: currentScreen === 'TodasAulas' ? 'white' : 'gray' }}>
          Todas as Aulas
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
