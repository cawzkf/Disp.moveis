import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.imag}>IMAGEM - LOGO</Text>

      <TextInput
      style={styles.inputs}
      placeholder='Email'
      />

      <TextInput
      style={styles.inputs}
      placeholder='Senha'
      secureTextEntry={true}
      />

     <TouchableOpacity style={styles.but}>
        <Text> Entrar </Text>
     </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        flex: 1 ,
        marginTop: 290
    },
    imag:{
        marginVertical: 35
    },
    inputs:{
        width: '80%',
        backgroundColor: '#c1c1c1',
        marginTop: 15,
        paddingVertical: 20,
        paddingHorizontal: 10,
        fontSize: 20,
        borderRadius: 8
    },
    but:{
        marginVertical: 35,
        padding: 5
         
    }
});
