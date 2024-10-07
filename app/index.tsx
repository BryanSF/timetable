import React, { useState } from 'react';
import { View } from 'react-native';
import ClassInterface from '../interfaces/aulas';
import styles from '@/styles/global';
import LoginScreen from '../components/login';
import Footer from '@/components/footer';
import Signup from '../components/criarConta';
import ListarMinhasAulas from '../components/listarMinhasAulas';
import Calendario from '../components/calendario';
import ListarAulas from '../components/listarAulas';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<string>('Login');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string | undefined>(undefined);

  const aulas: ClassInterface[] = [
    {
      id: 1,
      data: '07/10/2024',
      horario: '08:00 - 09:30',
      materia: 'Matemática',
      professor: 'Prof. João',
      sala: '101',
      turma: 'A',
    },
    {
      id: 2,
      data: '07/10/2024',
      horario: '09:30 - 11:00',
      materia: 'Física',
      professor: 'Prof. Maria',
      sala: '102',
      turma: 'B',
    },
    {
      id: 3,
      data: '07/10/2024',
      horario: '11:00 - 12:30',
      materia: 'Física',
      professor: 'Prof. Maria',
      sala: '102',
      turma: 'B',
    },
    {
      id: 4,
      data: '07/10/2024',
      horario: '14:00 - 15:30',
      materia: 'Física',
      professor: 'Prof. Maria',
      sala: '102',
      turma: 'B',
    },
    {
      id: 5,
      data: '08/10/2024',
      horario: '08:00 - 09:30',
      materia: 'Matemática',
      professor: 'Prof. João',
      sala: '101',
      turma: 'A',
    },
    {
      id: 6,
      data: '08/10/2024',
      horario: '09:30 - 11:00',
      materia: 'Física',
      professor: 'Prof. Maria',
      sala: '102',
      turma: 'B',
    },
    {
      id: 7,
      data: '08/10/2024',
      horario: '11:00 - 12:30',
      materia: 'Física',
      professor: 'Prof. Maria',
      sala: '102',
      turma: 'B',
    },
    {
      id: 8,
      data: '08/10/2024',
      horario: '14:00 - 15:30',
      materia: 'Física',
      professor: 'Prof. Maria',
      sala: '102',
      turma: 'B',
    },
  ];

  const todasAulas: ClassInterface[] = [
    {
      id: 1,
      data: '07/10/2024',
      horario: '08:00 - 09:30',
      materia: 'Matemática',
      professor: 'Prof. João',
      sala: '101',
      turma: 'A',
    },
    {
      id: 2,
      data: '08/10/2024',
      horario: '09:30 - 11:00',
      materia: 'Física',
      professor: 'Prof. Maria',
      sala: '102',
      turma: 'B',
    },
    {
      id: 3,
      data: '06/10/2024',
      horario: '11:00 - 12:30',
      materia: 'Física',
      professor: 'Prof. Maria',
      sala: '102',
      turma: 'B',
    },
    {
      id: 4,
      data: '08/10/2024',
      horario: '14:00 - 15:30',
      materia: 'Física',
      professor: 'Prof. Maria',
      sala: '102',
      turma: 'B',
    },
    {
      id: 5,
      data: '08/10/2024',
      horario: '08:00 - 09:30',
      materia: 'Matemática',
      professor: 'Prof. João',
      sala: '101',
      turma: 'A',
    },
    {
      id: 6,
      data: '08/10/2024',
      horario: '09:30 - 11:00',
      materia: 'Física',
      professor: 'Prof. Maria',
      sala: '102',
      turma: 'B',
    },
    {
      id: 7,
      data: '08/10/2024',
      horario: '11:00 - 12:30',
      materia: 'Física',
      professor: 'Prof. Maria',
      sala: '102',
      turma: 'B',
    },
    {
      id: 8,
      data: '08/10/2024',
      horario: '14:00 - 15:30',
      materia: 'Física',
      professor: 'Prof. Maria',
      sala: '102',
      turma: 'B',
    },
  ];

  const handleNavigate = (screen: string) => {
    setCurrentScreen(screen);
    if (screen === 'MinhasAulas') {
      setIsLoggedIn(true);
    } else if (screen === 'Login') {
      setIsLoggedIn(false);
    }
  };

  const formatDateToDDMMYYYY = (dateString: string) => {
    const dateParts = dateString.split('-');
    return `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
  };

  const handleDateSelect = (date: string) => {
    const formattedDate = formatDateToDDMMYYYY(date);
    setSelectedDate(formattedDate);
    setCurrentScreen('TodasAulas');
  };

  const filteredAulas = selectedDate ? todasAulas.filter((aula) => aula.data === selectedDate) : [];

  return (
    <View style={styles.container}>
      {currentScreen === 'Login' && <LoginScreen onNavigate={handleNavigate} />}
      {currentScreen === 'Calendar' && <Calendario onDateSelect={handleDateSelect} />}
      {currentScreen === 'Signup' && <Signup onNavigate={() => handleNavigate('Login')} />}
      {currentScreen === 'MinhasAulas' && <ListarMinhasAulas aulas={aulas} />}
      {currentScreen === 'TodasAulas' && (
        <ListarAulas aulas={filteredAulas} selectedDate={selectedDate} />
      )}
      {isLoggedIn && <Footer currentScreen={currentScreen} onNavigate={handleNavigate} />}
    </View>
  );
};

export default App;
