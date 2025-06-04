// HomeScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';

const categorias = [
  {
    nome: 'Whey Protein',
    descricao: 'Suplemento proteico usado para ajudar na recuperação muscular e ganho de massa magra.',
  },
  {
    nome: 'Creatina',
    descricao: 'Ajuda a melhorar o desempenho físico em exercícios de alta intensidade e curta duração.',
  },
  {
    nome: 'Pré-Treino',
    descricao: 'Fornece energia e foco antes do treino, geralmente contém cafeína e outros estimulantes.',
  },
  {
    nome: 'BCAA',
    descricao: 'Aminoácidos essenciais que ajudam na recuperação muscular e previnem a fadiga.',
  },
  {
    nome: 'Termogênicos',
    descricao: 'Suplementos que aceleram o metabolismo e ajudam na queima de gordura corporal.',
  },
];

const HomeScreen = () => {
  const [aberto, setAberto] = useState(null);

  const toggleCategoria = (index) => {
    setAberto(aberto === index ? null : index);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Categorias de Suplementos</Text>

      {categorias.map((item, index) => (
        <View key={index} style={styles.card}>
          <TouchableOpacity onPress={() => toggleCategoria(index)}>
            <Text style={styles.nomeCategoria}>{item.nome}</Text>
          </TouchableOpacity>
          {aberto === index && (
            <Text style={styles.descricao}>{item.descricao}</Text>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
    flex: 1,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#D81B60', // UsaresseTom como rosa principal nos outros 
    textAlign: 'center',
  },
  card: {
    marginBottom: 12,
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#F8BBD0', // rosinhaumOoPouco claro(usarnofundo)
    elevation: 3,
  },
  nomeCategoria: {
    fontSize: 18,
    fontWeight: '600',
    color: '#880E4F',
  },
  descricao: {
    marginTop: 8,
    color: '#4A148C',
    fontSize: 14,
  },
});

export default HomeScreen;
