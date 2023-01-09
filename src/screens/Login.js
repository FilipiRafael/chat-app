import { View , Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const [name, setName] = useState('');

    const navigation = useNavigation();

    return (
      <View style={styles.container}>
          <View>
            <Image
              style={styles.logo}
              source={require('../../assets/images/logo.png')}
            />
            <Text style={styles.inputField}>Digite seu nome</Text>
            <TextInput
              onChangeText={setName}  
              style={styles.input}  
            />
          </View>
          <TouchableOpacity
            style={name.length === 0 ? styles.buttonDisabled : styles.button}
            onPress={() => navigation.navigate('Chat', { name: name })}
            disabled={name.length === 0}
          >
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121214',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginVertical: 20
  },
  inputField: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#F5F5F5',
    width: 300,
    marginVertical: 20,
    height: 40,
    borderRadius: 5,
    fontSize: 20,
    paddingHorizontal: 10
  },
  button: {
    width: 300,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#FFCB31',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    textDecoration: 'uppercase',
    color: '#000',
    fontWeight: 'bold'
  },
  buttonDisabled: {
    opacity: 0.5,
    width: 300,
    height: 40,
    borderRadius: 5,
    backgroundColor: '#FFCB31',
    justifyContent: 'center',
    alignItems: 'center'
  }
});