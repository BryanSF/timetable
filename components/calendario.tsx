// components/Calendario.tsx
import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styles from '@/styles/calendario/styles';

interface CalendarioProps {
  onDateSelect: (date: string) => void;
}

const { height, width } = Dimensions.get('window');

const Calendario: React.FC<CalendarioProps> = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState<string | undefined>();

  const onDayPress = (day: { dateString: string }) => {
    setSelectedDate(day.dateString);
    onDateSelect(day.dateString);
  };

  return (
    <View style={[styles.container, { height: height * 0.9, width }]}>
      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate!]: { selected: true, marked: true, selectedColor: 'blue' },
        }}
        style={{ height: height * 0.8, backgroundColor: 'black' }} 
        theme={{
          calendarBackground: 'black',
          textSectionTitleColor: 'white',
          dayTextColor: 'white',
          todayTextColor: 'blue',
          selectedDayTextColor: 'white',
          arrowColor: 'white',
          monthTextColor: 'white',
        }}
      />
      {selectedDate && (
        <Text style={styles.selectedDateText}>Data selecionada: {selectedDate}</Text>
      )}
    </View>
  );
};


export default Calendario;
