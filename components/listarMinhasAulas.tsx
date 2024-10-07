import React from 'react';
import { View, Text, FlatList } from 'react-native';
import ClassInterface from '../interfaces/aulas';
import styles from '@/styles/list/styles';

interface ListarMinhasAulasProps {
  aulas: ClassInterface[];
}

const ListarMinhasAulas: React.FC<ListarMinhasAulasProps> = ({ aulas }) => {
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

  // Obtém a data atual no formato DD/MM/YYYY
  const dataAtual = new Date();
  const diaAtual = dataAtual.getDate().toString().padStart(2, '0');
  const mesAtual = (dataAtual.getMonth() + 1).toString().padStart(2, '0');
  const anoAtual = dataAtual.getFullYear();
  const dataAtualFormatada = `${diaAtual}/${mesAtual}/${anoAtual}`;

  // Filtra as aulas para mostrar apenas as do dia atual
  const aulasDoDia = aulas.filter((aula) => aula.data === dataAtualFormatada);

  const diaAtualNome = getDiaNome(dataAtualFormatada);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aulas de {diaAtualNome}</Text>
      <FlatList
        data={aulasDoDia}
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
      {aulasDoDia.length === 0 && (
        <Text style={styles.noClassesText}>Nenhuma aula disponível para hoje.</Text>
      )}
    </View>
  );
};

export default ListarMinhasAulas;
