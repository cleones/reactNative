import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native'
import padrao from '../estilo/padrao';

const Evento = () => {
    const [texto, setTexto] = useState('xxxx');
    const changeText = (value) =>  setTexto(value);
    return (
      <View>
          <Text style={padrao.fonte40}>{texto}</Text>
          <TextInput
            value={texto}
            onChangeText={(value) => changeText(value)}
          >

          </TextInput>
      </View>
    );
  };
export default Evento;
