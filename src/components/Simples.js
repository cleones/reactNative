import React from 'react';
import { Text } from 'react-native';
import Padrao from '../estilo/padrao';

// eslint-disable-next-line react/prop-types
const Simples = ({ name }) => {
    return <Text style={[Padrao.ex]}> { name } </Text>
}

export default Simples;