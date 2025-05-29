import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Login() {
  return (
    <>
      <LinearGradient
        colors={['#ffc1cc', '#ffb6c1', '#ffe4ec']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      <View style={styles.container}>
        <View style={styles.logo}>
        <FontAwesome6 name="dumbbell" size={60} color="black" /> 
        </View>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#a84c66"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry
          placeholderTextColor="#a84c66"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    fontWeight: 'bold',
    color: '#a84c66',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff0f5',
    marginBottom: 20,
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 16,
    color: '#a84c66',
    borderWidth: 1,
    borderColor: '#ffa3b5',
  },
  button: {
    backgroundColor: '#f78fb3',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 12,
    marginTop: 20,
    shadowColor: '#ffbad2',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
