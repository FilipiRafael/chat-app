import { View , Text, TextInput, Button, SafeAreaView } from "react-native";
import { useState } from "react";
import { useNavigation } from '@react-navigation/native';

export default function Login() {
    const [name, setName] = useState('');

    const navigation = useNavigation();

    return (
        <SafeAreaView>
          <View>
            <Text>Nome de Usuário</Text>
            <TextInput
              onChangeText={setName}    
            />
          </View>
          <Button
            title="Entrar"
            onPress={() => navigation.navigate('Chat', { name: name })}
          />
        </SafeAreaView>
    )
}