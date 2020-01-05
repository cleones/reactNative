/* eslint-disable react/prop-types */
import React from 'react';
import {Text} from 'react-native';
import Padrao from '../estilo/padrao';

const ParImpart = ({numero}) => {
    return <Text style={[Padrao.ex]}>{parOuImpar(numero)}</Text>
}
const parOuImpar = (numero) => numero % 2 === 0 ? 'Par' : 'Impar';

export default ParImpart;
