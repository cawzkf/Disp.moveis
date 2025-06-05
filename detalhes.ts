import { View, Text, StyleSheet, ScrollView, Image, Button, TouchableOpacity } from 'react-native';

const produtos = [
  { id: 1, nome: "Whey Protein", preco: 129.90, descricao: "Proteína para ganho de massa muscular e recuperação.", img: 'https://i.imgur.com/C8g4daF.png' },
  { id: 2, nome: "Creatina", preco: 89.90, descricao: "Aumenta força e desempenho nos treinos.", img: 'https://i.imgur.com/q9f8J0t.png' },
  { id: 3, nome: "BCAA", preco: 109.90, descricao: "Aminoácidos para recuperação e redução da fadiga.", img: 'https://i.imgur.com/MQ9j5Sg.png' },
  { id: 4, nome: "Pré-Treino", preco: 79.90, descricao: "Energia e foco para treinos intensos.", img: 'https://i.imgur.com/lVQb5kp.png' },
  
];

export default function Produtos({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {produtos.map((item) => (
        <View key={item.id} style={styles.card}>
          <Image source={{uri: item.img}} style={styles.img}/>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.desc}>{item.descricao}</Text>
          <Text style={styles.preco}>R$ {item.preco}</Text>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Detalhes', { produto: item })}>
            <Text style={{color:'#fff'}}>Ver Detalhes</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center' },
  card: { borderWidth:1, borderColor:'#eee', borderRadius:10, padding:10, margin:10, width:250, alignItems:'center' },
  img: { width:100, height:100, marginBottom:10 },
  nome: { fontSize:18, fontWeight:'bold' },
  desc: { textAlign:'center', marginVertical:5 },
  preco: { fontSize:16, color:'green' },
  btn: { backgroundColor:'pink', padding:10, borderRadius:8, marginTop:5 }
});
