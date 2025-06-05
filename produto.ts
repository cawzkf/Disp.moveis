import { View, Text, StyleSheet, Image } from 'react-native';

export default function Detalhes({ route }) {
  const { produto } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{uri: produto.img}} style={styles.img}/>
      <Text style={styles.nome}>{produto.nome}</Text>
      <Text style={styles.desc}>{produto.descricao}</Text>
      <Text style={styles.preco}>R$ {produto.preco}<~+/Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  img: { width:200, height:200, marginBottom:20 },
  nome: { fontSize:24, fontWeight:'bold' },
  desc: { textAlign:'center', marginVertical:10, paddingHorizontal:20 },
  preco: { fontSize:20, color:'green' }
});