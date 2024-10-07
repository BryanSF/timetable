import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ClassInterface from '@/interfaces/aulas';
import styles from '@/styles/list/styles';

interface ListarAulasProps {
  aulas: ClassInterface[];
  selectedDate?: string;
}

const ListarAulas: React.FC<ListarAulasProps> = ({ aulas, selectedDate }) => {
  const diasDaSemana = [
    'domingo',
    'segunda-feira',
    'terça-feira',
    'quarta-feira',
    'quinta-feira',
    'sexta-feira',
    'sábado',
  ];

  const getDiaNome = (data: string): string => {
    const [day, month, year] = data.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    const diaAtual = date.getDay();
    return diasDaSemana[diaAtual];
  };

  // Caso não haja uma data selecionada, pegue a data atual
  const dataAtual = new Date();
  const diaAtual = dataAtual.getDate().toString().padStart(2, '0');
  const mesAtual = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
  const anoAtual = dataAtual.getFullYear();
  const dataAtualFormatada = `${diaAtual}/${mesAtual}/${anoAtual}`;

  // Se `selectedDate` for definido, use-o. Caso contrário, use a data atual formatada.
  const diaAtualNome = getDiaNome(selectedDate ? selectedDate : dataAtualFormatada);

  // Verifica se não foi selecionada uma data no calendário
  if (!selectedDate) {
    return (
      <View style={styles.container}>
        <Text style={styles.noClassesText}>
          Nenhuma data foi selecionada. Por favor, selecione uma data no calendário.
        </Text>
      </View>
    );
  }

  // Caso não haja aulas para a data selecionada
  if (aulas.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.noClassesText}>Nenhuma aula encontrada para esta data.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aulas de {diaAtualNome}</Text>
      <FlatList
        data={aulas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.aulaContainer}>
            <Text>{item.horario}</Text>
            <Text>{item.materia}</Text>
            <Text>{item.professor}</Text>
            <Text>{item.sala}</Text>
            <Text>{item.turma}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default ListarAulas;
