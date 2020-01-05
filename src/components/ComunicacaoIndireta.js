import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Padrao from '../estilo/padrao';

// eslint-disable-next-line react/prop-types
export const Entrada = ({texto,chamarQuandoMudar}) => {
  return (
    <View>
        <TextInput
            value={texto}
            style={Padrao.input}
            onChangeText={(value) => chamarQuandoMudar(value)}
        />
    </View>
  );
}

export const TextoSincronizado = () => {
    const [texto, setTexto] = useState('');
    return (
        <View>
            <Text style={Padrao.fonte40}>{texto}</Text>
            <Entrada
                texto={texto}
                chamarQuandoMudar={(value) => setTexto(value) }
            />
        </View>
    );
}
